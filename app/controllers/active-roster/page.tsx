import Header from "@/components/header/header"
import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import DataNotice from "@/components/vacc-data/data-notice"
import { formatDate } from "@/lib/utils"
import { getRosterForAllVaccs } from "@/lib/vatsim-api"
import { Roster, RosterController, VaccResult } from "@/types/vatsim-api"

export const revalidate = 300;

async function ActiveRoster() {

    const directory = await getRosterForAllVaccs();

    const controllerTable = (controllers: RosterController[], emptyText: string) => {
        if (controllers.length < 1) {
            return <DataNotice>{emptyText}</DataNotice>
        }
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-1/6">CID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead className="w-1/6">Rating</TableHead>
                        <TableHead className="w-2/6">Positions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="text-start">
                    {controllers.map((controller: RosterController) => (
                        <TableRow key={controller.cid}>
                            <TableCell className="font-medium">{controller.cid}</TableCell>
                            <TableCell>{controller.name}</TableCell>
                            <TableCell>{controller.rating ?? "—"}</TableCell>
                            <TableCell>
                                {controller.positions.length > 0 ? controller.positions.join(", ") : "—"}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        )
    }

    return (
        <>
            <Header imageUrl="/images/atc-scope.jpg">
                <h1 className="text-5xl">Active Roster</h1>
            </Header>
            <div className="container mx-auto">
                <p className="mb-8">
                    Controllers currently endorsed to staff positions within the division, listed by vACC.
                    Home controllers hold the vACC as their primary posting, while visiting controllers are
                    based elsewhere and have been approved to control here.
                </p>
                {!directory.ok
                    ?
                    <DataNotice variant="error">{directory.error}</DataNotice>
                    :
                    directory.results.map((result: VaccResult<Roster>, index: number) => (
                        <div key={result.vacc.code}>
                            {index > 0 ? <Separator className="my-12" /> : null}
                            <h2 className="text-3xl font-bold">{result.vacc.name}</h2>
                            {!result.ok
                                ?
                                <DataNotice variant="error">{result.error}</DataNotice>
                                :
                                <>
                                    <p className="text-sm text-muted-foreground">
                                        Updated {formatDate(result.data.generatedAt)}
                                    </p>
                                    <div className="mt-6">
                                        <h3 className="text-xl font-bold">
                                            Home Controllers ({result.data.counts.home})
                                        </h3>
                                        {controllerTable(result.data.home, "No home controllers were found.")}
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="text-xl font-bold">
                                            Visiting Controllers ({result.data.counts.visiting})
                                        </h3>
                                        {controllerTable(result.data.visiting, "No visiting controllers were found.")}
                                    </div>
                                </>
                            }
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ActiveRoster
