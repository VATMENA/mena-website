import Link from "next/link"
import React from 'react'
import { BiLinkExternal } from "react-icons/bi"


function VisitTransfer() {
    return (
        <div className="min-h-screen">
            <div className="bg-[url('/images/atc-scope-2.png')] bg-cover bg-no-repeat h-80 mb-6">
                <div className="bg-[rgba(0,0,0,0.70)] h-full">
                    <div className="flex flex-col justify-center ps-3 lg:ps-[15%] mb-7 h-full">
                        <h1 className="text-5xl">Visit & Transfer</h1>
                    </div>
                </div>
            </div>
            <div className="container mx-auto text-center">
                <div className="mb-12">
                    <h2 className="text-3xl">Visiting</h2>
                    <p>Looking to stay in your current Division/vACC as a resident but interested in controlling in the Middle East and North Africa?</p>
                    <p>VATMENA host a range of vACCs offering visiting spaces for controllers interested in an adventure.</p>
                    <p>Every visitor is subject to both VATSIM's and VATMENA's Visiting Controller policy.</p>
                    <div className="flex flex-wrap justify-center gap-3 mt-6">
                        <Link href="https://vatsim.net/docs/policy/transfer-and-visiting-controller-policy#2-visiting-controller"
                            target="_blank"
                            className="btn btn-neutral">
                            VATSIM Visiting Controller Policy <BiLinkExternal />
                        </Link>
                        <Link href="https://cdn.vatsim.me/policies/VATMENA_POL_MP_R01-2022.pdf"
                            target="_blank"
                            className="btn btn-neutral">
                            VATMENA Membership Policy
                        </Link>
                    </div>
                    <p className="text-neutral-600 mt-1"><em>See section 9 of the VATMENA Membership Policy for details about visiting.</em></p>
                </div>
                <div>
                    <h2 className="text-3xl">Transferring</h2>
                    <p>Fancy a change and want to become a resident of VATMENA?</p>
                    <p>See a list of our <Link href="/division/vaccs" className="underline">vACCs</Link> to find your new home.</p>
                    <div className="mt-6">
                        <p>Follow this list of steps to start your new journey.</p>
                        <div className="flex flex-wrap gap-3 justify-center mt-3 mx-3 lg:mx-0">
                            <div className="card static w-96 bg-base-100 shadow-xl text-start">
                                <div className="card-body">
                                    <h2 className="card-title">1. Review Transfer Policies</h2>
                                    <p>All members wishing to transfer to one of our vACCs are subject to the following policies.</p>
                                    <ul>
                                        <li>
                                            <Link className="hover:underline" target="_blank" href="https://vatsim.net/docs/policy/global-ratings-policy">
                                                VATSIM Global Ratings Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="hover:underline" target="_blank" href="https://vatsim.net/docs/policy/transfer-and-visiting-controller-policy#1-region-transfer">
                                                VATSIM Transfer & Visiting Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="hover:underline" target="_blank" href="https://cdn.vatsim.me/policies/VATMENA_POL_MP_R01-2022.pdf">
                                                VATMENA Membership Policy
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card static w-96 bg-base-100 shadow-xl text-start">
                                <div className="card-body">
                                    <h2 className="card-title">2. Initiate Division Transfer</h2>
                                    <p>If you are a part of the Europe, Middle East, and Africa region, then join our&nbsp;
                                        <Link href="https://discord.com/invite/Hvxm5Ky" target="_blank" className="underline">Discord</Link>&nbsp;
                                        and submit a support ticket.
                                    </p>
                                    <p>If you are not a member of the Europe, Middle East, and Africa region, a transfer request should be submitted on&nbsp;
                                        <Link href="https://my.vatsim.net/user/region" target="_blank" className="underline">My VATSIM</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="card static w-96 bg-base-100 shadow-xl text-start">
                                <div className="card-body">
                                    <h2 className="card-title">3. vACC Assignment</h2>
                                    <p>
                                        Once your transfer to VATMENA has been finalized, you will need to request assignment&nbsp;
                                         to one of our vACCs via <Link href="https://discord.com/invite/Hvxm5Ky" target="_blank" className="underline">Discord</Link>.&nbsp;
                                    </p>
                                    <p>
                                        Upon approval of the request, you will receive a welcome introduction in response to your&nbsp;
                                        ticket that contains your chosen vACC's contact information.
                                    </p>
                                </div>
                            </div>
                            <div className="card static w-96 bg-base-100 shadow-xl text-start">
                                <div className="card-body">
                                    <h2 className="card-title">4. Local Training</h2>
                                    <p>You can then contact your new vACC&apos;s Training Department to get started with your controller training.</p>
                                    <p>Good luck, we hope to see you soon!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisitTransfer