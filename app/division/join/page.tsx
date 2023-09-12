import Header from "@/components/header/header"
import TypeAnimation from "@/components/type-animation/type-animation"
import { buttonVariants } from "@/components/ui/button"
import { links } from "@/lib/config"
import { cn } from "@/lib/utils"
import Link from "next/link"
import React from 'react'

function Join() {

    const readyTos: string[] = ["join VATMENA?", "participate in Cross the Land?"]

    return (
        <div>
            <Header fullscreen={true}>
                <div className="h-full flex justify-center items-center">
                    <div className="text-center">
                        <h1 className="text-5xl">
                            Ready to join?
                        </h1>
                        <p className="italic text-zinc-500 mt-3">See below for information.</p>
                    </div>
                </div>
            </Header>
            <div className="container mx-auto">
                <div className="mb-6">
                    <h2 className="text-3xl">
                        New to VATSIM?
                    </h2>
                    <p>When creating your VATSIM account, choose Europe, Middle East, and Africa (EMEA) as your region, and Middle East and North Africa (MENA) as your division when prompted.</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-3xl">
                        Already a VATSIM Member in the Europe, Middle East, and Africa Region?
                    </h2>
                    <p>Submit a support ticket on our <Link href={links.discord} className="font-bold italic hover:underline">Discord server</Link>&nbsp;
                        with your VATSIM information and the name of the vACC you'd like to join.</p>
                </div>
                <div>
                    <h2 className="text-3xl">
                        Need to Change Regions?
                    </h2>
                    <p>Login to your <Link href="https://my.vatsim.net/user/region" className="font-bold italic hover:underline">myVATSIM account</Link> and locate the <em>Member Help</em> section on the left menu.
                        Under the Member Help, select the <em>Change Region</em> option and complete the form.</p>
                </div>
            </div>
        </div>
    )
}

export default Join