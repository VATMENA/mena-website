"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from "@/lib/utils";
import { NavMenu } from "./navbar-menu";

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
        <div className={cn("transition ease-in-out duration-300 fixed w-full py-6", hasScrolled ? "bg-foreground" : "bg-transparent")}>
            <div className="container mx-auto">
                <div className="float-left">
                    <Image src="/logo.png" height={38} width={141} alt="Logo" />
                </div>
                <div className="float-right">
                    <NavMenu />
                </div>
            </div>
        </div>
    )
}

export default Navbar