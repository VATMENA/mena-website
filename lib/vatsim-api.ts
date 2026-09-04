import {
    ApiErrorBody,
    Roster,
    SoloList,
    VaccDirectoryEntry,
    VaccList,
    VaccResult,
} from "@/types/vatsim-api";

/**
 * Server-side client for the VATSIM MENA HQ API.
 *
 * Every endpoint is authenticated with a secret bearer key, so this module must
 * only ever be imported from server components or route handlers - never from a
 * "use client" module, which would ship the key to the browser.
 */

const API_BASE = process.env.VATMENA_API_BASE;

/** How long a successful API response is reused before it is refetched. */
export const REVALIDATE_SECONDS = 300;

/** Human readable copy for the error codes the API documents. */
const errorMessages: Record<string, string> = {
    unauthorized: "The division API key was rejected.",
    insufficient_scope: "The division API key is missing the scope needed for this data.",
    forbidden_vacc: "The division API key is not permitted to read this vACC.",
    forbidden_ip: "This server is not allowed to call the division API.",
    rate_limited: "The division API is rate limiting requests. Please try again shortly.",
    not_found: "No data is published for this vACC.",
    internal_error: "The division API returned an error.",
};

class VatsimApiError extends Error {
    constructor(public readonly code: string, message: string) {
        super(message);
        this.name = "VatsimApiError";
    }
}

function describe(code: string, message?: string): string {
    return errorMessages[code] ?? message ?? `The division API returned "${code}".`;
}

async function apiFetch<T>(path: string): Promise<T> {
    const apiKey = process.env.VATMENA_API_KEY;
    if (!apiKey) {
        throw new VatsimApiError(
            "not_configured",
            "This page is not configured yet. Set VATMENA_API_KEY to enable it.",
        );
    }

    const res = await fetch(`${API_BASE}${path}`, {
        headers: { Authorization: `Bearer ${apiKey}` },
        next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
        const body: Partial<ApiErrorBody> = await res.json().catch(() => ({}));
        const code = body.error ?? `http_${res.status}`;
        throw new VatsimApiError(code, describe(code, body.message));
    }

    return res.json() as Promise<T>;
}

/** The vACCs the key may read, ordered by name so the page reads predictably. */
async function getVaccs(): Promise<VaccDirectoryEntry[]> {
    const { vaccs } = await apiFetch<VaccList>("/vaccs");
    return [...vaccs].sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Fetches `path(code)` for every vACC in the directory. vACCs are resolved
 * independently: one rejection is reported against that vACC alone and leaves
 * the rest of the page intact.
 */
async function forEachVacc<T>(
    path: (code: string) => string,
): Promise<{ ok: true; results: VaccResult<T>[] } | { ok: false; error: string }> {
    let vaccs: VaccDirectoryEntry[];
    try {
        vaccs = await getVaccs();
    } catch (error) {
        return {
            ok: false,
            error: error instanceof VatsimApiError
                ? error.message
                : "The list of vACCs could not be loaded.",
        };
    }

    const settled = await Promise.allSettled(
        vaccs.map((vacc) => apiFetch<T>(path(encodeURIComponent(vacc.code)))),
    );

    const results = settled.map((outcome, index): VaccResult<T> => {
        const vacc = vaccs[index];
        if (outcome.status === "fulfilled") {
            return { vacc, ok: true, data: outcome.value };
        }
        const reason = outcome.reason;
        return {
            vacc,
            ok: false,
            error: reason instanceof VatsimApiError
                ? reason.message
                : "This vACC's data could not be loaded.",
        };
    });

    return { ok: true, results };
}

export function getSolosForAllVaccs() {
    return forEachVacc<SoloList>((code) => `/vaccs/${code}/solos?status=all`);
}

export function getRosterForAllVaccs() {
    return forEachVacc<Roster>((code) => `/vaccs/${code}/roster`);
}
