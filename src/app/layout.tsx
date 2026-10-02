import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MouseGlow } from "@/components/MouseGlow";

export const metadata: Metadata = {
  title: "Leadvision AI | One bot stop for calls and insight",
  description: "AI agents powered by our own STT and TTS models handle your calls, with live QA, consumer insights and edge-case discovery at a price that works for every call.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable} font-body bg-background text-ink scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-body antialiased selection:bg-red selection:text-white">
        <MouseGlow />
        <Navbar />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
