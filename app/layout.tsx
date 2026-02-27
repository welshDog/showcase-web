import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hyperfocus Zone | Built by @welshDog",
  description: "A playground of agents, tools, games, and experiments built by neurodivergent devs for neurodivergent devs.",
  openGraph: {
    title: "Hyperfocus Zone | Built by @welshDog",
    description: "A playground of agents, tools, games, and experiments built by neurodivergent devs for neurodivergent devs.",
    url: "https://showcase-web-omega.vercel.app",
    siteName: "Hyperfocus Zone",
    images: [
      {
        url: "/images/og-image.png", // We'll need to ensure this image exists
        width: 1200,
        height: 630,
        alt: "Hyperfocus Zone Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyperfocus Zone | Built by @welshDog",
    description: "A playground of agents, tools, games, and experiments built by neurodivergent devs for neurodivergent devs.",
    creator: "@DeFiIsTheFuture", // Using your X handle from the footer
    images: ["/images/og-image.png"],
  },
  metadataBase: new URL("https://showcase-web-omega.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
