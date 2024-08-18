"use client";
import { useState } from "react";
import { NAV } from "@/app/lib/constants";
import { cn } from "@/app/lib/utils";
import { Menu } from "./menu";
import { X } from "./x";
const MobileNav = (props: { className?: string }) => {
  //   const [open, setOpen] = useState(false);
  return (
    <nav
      className={cn(
        "h-full  w-full z-10 p-4 flex flex-col gap-3",
        props.className
      )}
    >
      <div className="bg-[#231f20] p-4 rounded-lg text-[#f4f0d6] text-xl font-semibold flex flex-col gap-3 h-2/3">
        {NAV.navItems.map((item) => {
          return (
            <div key={item} className="hover:text-[#f38ba3]">
              <a href={`/${item.toLowerCase()}`}>{item}</a>
            </div>
          );
        })}
      </div>
      <div className="flex-grow  text-[#231f20] font-medium w-full p-4 bg-[#f4f0d6] rounded-lg flex flex-col justify-between">
        {/* <div className="flex flex-col">
          <div className="flex flex-row gap-2">
            <a>Github</a>
            <span>|</span>
            <span>@djk01281</span>
          </div>
          <div className="flex flex-row gap-2">
            <a>Email</a>
            <span>|</span>
            <span>djk01281@gmail.com</span>
          </div>
        </div> */}
        <div className="flex flex-col gap-2">
          <div className="text-lg font-semibold">Contacts</div>
          <div className="w-1/2 grid grid-cols-2">
            <a>Github</a>
            <span>@djk01281</span>
            <a>Email</a>
            <span>djk01281@gmail.com</span>
          </div>
        </div>
        © 2024 Dongjun Kim 😊 All Rights Reserved.
      </div>
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
