import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { BiLinkExternal } from "react-icons/bi";
import { links } from "@/lib/config";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <>
      <footer className="flex flex-col justify-center p-3 lg:hidden">
        <p className="text-center">
          &copy; VATMENA 2023 | Content on this website is for flight simulation
          purposes only.
        </p>
      </footer>
      <footer className="container mx-auto hidden p-10 lg:block">
        <Separator className="my-6" />
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <Image
              src="/logo.png"
              height={38}
              width={141}
              alt="Logo"
              className="pb-3"
            />
            <p className="pb-3">
              &copy; VATMENA 2025
              <br />
              Content on this website is for
              <br />
              flight simulation purposes only.
            </p>
            <Link
              href="https://cdn.vatsim.me/policies/VATMENA_POL__DPP_R01-2024.pdf"
              target="_blank"
              className="hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
          <nav className="col-span-1 flex flex-col">
            <header className="pb-6 uppercase">Division</header>
            <Link href="/division/join" className="hover:underline">
              Join Us
            </Link>
            <Link href="/division/vaccs" className="hover:underline">
              Area Control Centers
            </Link>
            <Link
              href="/division/policies-downloads"
              className="hover:underline"
            >
              Policies & Downloads
            </Link>
            <Link href="/division/staff" className="hover:underline">
              Staff
            </Link>
            <Link
              href={links.academy}
              target="_blank"
              className="hover:underline"
            >
              Academy <BiLinkExternal className="inline" />
            </Link>
            <Link
              href={links.discord}
              target="_blank"
              className="hover:underline"
            >
              Discord <BiLinkExternal className="inline" />
            </Link>
          </nav>
          <nav className="col-span-1 flex flex-col">
            <header className="pb-6 uppercase">Pilots</header>
            <Link href="/pilots/resources" className="hover:underline">
              Resources
            </Link>
            <Link href="mailto:atc@vatsim.me" className="hover:underline">
              ATC feedback <MdOutlineEmail className="inline" />
            </Link>
            <Link
              href="https://my.vatsim.net/pilots/train"
              target="_blank"
              className="hover:underline"
            >
              Pilot Training <BiLinkExternal className="inline" />
            </Link>
            <Link
              href="https://my.vatsim.net/virtual-airlines"
              target="_blank"
              className="hover:underline"
            >
              Virtual Airlines <BiLinkExternal className="inline" />
            </Link>
            <Link
              href="https://my.vatsim.net"
              target="_blank"
              className="hover:underline"
            >
              myVATSIM <BiLinkExternal className="inline" />
            </Link>
          </nav>
          <nav className="col-span-1 flex flex-col">
            <header className="pb-6 uppercase">Controllers</header>
            <Link
              href="/controllers/become-a-controller"
              className="hover:underline"
            >
              Become a Controller
            </Link>
            <Link
              href="/controllers/visit-and-transfer"
              className="hover:underline"
            >
              Visit & Transfer
            </Link>
            <Link
              href="https://staff.vatsim.me/instructors"
              target="_blank"
              className="hover:underline"
            >
              Training Staff <BiLinkExternal className="inline" />
            </Link>
            <Link
              href="https://staff.vatsim.me/solos"
              target="_blank"
              className="hover:underline"
            >
              Active Validations <BiLinkExternal className="inline" />
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Footer;
