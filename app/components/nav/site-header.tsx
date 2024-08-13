"use client";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { MainNav } from "./main-nav";
import { MobileNav, MobileNavTrigger } from "./mobile-nav";
import { useState, useEffect } from "react";
import { Logo } from "./logo";

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <div className={`w-full flex flex-col   ${open ? "h-screen" : ""}`}>
      <header className="sticky top-0 w-full bg-yellow-50 flex flex-row justify-between px-5">
        <Logo />
        <MobileNavTrigger handleClick={() => setOpen(!open)} />
        <MainNav />
      </header>
      {open && <MobileNav />}
    </div>
  );
};

export { SiteHeader };
