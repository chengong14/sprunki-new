import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sprunki-Newest - A Creative Music Gaming Experience",
  description: "Experience the next evolution of Incredibox with Sprunki-Newest, a fan-made mod that brings fresh features and unique elements to the classic music-mixing game.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white`}>{children}</body>
    </html>
  );
}
