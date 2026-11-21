import React from "react";
import { cn } from "@/lib/utils";

/**
 * Inline message used by the roster and validation pages for empty results and
 * for the vACCs whose data could not be loaded.
 */
function DataNotice({
    children,
    variant = "muted",
    className,
}: {
    children: React.ReactNode;
    variant?: "muted" | "error";
    className?: string;
}) {
    return (
        <div
            className={cn(
                "mt-3 rounded-md border px-4 py-3 text-sm",
                variant === "error"
                    ? "border-destructive/40 bg-destructive/10 text-destructive-foreground"
                    : "border-border bg-muted/30 text-muted-foreground",
                className,
            )}
        >
            <em>{children}</em>
        </div>
    );
}

export default DataNotice;
