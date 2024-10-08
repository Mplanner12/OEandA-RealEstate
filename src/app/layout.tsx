import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SocialLinks from "./Components/SocialLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OEandA - AATC",
  description: "created by Mustapha Planner @2024",
  icons: {
    icon: "/realLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header /> */}
        {children}
        <section className="w-full h-full md:bg-zinc-900">
          {/* <Footer /> */}
          {/* <SocialLinks /> */}
        </section>
      </body>
    </html>
  );
}
