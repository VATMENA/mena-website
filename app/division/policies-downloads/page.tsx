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
import { Document, SectorFile } from "@/types/resources"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { BiLinkExternal } from "react-icons/bi"
import { months } from "@/lib/config"

async function getPolicies(): Promise<Document[]> {
    const res = await fetch(`${process.env.URL}/api/division/resources/policies`)
    if (!res.ok) {
        throw new Error("Could not fetch policies!")
    }
    return res.json();
}

async function getMeetings(): Promise<Document[]> {
    const res = await fetch(`${process.env.URL}/api/division/resources/meeting-minutes`)
    if (!res.ok) {
        throw new Error("Could not fetch meeting minutes!")
    }
    return res.json();
}

async function getSectorFiles(): Promise<SectorFile[]> {
    const res = await fetch(`${process.env.URL}/api/division/resources/sector-files`)
    if (!res.ok) {
        throw new Error("Could not fetch sector files!")
    }
    return res.json();
}

async function PoliciesAndDownloads() {

    const policies = await getPolicies();
    const meetings = await getMeetings();
    const sectorFiles = await getSectorFiles();

    const formatCoveredFirs = (firCodes: string[]) => {
        let result = "";
        for (let i = 0; i < firCodes.length; i++) {
            const fillRemaining = new Array(4 - firCodes[i].length).fill("*").join("")
            if (i === firCodes.length - 1) {
                result = result + `${firCodes[i] + fillRemaining}` 
            } else {
                result = result + `${firCodes[i] + fillRemaining}, `
            }
        }
        return result;
    }

    return (
        <>
            <Header>
                <h1 className="text-5xl">Policies & Downloads</h1>
            </Header>
            <div className="container mx-auto">
                <div>
                    <h2 className="text-3xl mb-3">Policies</h2>
                    {policies.length < 1 ?
                        <em>No policies were found.</em>
                        :
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-1/6">ID</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead className="w-1/6">Last Updated</TableHead>
                                    <TableHead className="text-start w-1/6">Link</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="text-start">
                                {policies.map((policy: Document, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{policy.id}</TableCell>
                                        <TableCell>{policy.title}</TableCell>
                                        <TableCell>
                                            {new Date(policy.lastUpdated).getDate()}&nbsp;
                                            {months[new Date(policy.lastUpdated).getMonth()]}&nbsp;
                                            {new Date(policy.lastUpdated).getFullYear()}
                                        </TableCell>
                                        <TableCell className="text-start">
                                            <Link
                                                href={policy.locationUri}
                                                target="_blank"
                                                className={cn(buttonVariants({ variant: "default" }), "w-full")}
                                            >
                                                Open<BiLinkExternal className="ms-1" />
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    }
                </div>
                <Separator className="my-12" />
                <div>
                    <h2 className="text-3xl mb-3">Meeting Minutes</h2>
                    {meetings.length < 1
                        ?
                        <em>No meeting minutes were found.</em>
                        :
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-1/6">ID</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead className="w-1/6">Last Updated</TableHead>
                                    <TableHead className="text-start w-1/6">Link</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="text-start">
                                {meetings.map((meeting: Document, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{meeting.id}</TableCell>
                                        <TableCell>{meeting.title}</TableCell>
                                        <TableCell>
                                            {new Date(meeting.lastUpdated).getDate()}&nbsp;
                                            {months[new Date(meeting.lastUpdated).getMonth()]}&nbsp;
                                            {new Date(meeting.lastUpdated).getFullYear()}
                                        </TableCell>
                                        <TableCell className="text-start">
                                            <Link
                                                href={meeting.locationUri}
                                                target="_blank"
                                                className={cn(buttonVariants({ variant: "default" }), "w-full")}
                                            >
                                                Open<BiLinkExternal className="ms-1" />
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    }
                </div>
                <Separator className="my-12" />
                <div id="sector-files">
                    <h2 className="text-3xl mb-3">Sector Files</h2>
                    {sectorFiles.length < 1
                        ?
                        <em>No sector files were found.</em>
                        :
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-3/6">Name</TableHead>
                                    <TableHead className="2/6">Covered FIRs</TableHead>
                                    <TableHead className="text-start w-1/6">Link</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="text-start">
                                {sectorFiles.map((sectorFile: SectorFile, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{sectorFile.name}</TableCell>
                                        <TableCell>{formatCoveredFirs(sectorFile.airspacePrefix)}</TableCell>
                                        <TableCell className="text-start">
                                            <Link
                                                href={sectorFile.locationUri}
                                                target="_blank"
                                                className={cn(buttonVariants({ variant: "default" }), "w-full")}
                                            >
                                                Open<BiLinkExternal className="ms-1" />
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    }
                </div>
            </div>
        </>
    )
}

export default PoliciesAndDownloads