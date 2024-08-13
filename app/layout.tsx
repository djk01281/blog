import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "./components/nav/site-header";

const inter = Inter({ subsets: ["latin"] });
const pretendard = localFont({
  src: "../public/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendadrd",
});

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
      <body className={`min-h-screen ${pretendard.className}`}>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        {/* <SiteFooter /> */}
      </body>
    </html>
  );
}
