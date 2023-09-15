import Header from "@/components/header/header"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import React from 'react'
import { BiLinkExternal } from "react-icons/bi"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


function VisitTransfer() {
    return (
        <>
            <Header imageUrl="/images/atc-scope-2.png">
                <h1 className="text-5xl">Visit & Transfer</h1>
            </Header>
            <div className="container mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl mb-3">Visiting</h2>
                    <p>Looking to stay in your current Division/vACC as a resident but interested in controlling in the Middle East and North Africa?</p>
                    <p>VATMENA host a range of vACCs offering visiting spaces for controllers interested in an adventure.</p>
                    <p>Every visitor is subject to both VATSIM&apos;s and VATMENA&apos;s Visiting Controller policy.</p>
                    <div className="flex flex-wrap gap-3 mt-6">
                        <Link href="https://vatsim.net/docs/policy/transfer-and-visiting-controller-policy#2-visiting-controller"
                            target="_blank"
                            className={buttonVariants({ variant: "default" })}
                        >
                            <div>VATMENA Membership Policy <BiLinkExternal className="inline" /></div>
                        </Link>
                        <Link href="https://cdn.vatsim.me/policies/VATMENA_POL_MP_R01-2022.pdf"
                            target="_blank"
                            className={buttonVariants({ variant: "default" })}
                        >
                            <div>VATMENA Membership Policy <BiLinkExternal className="inline" /></div>
                        </Link>
                    </div>
                    <p className="text-neutral-600 mt-1"><em>See section 9 of the VATMENA Membership Policy for details about visiting.</em></p>
                </div>
                <div>
                    <h2 className="text-3xl mb-3">Transferring</h2>
                    <p>Fancy a change and want to become a resident of VATMENA?</p>
                    <p>See a list of our <Link href="/division/vaccs" className="italic font-bold hover:underline text-primary">vACCs</Link> to find your new home.</p>
                    <div className="mt-6">
                        <p>Follow this list of steps to start your new journey.</p>

                        {/* start review docs */}
                        <div className="mt-3">
                            <h3 className="text-xl mb-3">1. Review Transfer Policies</h3>
                            <p>All members wishing to transfer to one of our vACCs are subject to the following policies.</p>
                            <ul>
                                <li>
                                    <Link className="italic font-bold hover:underline text-primary" target="_blank" href="https://vatsim.net/docs/policy/global-ratings-policy">
                                        VATSIM Global Ratings Policy <BiLinkExternal className="inline" />
                                    </Link>
                                </li>
                                <li>
                                    <Link className="italic font-bold hover:underline text-primary" target="_blank" href="https://vatsim.net/docs/policy/transfer-and-visiting-controller-policy#1-region-transfer">
                                        VATSIM Transfer & Visiting Policy <BiLinkExternal className="inline" />
                                    </Link>
                                </li>
                                <li>
                                    <Link className="italic font-bold hover:underline text-primary" target="_blank" href="https://cdn.vatsim.me/policies/VATMENA_POL_MP_R01-2022.pdf">
                                        VATMENA Membership Policy <BiLinkExternal className="inline" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* end review docs */}

                        {/* start transfer */}
                        <div className="mt-3">
                            <h3 className="text-xl mb-3">2. Initiate Division Transfer</h3>
                            <p>If you are a part of the Europe, Middle East, and Africa region, then join our&nbsp;
                                <Link href="https://discord.com/invite/Hvxm5Ky" target="_blank" className="italic font-bold hover:underline text-primary">Discord <BiLinkExternal className="inline" /></Link>&nbsp;
                                and submit a support ticket.
                            </p>
                            <p>If you are not a member of the Europe, Middle East, and Africa region, a transfer request should be submitted on&nbsp;
                                <Link href="https://my.vatsim.net/user/region" target="_blank" className="italic font-bold hover:underline text-primary">My VATSIM <BiLinkExternal className="inline" /></Link>
                            </p>
                        </div>
                        {/* end transfer */}

                        {/* review vacc assignment */}
                        <div className="mt-3">
                            <h3 className="text-xl mb-3">3. vACC Assignment</h3>
                            <p>
                                Once your transfer to VATMENA has been finalized, you will need to request assignment
                                to one of our vACCs via <Link href="https://discord.com/invite/Hvxm5Ky" target="_blank" className="italic font-bold hover:underline text-primary">Discord <BiLinkExternal className="inline" /></Link>.&nbsp;
                            </p>
                            <p>
                                Upon approval of the request, you will receive a welcome introduction in response to your
                                ticket that contains your chosen vACC&apos;s contact information.
                            </p>
                        </div>
                        {/* end vacc assignment */}

                        {/* start local training */}
                        <div className="mt-3">
                            <h3 className="text-xl mb-3">4. Local Training</h3>
                            <p>You can then contact your new vACC&apos;s Training Department to get started with your controller training.</p>
                            <p>Good luck, we hope to see you soon!</p>
                        </div>
                        {/* end local airspace */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default VisitTransfer