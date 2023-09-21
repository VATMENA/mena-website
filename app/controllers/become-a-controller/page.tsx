import Header from "@/components/header/header"
import { buttonVariants } from "@/components/ui/button"
import { links } from "@/lib/config"
import { cn } from "@/lib/utils"
import Link from "next/link"
import React from 'react'
import { BiLinkExternal } from "react-icons/bi"

function BecomeAController() {
    return (
        <>
            <Header imageUrl="/images/atc-scope.jpg">
                <h1 className="text-5xl">Become a Controller</h1>
            </Header>
            <div className="container mx-auto">
                <div className="mb-12">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold">New Controllers</h2>
                        <p>
                            Are you looking to explore a new side of the VATSIM network by becoming an air traffic controller?
                            VATMENA can help with that!
                        </p>
                        <br />
                        <p>
                            There are multiple ATC ratings within the network, each allowing you to control certain positions.
                            As a new controller, you will start as an Observer (OBS) and start training towards becoming a Delivery/Ground Controller (S1).
                            Before you start training as an air traffic controller, the first step is to make sure that you&apos;re a member of the
                            VATSIM Middle East & North Africa division. You can follow instructions to do so on our&nbsp;
                            <Link className="italic font-bold hover:underline text-primary" href="/controllers/visit-and-transfer">Visit & Transfer</Link> page.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Onboarding</h3>
                        <p>
                            If you are not already a member of a VATMENA vACC, view the&nbsp;
                            <Link className="italic font-bold hover:underline text-primary" href="/division/vaccs">list of our vACCs</Link>&nbsp;
                            and submit a request in our&nbsp;
                            <Link className="italic font-bold hover:underline text-primary" target="_blank" href={ links.discord }>
                                Discord Server <BiLinkExternal className="inline" />
                            </Link>&nbsp;
                            to join the vACC in which you want to start training.
                        </p>
                        <p>
                            You will then need to complete all of the examinations assigned to you in the&nbsp;
                            <Link className="italic font-bold hover:underline text-primary" target="_blank" href="https://academy.vatsim.me/">
                                academy <BiLinkExternal className="inline" />
                            </Link>.&nbsp;
                            Once those are complete, you can start practical training with your vACC assigned mentor.
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold">Software</h2>
                    <div className="mb-6">
                        <h3 className="text-xl font-bold">Communication</h3>
                        <p>
                            VATMENA and each of the vACCs operating within the division use Discord for communication. See the&nbsp;
                            <Link href="https://community.vatsim.net/" target="_blank" className="italic font-bold hover:underline text-primary">
                                VATSIM Community <BiLinkExternal className="inline" />
                            </Link>&nbsp;
                            page for a list of servers.
                        </p>
                        <Link
                            href="https://discord.com/"
                            target="_blank"
                            className={cn(buttonVariants({ variant: "default" }), "mt-1")}
                        >
                            Download Discord&nbsp;<BiLinkExternal className="inline" />
                        </Link>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-xl font-bold">Controller Client</h3>
                        <p>vACCs within VATMENA primarily use the Euroscope controller client.</p>
                        <Link
                            href="https://www.euroscope.hu/wp/"
                            target="_blank"
                            className={cn(buttonVariants({ variant: "default" }), "mt-1")}
                        >
                            Download Euroscope&nbsp;<BiLinkExternal className="inline" />
                        </Link>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-xl font-bold">Sector Files</h3>
                        <p>Sector files for the airspace covered by VATMENA can be found&nbsp;
                            <Link href="/division/policies-downloads#sector-files" className="italic font-bold hover:underline text-primary">here</Link>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BecomeAController