import type { Metadata } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Leadvision AI — The voice AI stack for India",
  description: "AI agents that call, transcribe, score and understand every customer conversation. Built for how India actually speaks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable} font-body bg-background text-ink scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-body antialiased selection:bg-red selection:text-white">
        <Navbar />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
