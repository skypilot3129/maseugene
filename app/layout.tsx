import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/components/LanguageProvider';
import WhatsAppButton from '@/components/WhatsAppButton';

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-heading",
  display: 'swap',
});

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-body",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Eugene - PWA Development Specialist",
  description: "Spesialis pembuatan aplikasi ringan yang dirancang khusus untuk membebaskan waktu pemilik UMKM dari kendala manual.",
  keywords: "PWA, Progressive Web App, Web Development, UMKM, Business Automation",
  authors: [{ name: "Eugene" }],
  openGraph: {
  },
  twitter: {
    card: 'summary_large_image',
    title: "Eugene's Atelier - Spesialis PWA untuk UMKM",
    description: "Sistem yang bekerja untuk Anda, bukan sebaliknya.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "Eugene's Atelier",
  },
};

export const viewport: Viewport = {
  themeColor: '#1A233A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <WhatsAppButton phoneNumber="6283817523403" />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
