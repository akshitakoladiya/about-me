import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import ScrollProgress from "@/components/common/ScrollProgress";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.vercel.app"),
  title: {
    default: "Akshita Koladiya | Senior Full Stack Developer",
    template: "%s | Akshita Koladiya",
  },
  description: "Senior Full Stack Developer based in Germany specializing in React, Next.js, Node.js, GraphQL, TypeScript and scalable enterprise applications.",
  keywords: [
    "Akshita Koladiya",
    "React Developer",
    "Next.js",
    "Node.js",
    "GraphQL",
    "Material UI",
    "TypeScript",
    "Full Stack Developer",
    "Germany",
    "Stuttgart",
  ],

  authors: [
    {
      name: "Akshita Koladiya",
    },
  ],

  creator: "Akshita Koladiya",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Akshita Koladiya",
    description: "Senior Full Stack Developer | React | Next.js | Node.js | GraphQL | React Native | TypeScript | Material UI | Germany",
    // url: "https://your-domain.vercel.app",
    siteName: "Akshita Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akshita Koladiya Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Akshita Koladiya",
    description: "Senior Full Stack Developer based in Germany.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Providers>
          <ScrollProgress />

          <Header />

          <main>
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}