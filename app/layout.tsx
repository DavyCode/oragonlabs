import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const rethink = Rethink_Sans({
  variable: "--font-rethink",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const TITLE = "Oragonlabs | An AI research lab for the real world";
const DESCRIPTION =
  "Oragonlabs is an AI research lab developing mission-critical solutions that are sovereign and affordable for businesses, governments and everyday people in emerging markets.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${rethink.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
