import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader, SiteFooter } from "@/components/site";
import "./globals.css";

const sourceSans = localFont({
  src: [
    { path: "../../public/fonts/SourceSans3-400-latin.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/SourceSans3-400-latin-ext.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/SourceSans3-400-italic-latin.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/SourceSans3-400-italic-latin-ext.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/SourceSans3-500-latin.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/SourceSans3-500-latin-ext.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/SourceSans3-600-latin.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/SourceSans3-600-latin-ext.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/SourceSans3-700-latin.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/SourceSans3-700-latin-ext.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Voltimo — Výcvik elektrikářů",
  description: "Středisko profesního vzdělávání v elektrotechnice. Výcvik, zkouška §6 a státní osvědčení Elektrikář za 10 dní.",
  icons: {
    icon: "/voltimo-staging/logo/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${sourceSans.variable} antialiased`}>
      <body>
        <a
          href="#hlavni-obsah"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-voltimo-yellow focus:text-voltimo-primary focus:px-4 focus:py-2 focus:rounded-voltimo-md focus:font-semibold"
        >
          Přeskočit na obsah
        </a>
        <SiteHeader />
        <main id="hlavni-obsah">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
