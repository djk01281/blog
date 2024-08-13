"use client";
import { useState } from "react";
import { NAV } from "@/app/lib/constants";
import { cn } from "@/app/lib/utils";
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
};
const MobileNavTrigger = ({ handleClick }: MobileNavTriggerProps) => {
  return (
    <button className="sm:hidden" onClick={handleClick}>
      X
    </button>
  );
};

export { MobileNav, MobileNavTrigger };
