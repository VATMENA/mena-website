import Header from "@/components/header/header"
import React from 'react'
import Link from "next/link";
import { links, months } from "@/lib/config";
import { Document } from "@/types/resources";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BiLinkExternal } from "react-icons/bi";
import { briefings } from "@/constants/pilots/briefings/route";

async function getBriefings(): Promise<Document[]> {
    // const res = await fetch(`${process.env.URL}/api/pilots/briefings`)
    // if (!res.ok) {
    //     throw new Error("Could not fetch pilot briefings!")
    // }
    // return res.json();
    return briefings;
}


async function PilotResources() {

    const briefings = await getBriefings();

    return (
        <>
            <Header imageUrl="/images/sudan_q400.png">
                <h1 className="text-5xl">Pilot Resources</h1>
            </Header>
            <div className="container mx-auto">
                <div className="w-full mb-12">
                    <h2 className="text-3xl font-bold">New to VATSIM?</h2>
                    <p>Firstly, welcome to the network!</p><br />
                    <p>VATSIM have created a range of helpful documentation that you can use to get started. The best place to start your journey is the&nbsp;
                        <Link className="italic font-bold hover:underline text-primary" href="https://vatsim.net" target="_blank">VATSIM website <BiLinkExternal className="inline" /></Link>.
                        Within the VATSIM documentation is a&nbsp;
                        <Link className="italic font-bold hover:underline text-primary" href="https://vatsim.net/docs/basics/getting-started" target="_blank">Getting Started <BiLinkExternal className="inline" /></Link>&nbsp;
                        page that details the first steps you need to take to get on the network.
                        If you need any more assistance, or want to speak to experienced VATSIM members, be sure to join our&nbsp;
                        <Link className="italic font-bold hover:underline text-primary" href={links.discord} target="_blank">Discord server <BiLinkExternal className="inline" /></Link>
                        .</p><br />
                    <p>We look forward to seeing you in the skies!</p><br />
                    <p className="italic text-foreground/50">Psst! If you&apos;d like to join our division, see <Link className="font-bold hover:underline text-primary" href="/division/join">Join Us</Link>.</p>

                </div>
                <div>
                    <h2 className="text-3xl font-bold">Airport Briefings</h2>
                    {briefings.length < 1 ?
                        <div className="mt-3"><em>No briefings were found.</em></div>
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
                                {briefings.map((briefing: Document, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{briefing.id}</TableCell>
                                        <TableCell>{briefing.title}</TableCell>
                                        <TableCell>
                                            {new Date(briefing.lastUpdated).getDate()}&nbsp;
                                            {months[new Date(briefing.lastUpdated).getMonth()]}&nbsp;
                                            {new Date(briefing.lastUpdated).getFullYear()}
                                        </TableCell>
                                        <TableCell className="text-start">
                                            <Link
                                                href={briefing.locationUri}
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

export default PilotResources