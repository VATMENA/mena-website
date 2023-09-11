"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import NavItems from "./nav-items";
import Link from "next/link";

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
        <nav>
            <div className={`${hasScrolled ? "bg-base-200" : "bg-transparent"} w-screen transition ease-in-out duration-300 mb-[68px] fixed`}>
                <div className="navbar container mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <NavItems className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-fit" />
                        </div>
                        <a className="normal-case text-xl">
                            <Image src="/logo.png" height={38} width={141} alt="Logo" />
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <NavItems className="menu menu-horizontal px-1" />
                    </div>
                    <div className="navbar-end">
                        {/* <Link href="/" target="_blank" className="btn btn-primary text-neutral-100 normal-case">Help Desk</Link> */}
                        <Link href="/" target="_blank" className="btn btn-primary text-neutral-100 normal-case">Join Us</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar