import React from "react";
import { cn } from "@/lib/utils";
import { ControllerPosition } from "@/types/vatsim-api";

/** Bottom of the position ladder to the top, so badges always read in order. */
const positionOrder: ControllerPosition[] = ["DEL", "GND", "TWR", "APP", "CTR"];

const positionStyles: Record<ControllerPosition, string> = {
    DEL: "border-sky-400/40 bg-sky-400/10 text-sky-300",
    GND: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
    TWR: "border-amber-400/40 bg-amber-400/10 text-amber-300",
    APP: "border-violet-400/40 bg-violet-400/10 text-violet-300",
    CTR: "border-rose-400/40 bg-rose-400/10 text-rose-300",
};

function PositionBadges({ positions }: { positions: ControllerPosition[] }) {
    const ordered = [...positions].sort(
        (a, b) => positionOrder.indexOf(a) - positionOrder.indexOf(b),
    );

    return (
        <div className="flex flex-wrap gap-1.5">
            {ordered.map((position: ControllerPosition) => (
                <span
                    key={position}
                    className={cn(
                        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
                        positionStyles[position] ?? "border-border bg-muted/30 text-muted-foreground",
                    )}
                >
                    {position}
                </span>
            ))}
        </div>
    );
}

export default PositionBadges;
