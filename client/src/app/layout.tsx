import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import { SideBar } from "@/components/SideBar";

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
