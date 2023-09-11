import React from 'react'
import Image from 'next/image'
import Link from "next/link"

function Footer() {
    return (
        <footer className="footer container mx-auto p-10 bg-base-200 text-base-content">
            <aside>
                <Image src="/logo.png" height={38} width={141} alt="Logo" />
                <p>VATMENA<br />Content on this site only for<br />flight simulation purposes only.</p>
                <Link href="/" className="hover:underline">Privacy Policy</Link>
            </aside>
            <nav>
                <header className="footer-title">Division</header>
                <Link href="" className="link link-hover">Join Us</Link>
                <Link href="" className="link link-hover">Area Control Centers</Link>
                <Link href="" className="link link-hover">Policies & Downloads</Link>
                <Link href="" className="link link-hover">Academy</Link>
                <Link href="" className="link link-hover">Discord</Link>
            </nav>
            <nav>
                <header className="footer-title">Pilots</header>
                <Link href="" className="link link-hover">Getting Started</Link>
                <Link href="" className="link link-hover">Resources</Link>
            </nav>
            <nav>
                <header className="footer-title">Controllers</header>
                <Link href="" className="link link-hover">Become Link Controller</Link>
                <Link href="" className="link link-hover">Visit & Transfer</Link>
                <Link href="" className="link link-hover">Active Validations</Link>
                <Link href="" className="link link-hover">Examiners & Instructors</Link>
            </nav>
        </footer>
    )
}

export default Footer