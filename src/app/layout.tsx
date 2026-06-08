import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const siteUrl = "https://bowenwebsites.com";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Bowen Websites | Custom Websites for Small Businesses",
    template: "%s | Bowen Websites",
  },

  description:
    "Bowen Websites designs and develops custom websites, landing pages, ecommerce stores, and digital systems for small businesses that want to look professional and get more clients.",

  keywords: [
    "Bowen Websites",
    "Cameron Bowen",
    "custom websites",
    "small business websites",
    "web design",
    "web development",
    "landing pages",
    "ecommerce websites",
    "business website design",
    "Next.js websites",
    "React websites",
    "Los Angeles web designer",
    "California web designer",
    "website care plans",
    "custom digital systems",
  ],

  authors: [{ name: "Cameron Bowen" }],
  creator: "Cameron Bowen",
  publisher: "Bowen Websites",

  applicationName: "Bowen Websites",
  category: "Web Design and Development",
  classification: "Business",

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: [
      {
        url: "/assets/favicon.png",
        type: "image/png",
      },
      {
        url: "/assets/bowen-logo.png",
        type: "image/png",
      },
    ],
    shortcut: "/assets/favicon.png",
    apple: "/assets/apple-touch-icon.png",
  },

  openGraph: {
    title: "Bowen Websites | Custom Websites for Small Businesses",
    description:
      "Custom websites, landing pages, ecommerce stores, and digital systems built to help small businesses look professional, build trust, and get more clients.",
    url: siteUrl,
    siteName: "Bowen Websites",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bowen Websites custom web design and development",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bowen Websites | Custom Websites for Small Businesses",
    description:
      "Modern websites, landing pages, ecommerce stores, and custom systems for small businesses.",
    images: ["/assets/og-image.png"],
    creator: "@cameronbowen555",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#082033",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} bg-soft font-body text-brand antialiased`}
      >
        {children}
      </body>
    </html>
  );
}