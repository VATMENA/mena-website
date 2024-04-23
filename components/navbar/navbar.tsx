"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import MobileNavbar from "./mobile-navbar";
import NavbarItems from "./navbar-items";
import Link from "next/link";

function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const pos = window.scrollY;
    if (pos > 1) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  return (
    <div
      className={cn(
        "transition ease-in-out duration-300 fixed w-full py-6",
        hasScrolled ? "bg-background shadow-2xl" : "bg-transparent",
      )}
    >
      <div className="flex container justify-between items-center gap-x-2">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-20"
          />
        </Link>
        <div className="md:hidden">
          <MobileNavbar />
        </div>
        <div className="hidden md:block">
          <NavbarItems />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
