"use client";

import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import DataNotice from "@/components/vacc-data/data-notice";
import PositionBadges from "@/components/vacc-data/position-badge";
import { formatDate } from "@/lib/utils";
import { Roster, RosterController, VaccResult } from "@/types/vatsim-api";

function controllerTable(controllers: RosterController[], emptyText: string) {
    if (controllers.length < 1) {
        return <DataNotice>{emptyText}</DataNotice>;
    }
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-1/6">CID</TableHead>
                    <TableHead className="w-1/6">Rating</TableHead>
                    <TableHead>Positions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="text-start">
                {controllers.map((controller: RosterController) => (
                    <TableRow key={controller.cid}>
                        <TableCell className="font-medium">{controller.cid}</TableCell>
                        <TableCell>{controller.rating ?? "—"}</TableCell>
                        <TableCell>
                            <PositionBadges positions={controller.positions} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

/** Controllers with no endorsed positions are not shown on the roster. */
const endorsed = (controllers: RosterController[]) =>
    controllers.filter((controller) => controller.positions.length > 0);

/**
 * Shows one vACC's roster at a time, picked from a row of filter buttons.
 * Every vACC is fetched on the server, so switching between them is instant.
 */
function RosterFilter({ results }: { results: VaccResult<Roster>[] }) {
    const [selectedCode, setSelectedCode] = useState(results[0]?.vacc.code);

    if (results.length < 1) {
        return <DataNotice>No vACCs were found.</DataNotice>;
    }

    const selected = results.find((result) => result.vacc.code === selectedCode) ?? results[0];

    return (
        <>
            <div className="flex flex-wrap gap-2">
                {results.map((result: VaccResult<Roster>) => (
                    <Button
                        key={result.vacc.code}
                        variant={result.vacc.code === selected.vacc.code ? "default" : "outline"}
                        onClick={() => setSelectedCode(result.vacc.code)}
                    >
                        {result.vacc.name}
                    </Button>
                ))}
            </div>
            <div className="mt-12">
                <h2 className="text-3xl font-bold">{selected.vacc.name}</h2>
                {!selected.ok
                    ?
                    <DataNotice variant="error">{selected.error}</DataNotice>
                    :
                    <>
                        <p className="text-sm text-muted-foreground">
                            Updated {formatDate(selected.data.generatedAt)}
                        </p>
                        <div className="mt-6">
                            <h3 className="text-xl font-bold">
                                Home Controllers ({endorsed(selected.data.home).length})
                            </h3>
                            {controllerTable(endorsed(selected.data.home), "No home controllers were found.")}
                        </div>
                        <div className="mt-6">
                            <h3 className="text-xl font-bold">
                                Visiting Controllers ({endorsed(selected.data.visiting).length})
                            </h3>
                            {controllerTable(endorsed(selected.data.visiting), "No visiting controllers were found.")}
                        </div>
                    </>
                }
            </div>
        </>
    );
}

export default RosterFilter;
