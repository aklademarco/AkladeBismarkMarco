import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Next.js viewport export for theme-aware browser UI colors
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aklade Bismark Marco",
    template: "%s | Aklade Bismark Marco",
  },
  description:
    "Aklade Bismark Marco — web designer and front-end developer crafting responsive, accessible websites. Open for opportunities.",
  keywords: [
    "Aklade Bismark Marco",
    "web designer",
    "front-end developer",
    "portfolio",
    "GCTU",
  ],
  authors: [{ name: "Aklade Bismark Marco" }],
  creator: "Aklade Bismark Marco",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Aklade Bismark Marco",
    description:
      "Web designer & front-end developer crafting responsive, accessible websites. Open for opportunities.",
    url: "https://example.com",
    siteName: "Aklade Bismark Marco",
    images: [
      {
        url: "/marco1.jpg",
        width: 1200,
        height: 630,
        alt: "Portrait of Aklade Bismark Marco",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aklade Bismark Marco",
    description:
      "Web designer & front-end developer crafting responsive, accessible websites.",
    images: ["/marco1.jpg"],
  },
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aklade Bismark Marco",
    url: "https://example.com",
    image: "https://example.com/marco1.jpg",
    sameAs: [
      "https://github.com/aklademarco",
      "https://www.linkedin.com/in/aklade-bismark-7426812a1",
    ],
    jobTitle: "Web Designer & Front-end Developer",
    description:
      "Aklade Bismark Marco is a web designer and front-end developer crafting responsive, accessible websites. Open for new opportunities.",
  };
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
