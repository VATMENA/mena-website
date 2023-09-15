import React from 'react'
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { NavDropDown } from "./dropdown";
import { FileDown, GraduationCap, Radar, Users2, School, BookCopy, Plane, UserCheck2 } from "lucide-react";
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
import { FaChalkboardTeacher } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { RiRadarFill } from "react-icons/ri";
import { cn } from "@/lib/utils";

function NavbarItems({ mobile }: { mobile?: boolean }) {    
    return (
        <div className={ cn(mobile && "flex flex-col mt-4" ) }>
            <Link href="/" className={cn(buttonVariants({ variant: "ghost" }), mobile && "justify-start")}>Home</Link>
            <NavDropDown title="Division" mobile={mobile}>
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
                    <DropdownMenuItem asChild>
                        <Link href={links.academy} target="_blank"><GraduationCap className="mr-2 h-4 w-4" />Academy</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href={links.discord} target="_blank"><BsDiscord className="mr-2 h-4 w-4" />Discord</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </NavDropDown>
            <NavDropDown title="Pilots" mobile={mobile}>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                            <Link href="/pilots/resources"><BookCopy className="mr-2 h-4 w-4" />Resources</Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>External Links</DropdownMenuLabel>
                    <DropdownMenuItem asChild>
                        <Link href="https://my.vatsim.net/pilots/train" target="_blank"><GraduationCap className="mr-2 h-4 w-4" />Pilot Training</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="https://my.vatsim.net/virtual-airlines" target="_blank"><Plane className="mr-2 h-4 w-4" />Virtual Airlines</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="https://my.vatsim.net" target="_blank"><School className="mr-2 h-4 w-4" />myVATSIM</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </NavDropDown>
            <NavDropDown title="Controllers" mobile={mobile}>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                            <Link href="/controllers/become-a-controller"><RiRadarFill className="mr-2 h-4 w-4" />Become a Controller</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href="/controllers/visit-and-transfer"><BiTransfer className="mr-2 h-4 w-4" />Visit & Transfer</Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>External Links</DropdownMenuLabel>
                    <DropdownMenuItem asChild>
                        <Link href="https://staff.vatsim.me/instructors" target="_blank"><FaChalkboardTeacher className="mr-2 h-4 w-4" />Training Staff</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="https://staff.vatsim.me/solos" target="_blank"><UserCheck2 className="mr-2 h-4 w-4" />Active Validations</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </NavDropDown>
        </div>
    )
}

export default NavbarItems