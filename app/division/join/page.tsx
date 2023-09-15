import Header from "@/components/header/header"
import { links } from "@/lib/config"
import Link from "next/link"
import React from 'react'
import { BiLinkExternal } from "react-icons/bi"

function Join() {
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
                <div className="mb-12">
                    <h2 className="text-3xl mb-3">
                        New to VATSIM?
                    </h2>
                    <p>When creating your VATSIM account, choose Europe, Middle East, and Africa (EMEA) as your region, and Middle East and North Africa (MENA) as your division when prompted.</p>
                </div>
                <div className="mb-12">
                    <h2 className="text-3xl mb-3">
                        Already a VATSIM Member in the Europe, Middle East, and Africa Region?
                    </h2>
                    <p>Submit a support ticket on our <Link href={links.discord} target="_blank" className="font-bold italic hover:underline text-primary">Discord server <BiLinkExternal className="inline" /></Link>&nbsp;
                        with your VATSIM information and the name of the vACC you&apos;d like to join.</p>
                </div>
                <div>
                    <h2 className="text-3xl">
                        Need to Change Regions?
                    </h2>
                    <p>Login to your <Link href="https://my.vatsim.net/user/region" target="_blank" className="font-bold italic hover:underline text-primary">myVATSIM account <BiLinkExternal className="inline" /></Link> and locate the <em>Member Help</em> section on the left menu.
                        Under the Member Help, select the <em>Change Region</em> option and complete the form.</p>
                </div>
            </div>
        </div>
    )
}

export default Join