import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "AATC",
  description: "created by Mustapha Planner @2024",
  icons: {
    icon: "/realLogo.png",
  },
};

export default function ARootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <section className="w-full h-full md:bg-zinc-900"></section>
      </body>
    </html>
  );
}
