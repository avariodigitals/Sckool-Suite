import type { Metadata } from "next";
import "./globals.css";
import { DEFAULT_METADATA } from "@/lib/seo";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = DEFAULT_METADATA;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon"            href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color"    content="#4F46E5" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
