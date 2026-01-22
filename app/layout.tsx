import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nailovy | Luxury Nail & Hair Salon",
  description: "Hyderabad's Premier Nail & Hair Destination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <body className="antialiased bg-background text-foreground min-h-screen relative">
        <div className="grain-overlay" />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}