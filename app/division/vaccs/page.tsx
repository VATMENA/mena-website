import Header from "@/components/header/header"
import { VACC } from "@/types/vacc";
import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { BiLinkExternal } from "react-icons/bi";

async function getVaccs(): Promise<VACC[]> {
    const res = await fetch(`${process.env.URL}/api/division/vaccs`)
    if (!res.ok) {
        throw new Error("Could not fetch vACCs!")
    }
    return res.json();
}

async function VACCS() {

    const vaccs = await getVaccs();

    return (
        <>
            <Header>
                <h1 className="text-5xl">Area Control Centers</h1>
            </Header>
            <div className="container mx-auto">
                <div className="flex justify-center flex-wrap gap-8">
                    {vaccs.map((vacc: VACC, index: number) => (
                        <Card key={index}>
                            <CardHeader className="text-center">
                                {/* image here */}
                                <CardTitle>{vacc.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <Link href={`${vacc.websiteUrl}`} target="_blank" className={buttonVariants({ variant: "default" })} >
                                    Visit {vacc.name} <BiLinkExternal className="inline" />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}

export default VACCS