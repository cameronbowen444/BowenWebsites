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
    "Bowen Websites designs and develops custom websites, landing pages, ecommerce stores, and digital systems for small businesses that want to look professional, build trust, and get more clients.",

  keywords: [
    "Bowen Websites",
    "Cameron Bowen",
    "custom websites",
    "small business websites",
    "web design",
    "web development",
    "website designer",
    "business website design",
    "landing page designer",
    "landing pages",
    "ecommerce websites",
    "custom ecommerce website",
    "website redesign",
    "Next.js websites",
    "React websites",
    "Los Angeles web designer",
    "Los Angeles web developer",
    "California web designer",
    "California web developer",
    "website care plans",
    "custom digital systems",
    "small business web design",
    "professional websites for small businesses",
  ],

  authors: [{ name: "Cameron Bowen", url: siteUrl }],
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
        url: "/assets/bowen-logo.png",
        type: "image/png",
      },
      {
        url: "/assets/bowen-logo.png",
        type: "image/png",
      },
    ],
    shortcut: "/assets/bowen-logo.png",
    apple: "/assets/bowen-logo.png",
  },

  openGraph: {
    title: "Bowen Websites | Custom Websites for Small Businesses",
    description:
      "Custom websites, landing pages, ecommerce stores, and digital systems built to help small businesses look professional, build trust, and get more clients.",
    url: siteUrl,
    siteName: "Bowen Websites",
    images: [
      {
        url: "/assets/bowen-logo.png",
        width: 1200,
        height: 630,
        alt: "Bowen Websites custom web design and development for small businesses",
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
    images: ["/assets/bowen-logo.png"],
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

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  appleWebApp: {
    capable: true,
    title: "Bowen Websites",
    statusBarStyle: "black-translucent",
  },

  other: {
    "theme-color": "#082033",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "Bowen Websites",
    "msapplication-TileColor": "#082033",
  },
};

export const viewport: Viewport = {
  themeColor: "#082033",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bowen Websites",
  url: siteUrl,
  logo: `${siteUrl}/assets/bowen-logo.png`,
  image: `${siteUrl}/assets/bowen-logo.png`,
  description:
    "Bowen Websites designs and develops custom websites, landing pages, ecommerce stores, and digital systems for small businesses.",
  founder: {
    "@type": "Person",
    name: "Cameron Bowen",
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Los Angeles, California",
    },
    {
      "@type": "Place",
      name: "California",
    },
    {
      "@type": "Place",
      name: "United States",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    addressCountry: "US",
  },
  email: "cameronbowen555@gmail.com",
  sameAs: [
    "https://github.com/",
    "https://instagram.com/",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      name: "Starter Website",
      price: "750",
      priceCurrency: "USD",
      description:
        "One-page custom website for small businesses that need to get online fast.",
    },
    {
      "@type": "Offer",
      name: "Business Website",
      price: "1500",
      priceCurrency: "USD",
      description:
        "Custom business website with responsive design, contact flow, and professional branding.",
    },
    {
      "@type": "Offer",
      name: "Pro Website or Custom System",
      price: "2500",
      priceCurrency: "USD",
      description:
        "Advanced website, ecommerce store, admin system, database, blog, listings, or custom workflow.",
    },
  ],
  serviceType: [
    "Custom Website Design",
    "Web Development",
    "Landing Page Design",
    "Ecommerce Website Development",
    "Website Redesign",
    "Website Care Plans",
    "Custom Digital Systems",
  ],
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}