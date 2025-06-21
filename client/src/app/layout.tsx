import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/blocks/header/NavBar";
import dynamic from "next/dynamic";
import localFont from "next/font/local";

const aeonik = localFont({
  src: [
    {
      path: "./fonts/Aeonik-Light.ttf",
      weight: "300",
      style: "normal"
    },
    {
      path: "./fonts/Aeonik-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/Aeonik-Medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "./fonts/Aeonik-Black.ttf",
      weight: "700",
      style: "normal"
    },
  ],
  display: 'swap',
  variable: '--font-aeonik'
});

const Footer = dynamic(() => import('@/components/blocks/Footer'), {
  loading: () => <div>Loading...</div>,
});

const SideBar = dynamic(() => import('@/components/blocks/header/SideBar'), {
  ssr: true,
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Roshan - Personal Portfolio Website",
  keywords: "portfolio, developer, web developer, full-stack developer, frontend-developer, react, next.js, node.js, express.js, postgres, prisma, typescript, javascript",
  authors: [{ name: "Roshan" }],
  creator: "Roshan",
  robots: "index, follow", // Search engine will ndex this page and follow its links
  //Open Graph controls how your webpage looks when shared on social media platforms
  openGraph: {
    title: "Portfolio",
    description: "Roshan - Personal Portfolio Website",
    type: "website",
    locale: "en_US",
    url: "https://yoursite.com",
    siteName: "Roshan's Portfolio",
    images: [
      {
        url: "/portfolio-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Roshan's Portfolio Preview",
      }
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body
        className={`${aeonik.variable} font-sans`}
        suppressHydrationWarning={true}
      >
        <NavBar />
        <SideBar />
        <main>
          {children}
        </main>
        <Footer />
      </body>

    </html>
  );
}
