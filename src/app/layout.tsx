import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sckool Suite",
  description: "The complete school operations platform for modern African schools.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
