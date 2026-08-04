"use client";

import React, { useState } from 'react'
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

    // Close the sheet whenever the route changes. Resetting state during render
    // is React's recommended alternative to a setState-in-effect cascade.
    const [renderedPath, setRenderedPath] = useState(path);
    if (path !== renderedPath) {
        setRenderedPath(path);
        setOpen(false);
    }

    return (
        <div>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger><Menu /></SheetTrigger>
                <SheetContent>
                    <NavbarItems mobile={true} />
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNavbar;