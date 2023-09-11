"use client";

import Link from "next/link"
import React, { SyntheticEvent, useState } from 'react'
import { BiLinkExternal } from "react-icons/bi"

function NavItems({ className }: { className?: string }) {    

    const [navHeaders, setNavHeaders] = useState({
        division: false,
        pilots: false,
        controllers: false
    })

    const resetNavHeaders = () => {
        setNavHeaders({
            division: false,
            pilots: false,
            controllers: false
        })
    }

    const closeOtherNavHeaders = (e: SyntheticEvent, currentHeader: "division" | "pilots" | "controllers") => {
        e.preventDefault();
        setNavHeaders({
            division: currentHeader === "division" && !navHeaders.division,
            pilots: currentHeader === "pilots" && !navHeaders.pilots,
            controllers: currentHeader === "controllers" && !navHeaders.controllers
        })
    }

    return (
        <ul id="navbar" className={className}>
            <li tabIndex={0} onClick={(e) => resetNavHeaders()}><Link href={"/"}>Home</Link></li>
            <li>
                <details open={navHeaders.division} onClick={(e) => closeOtherNavHeaders(e, "division")}>
                    <summary>Division</summary>
                    <ul className="p-2">
                        <li><Link href={"/"}>Join Us</Link></li>
                        <li><Link href={"/"}>Area Control Centres</Link></li>
                        <li><Link href={"/division/policies-downloads"}>Policies & Downloads</Link></li>
                        <li><Link href={"/division/staff"}>Staff</Link></li>
                        <li><Link href={"/"}>Academy <BiLinkExternal /></Link></li>
                        <li><Link href={"/"}>Discord <BiLinkExternal /></Link></li>
                    </ul>
                </details>
            </li>
            <li>
                <details open={navHeaders.pilots} onClick={(e) => closeOtherNavHeaders(e, "pilots")}>
                    <summary>Pilots</summary>
                    <ul className="p-2">
                        <li><Link href={"/"}>Getting Started</Link></li>
                        <li><Link href={"/"}>Resources</Link></li>
                        {/* <li><Link href={"/"}>Pilot Training</Link></li>
                        <li><Link href={"/"}>Virtual Airlines</Link></li>
                        <li><Link href={"/"}>VATSIM Statistics</Link></li>
                        <li><Link href={"/"}>Charts</Link></li> */}
                    </ul>
                </details>
            </li>
            <li>
                <details open={navHeaders.controllers} onClick={(e) => closeOtherNavHeaders(e, "controllers")}>
                    <summary>Controllers</summary>
                    <ul className="p-2">
                        <li><Link href={"/"}>Become a Controller</Link></li>
                        <li><Link href={"/controllers/visit-and-transfer"}>Visit & Transfer</Link></li>
                        <li><Link href={"/"}>Active Validations</Link></li>
                        <li><Link href={"/"}>Examiners & Instructors</Link></li>
                    </ul>
                </details>
            </li>
        </ul>
    )
}

export default NavItems