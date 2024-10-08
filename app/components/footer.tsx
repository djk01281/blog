import { NAV } from "../lib/constants";
import { Logo } from "./logo";

export default function SiteFooter() {
  return (
    <div className="px-4">
      <div className="w-full flex flex-col bg-[#231f20] p-8 rounded-lg gap-8 items-center ">
        <div className="flex flex-row  justify-center gap-8 pr-4">
          <Logo />
          <div className="flex flex-row gap-4 items-center justify-center">
            {NAV.navItems.map((nav) => (
              <a
                key={nav}
                href={`/${nav.toLowerCase()}`}
                className="text-[#f6f1d7] text-sm underline"
              >
                {nav}
              </a>
            ))}
          </div>
        </div>
        <span className="w-full text-sm flex items-center justify-center text-[#f6f1d7] gap-1.5 font-normal">
          Made with{" "}
          <a
            target="_blank"
            href="https://youtu.be/ugpywe34_30?si=ClTw10Lw8lAAeLOC"
          >
            🎧
          </a>{" "}
          by{" "}
          <a
            target="_blank"
            href="https://github.com/djk01281"
            className="text-[#11b5e5]"
          >
            @djk01281
          </a>
        </span>
      </div>
    </div>
  );
}
