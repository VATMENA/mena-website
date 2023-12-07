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

export function NavDropDown({ title, children, mobile }: { title: string, children: React.ReactNode, mobile?: boolean }) {

    const [hasDropped, setHasDropped] = useState(false);

    return (
        <DropdownMenu onOpenChange={(isOpen) => setHasDropped(isOpen)}>
            <DropdownMenuTrigger asChild>
                <Button className={cn(mobile ? "w-full justify-start" : "w-fit", "focus-visible:ring-transparent focus-visible:ring-offset-0") } variant="ghost">
                    <span className="pe-1">{ title }</span>
                    <ChevronDown size={16} className={cn("transition-all duration-150 ease-linear", hasDropped ? "rotate-180" : "rotate-0")} />
                </Button>
            </DropdownMenuTrigger>
            { children }
        </DropdownMenu>
    )
}
