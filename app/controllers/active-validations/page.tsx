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
import { getSolosForAllVaccs } from "@/lib/vatsim-api"
import { SoloEndorsement, SoloList, VaccResult } from "@/types/vatsim-api"

export const revalidate = 300;

async function ActiveValidations() {

    const directory = await getSolosForAllVaccs();

    return (
        <>
            <Header imageUrl="/images/atc-scope-2.png">
                <h1 className="text-5xl">Active Validations</h1>
            </Header>
            <div className="container mx-auto">
                <p className="mb-8">
                    Solo validations currently held by controllers across the division, listed by vACC.
                    A solo validation lets a controller staff a position they have not yet been fully
                    rated for, for a limited number of days.
                </p>
                {!directory.ok
                    ?
                    <DataNotice variant="error">{directory.error}</DataNotice>
                    :
                    directory.results.map((result: VaccResult<SoloList>, index: number) => (
                        <div key={result.vacc.code}>
                            {index > 0 ? <Separator className="my-12" /> : null}
                            <h2 className="text-3xl font-bold">{result.vacc.name}</h2>
                            {!result.ok
                                ?
                                <DataNotice variant="error">{result.error}</DataNotice>
                                :
                                result.data.solos.length < 1
                                    ?
                                    <DataNotice>No active validations were found.</DataNotice>
                                    :
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-1/6">CID</TableHead>
                                                <TableHead>Position</TableHead>
                                                <TableHead className="w-1/6">Expires</TableHead>
                                                <TableHead className="w-1/6">Days Remaining</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody className="text-start">
                                            {result.data.solos.map((solo: SoloEndorsement) => (
                                                <TableRow key={`${solo.cid}-${solo.position}-${solo.startDate}`}>
                                                    <TableCell className="font-medium">{solo.cid}</TableCell>
                                                    <TableCell>{solo.position}</TableCell>
                                                    <TableCell>{formatDate(solo.endDate)}</TableCell>
                                                    <TableCell>{solo.daysRemaining}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                            }
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ActiveValidations
