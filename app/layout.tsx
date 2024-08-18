import type { Metadata } from "next";
import { Inter, Paytone_One } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "./components/nav/site-header";
import { MaxWidthWrapper } from "./components/nav/max-width-wrapper";

const inter = Inter({ subsets: ["latin"] });
const pretendard = localFont({
  src: "../public/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendadrd",
});

const paytoneOne = Paytone_One({ weight: ["400"], subsets: ["latin"] });
export const metadata: Metadata = {
  title: "djk01281's blog",
  description: "A web dev's blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`h-full ${pretendard.className} bg-[#0f0d0e]`}>
        <MaxWidthWrapper>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          {/* <SiteFooter /> */}
        </MaxWidthWrapper>
      </body>
    </html>
  );
}
