import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import { Separator } from "../ui/separator"

function Footer() {
    return (
        <>
            <footer className="lg:hidden flex flex-col justify-center p-3">
                <p className="text-center">&copy; VATMENA 2023 | Content on this site only for flight simulation purposes only.</p>
            </footer>
            <footer className="container mx-auto p-10 hidden lg:block">
                <Separator className="my-6" />
                <div className="grid grid-cols-4">
                    <div className="col-span-1">
                        <Image src="/logo.png" height={38} width={141} alt="Logo" className="pb-3" />
                        <p className="pb-3">&copy; VATMENA 2023<br />Content on this site only for<br />flight simulation purposes only.</p>
                        <Link href="/" className="hover:underline">Privacy Policy</Link>
                    </div>
                    <nav className="col-span-1 flex flex-col">
                        <header className="pb-6 uppercase">Division</header>
                        <Link href="" className="hover:underline">Join Us</Link>
                        <Link href="" className="hover:underline">Area Control Centers</Link>
                        <Link href="" className="hover:underline">Policies & Downloads</Link>
                        <Link href="" className="hover:underline">Academy</Link>
                        <Link href="" className="hover:underline">Discord</Link>
                    </nav>
                    <nav className="col-span-1 flex flex-col">
                        <header className="pb-6 uppercase">Pilots</header>
                        <Link href="" className="hover:underline">Getting Started</Link>
                        <Link href="" className="hover:underline">Resources</Link>
                    </nav>
                    <nav className="col-span-1 flex flex-col">
                        <header className="pb-6 uppercase">Controllers</header>
                        <Link href="" className="hover:underline">Become Link Controller</Link>
                        <Link href="" className="hover:underline">Visit & Transfer</Link>
                        <Link href="" className="hover:underline">Active Validations</Link>
                        <Link href="" className="hover:underline">Examiners & Instructors</Link>
                    </nav>
                </div>
            </footer>
        </>

    )
}

export default Footer