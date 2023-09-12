"use client";

import {
    ChevronDown,

} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { useState } from "react";
import { cn } from "@/lib/utils";

export function NavDropDown({ title, children }: { title: string, children: React.ReactNode }) {

    const [hasDropped, setHasDropped] = useState(false);

    return (
        <DropdownMenu onOpenChange={(isOpen) => setHasDropped(isOpen)}>
            <DropdownMenuTrigger asChild>
                <Button className="w-fit" variant="ghost">
                    <span className="pe-1">{ title }</span>
                    <ChevronDown size={16} className={cn("transition-all duration-150 ease-linear", hasDropped ? "rotate-180" : "rotate-0")} />
                </Button>
            </DropdownMenuTrigger>
            { children }
        </DropdownMenu>
    )
}
