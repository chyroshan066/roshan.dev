import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/blocks/header/Navbar";
import { SideBar } from "@/components/blocks/header/SideBar";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Roshan - Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <SideBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
