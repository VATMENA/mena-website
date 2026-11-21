/**
 * Response shapes for the VATSIM MENA HQ API (https://api.vatsim.me/v1).
 * See https://api.vatsim.me/v1/openapi.json for the authoritative schema.
 */

export type ControllerPosition = "DEL" | "GND" | "TWR" | "APP" | "CTR";

export type SoloStatus = "active" | "paused" | "expired";

export interface VaccDirectoryEntry {
    code: string;
    name: string;
    slug: string | null;
    firs: string[];
    prefixes: string[];
}

export interface VaccList {
    count: number;
    vaccs: VaccDirectoryEntry[];
}

export interface SoloEndorsement {
    cid: string;
    name: string;
    position: string;
    type: string;
    status: SoloStatus;
    startDate: string | null;
    endDate: string | null;
    maxDays: number;
    daysRemaining: number;
}

export interface SoloList {
    vacc: string;
    count: number;
    statuses: SoloStatus[];
    solos: SoloEndorsement[];
}

export interface RosterController {
    cid: string;
    name: string;
    rating: string | null;
    positions: ControllerPosition[];
}

export interface Roster {
    vacc: string;
    vaccName: string;
    generatedAt: string;
    counts: {
        home: number;
        visiting: number;
    };
    home: RosterController[];
    visiting: RosterController[];
}

/** Error body returned by the API for any non-2xx response. */
export interface ApiErrorBody {
    error: string;
    message?: string;
}

/**
 * The outcome of fetching one vACC's data. Each vACC is resolved independently
 * so that a single failure (an API key that is not scoped to that vACC, a rate
 * limit, a transient outage) degrades that section only, not the whole page.
 */
export type VaccResult<T> =
    | { vacc: VaccDirectoryEntry; ok: true; data: T }
    | { vacc: VaccDirectoryEntry; ok: false; error: string };
