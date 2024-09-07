"use client";
import { MaxWidthWrapper } from "../wrapper/max-width-wrapper";
import { MainNav } from "./main-nav";
import { MobileNav, MobileNavTrigger } from "./mobile-nav";
import { useState, useEffect } from "react";
import { Logo } from "../logo";

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <div
      className={` ${showNav ? "" : "hidden"} w-full flex flex-col z-40  ${
        open ? "h-svh" : ""
      }`}
    >
      {}
      <header className=" w-full flex flex-row justify-between items-center p-5">
        <Logo />
        <MobileNavTrigger
          type={open ? "close" : "open"}
          handleClick={() => setOpen(!open)}
        />
        <MainNav />
      </header>
      {open && <MobileNav />}
    </div>
  );
};

export { SiteHeader };
