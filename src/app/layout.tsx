import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Sprunki-Phase - A Creative Music Gaming Experience',
    default: 'Sprunki-Phase - A Creative Music Gaming Experience',
  },
  description: "The Sprunki Phase is a fan-made mod series created by enthusiasts for the popular rhythm game Incredibox on Scratch. These mods introduce a unique twist by incorporating dark and horror-themed elements while staying true to the game's original style. Each phase features new characters, delivering a fresh and distinct experience. This website contains all versions of sprunki phase.",
  openGraph: {
    title: "Sprunki-Phase",
    description: "The Sprunki Phase is a fan-made mod series created by enthusiasts for the popular rhythm game Incredibox on Scratch. These mods introduce a unique twist by incorporating dark and horror-themed elements while staying true to the game's original style. Each phase features new characters, delivering a fresh and distinct experience. This website contains all versions of sprunki phase.",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
