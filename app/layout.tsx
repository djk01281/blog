import type { Metadata } from "next";
import { Inter, Paytone_One, Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "./components/nav/site-header";
import SiteFooter from "./components/footer";
import { MaxWidthWrapper } from "./components/wrapper/max-width-wrapper";

const inter = Inter({ subsets: ["latin"] });
const pretendard = localFont({
  src: "../public/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendadrd",
});

const paytone = Paytone_One({ weight: ["400"], subsets: ["latin"] });

const bricolage = Bricolage_Grotesque({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`h-full ${pretendard.className} ${bricolage.variable} bg-[#0f0d0e]`}
      >
        <MaxWidthWrapper className="flex flex-col gap-12 pb-6">
          <SiteHeader />
          <main className="flex flex-col items-center">{children}</main>
          {/* <SiteFooter /> */}
          <SiteFooter />
        </MaxWidthWrapper>
      </body>
    </html>
  );
}

export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },
};
