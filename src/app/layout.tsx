import { Footer, Header } from "@/components";
import { ThemeProvider } from "@/components/theme-provider";
import { personalData } from "@/data";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(personalData.site),
  title: {
    template: `%s | ${personalData.name}`,
    default: `${personalData.name} | ${personalData.designation}`,
  },
  description: personalData.metaDescription,
  authors: [{ name: personalData.name, url: personalData.site }],
  keywords: personalData.keywords,
  referrer: "no-referrer-when-downgrade",
  alternates: {
    canonical: personalData.site,
    languages: {
      "en-US": personalData.site,
    },
  },
  openGraph: {
    title: `${personalData.name} | ${personalData.designation}`,
    description: personalData.metaDescription,
    url: personalData.site,
    siteName: personalData.name,
    images: [
      {
        url: "/about.png",
        width: 1200,
        height: 630,
        alt: `${personalData.name} - ${personalData.designation}`,
      },
    ],
    type: "website",
    locale: "en-US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalData.name} | ${personalData.designation}`,
    description: personalData.metaDescription,
    creator: `@${personalData.x}`,
    images: ["/about.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      nocache: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-geomanist">
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
