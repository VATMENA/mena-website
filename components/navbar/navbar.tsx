"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { NavDropDown } from "./dropdown";
import { FileDown, GraduationCap, Radar, Users2 } from "lucide-react";
import { BsDiscord } from "react-icons/bs";
import { PiIdentificationBadge } from "react-icons/pi";
import { links } from "@/lib/config";

import {
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"


function Navbar() {

    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true })

        // cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const handleScroll = () => {
        const pos = window.scrollY;
        if (pos > 1) {
            setHasScrolled(true);
        } else {
            setHasScrolled(false);
        }
    }

    return (
        <div className={cn("transition ease-in-out duration-300 fixed w-full py-6", hasScrolled ? "bg-background" : "bg-transparent")}>
            <div className="container mx-auto">
                <div className="float-left">
                    <Image src="/logo.png" height={38} width={141} alt="Logo" />
                </div>
                <div className="float-right">
                    <Link href="/" className={buttonVariants({ variant: "ghost" })}>Home</Link>
                    <NavDropDown title="Division">
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuGroup>
                                <DropdownMenuItem asChild>
                                    <Link href="/division/join"><Users2 className="mr-2 h-4 w-4" />Join Us</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/division/vaccs"><Radar className="mr-2 h-4 w-4" />Area Control Centers</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/division/policies-downloads"><FileDown className="mr-2 h-4 w-4" />Policies & Downloads</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/division/staff"><PiIdentificationBadge className="mr-2 h-4 w-4" />Staff</Link>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel>External Links</DropdownMenuLabel>
                            <DropdownMenuItem>
                                <GraduationCap className="mr-2 h-4 w-4" />
                                <Link href={links.academy} target="_blank">Academy</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <BsDiscord className="mr-2 h-4 w-4" />
                                <Link href={links.discord} target="_blank">Discord</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </NavDropDown>
                    <NavDropDown title="Pilots">

                    </NavDropDown>
                    <NavDropDown title="Controllers">

                    </NavDropDown>
                </div>
            </div>
        </div>
    )
}

export default Navbar