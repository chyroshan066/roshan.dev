import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import { NavigationProgressBarWithEvents } from "@/components/blocks/header/NavigationProgressBar";
import { NavHeader } from "@/components/blocks/header/NavHeader";

const aeonik = localFont({
  src: [
    {
      path: "../../public/fonts/Aeonik-Light.ttf",
      weight: "300",
      style: "normal"
    },
    {
      path: "../../public/fonts/Aeonik-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/Aeonik-Medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../public/fonts/Aeonik-Black.ttf",
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
  title: "Roshan Chaudhary | FullStack Developer",
  description: "Roshan - Personal Portfolio Website",
  keywords: [
    "Roshan Chaudhary",
    "Chaudhary Roshan",
    "Roshan",
    "developer",
    "web developer",
    "full-stack developer",
    "frontend-developer",
    "backend-developer"
  ],
  authors: [{ name: "Roshan" }],
  creator: "Roshan",
  robots: "index, follow", // Search engine will ndex this page and follow its links
  icons: {
    icon: [
      {
        url: '/favicon_io/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon_io/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon_io/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/favicon_io/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        url: '/favicon_io/favicon.ico',
        sizes: '32x32'
      },
    ],
    shortcut: '/favicon_io/favicon.ico',
    apple: '/favicon_io/apple-touch-icon.png',
  },
  manifest: '/favicon_io/site.webmanifest',  // "site.webmanifest" that tells browsers how the website should behave when it's installed as a Progressive Web App (PWA) on a user's device.
  //Open Graph controls how your webpage looks when shared on social media platforms
  openGraph: {
    title: "Roshan Chaudhary | FullStack Developer",
    description: "Roshan - Personal Portfolio Website",
    type: "website",
    locale: "en_US",
    url: "https://roshan-dev-gilt.vercel.app/",
    siteName: "Roshan's Portfolio",
    images: [
      {
        url: "/images/previews/portfolio-preview.jpg",
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
        <NavigationProgressBarWithEvents showSpinner={false} />
        <NavHeader />
        <SideBar />
        <main>
          {children}
        </main>
        <Footer />
      </body>

    </html>
  );
}
