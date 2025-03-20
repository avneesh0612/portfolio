import { Footer, Header } from "@/components";
import { ThemeProvider } from "@/components/theme-provider";
import { personalData } from "@/data";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  metadataBase: new URL(personalData.site),
  title: `${personalData.name} | ${personalData.designation}`,
  description: personalData.shorterDesc,
  authors: [{ name: personalData.name }],
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
    description: personalData.shorterDesc,
    url: personalData.site,
    siteName: personalData.name,
    images: [
      {
        url: "/about.png",
        width: 800,
        height: 420,
        alt: personalData.name,
      },
    ],
    type: "website",
    locale: "en-US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalData.name} | ${personalData.designation}`,
    description: personalData.shorterDesc,
    creator: `@${personalData.x}`,
    images: ["/about.png"],
  },
  icons: {
    icon: "/favicon.ico",
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
