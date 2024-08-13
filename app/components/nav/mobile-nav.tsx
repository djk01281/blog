"use client";
import { useState } from "react";
import { NAV } from "@/app/lib/constants";
import { cn } from "@/app/lib/utils";
import { Menu } from "./menu";
import { X } from "./x";
const MobileNav = (props: { className?: string }) => {
  //   const [open, setOpen] = useState(false);
  return (
    <nav className={cn("h-full bg-slate-100 w-full z-10", props.className)}>
      {NAV.navItems.map((item) => {
        return (
          <div key={item}>
            <a href={`/${item.toLowerCase()}`}>{item}</a>
          </div>
        );
      })}
    </nav>
  );
};

type MobileNavTriggerProps = {
  handleClick: () => void;
  type: "open" | "close";
};
const MobileNavTrigger = ({ handleClick, type }: MobileNavTriggerProps) => {
  return type === "open" ? (
    <Menu onClick={handleClick} className="sm:hidden"></Menu>
  ) : (
    <X onClick={handleClick} className="sm:hidden"></X>
  );
};

export { MobileNav, MobileNavTrigger };
