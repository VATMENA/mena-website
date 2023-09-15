"use client";

import React, { useEffect, useState } from 'react'
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

import NavbarItems from "./navbar-items";
import { usePathname } from 'next/navigation';

function MobileNavbar() {

    const path = usePathname();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        let isSubscribed = true;

        if (open && isSubscribed) {
            setOpen(false)
        }

        // cleanup
        return () => { isSubscribed = false };
    }, [path])

    return (
        <div>
            <Sheet open={open} onOpenChange={() => setOpen(!open)}>
                <SheetTrigger><Menu /></SheetTrigger>
                <SheetContent>
                    <NavbarItems mobile={true} />
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNavbar;