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
  title: "Centre du Savoir - Informatique, Langues et Traduction (CSLT)",
  description: "Centre de formation spécialisé en informatique, langues et traduction, offrant des formations professionnelles de qualité en Afrique.",
  keywords: ["formation informatique", "cours de langues", "traduction", "formation professionnelle", "Afrique", "numérique"],
  authors: [{ name: "Centre du Savoir" }],
  creator: "Centre du Savoir CSLT",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  manifest: "/manifest.json",
  themeColor: "#10b981",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://centresavoir.com/",
    title: "Centre du Savoir - CSLT",
    description: "Centre de formation spécialisé en informatique, langues et traduction",
    siteName: "Centre du Savoir",
    images: [{
      url: "https://centresavoir.com/og-image.jpg", // À créer et à ajouter dans public/
      width: 1200,
      height: 630,
      alt: "Centre du Savoir - CSLT"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Centre du Savoir - CSLT",
    description: "Centre de formation spécialisé en informatique, langues et traduction",
    images: ["https://centresavoir.com/og-image.jpg"], // Même image que pour OpenGraph
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
