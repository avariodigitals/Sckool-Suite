import type { Metadata } from "next";

const BASE_URL = "https://sckoolsuite.com";

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:  "Sckool Suite — Run Your Entire School From One Platform",
    template: "%s | Sckool Suite",
  },
  description:
    "Manage admissions, attendance, results, report cards, fees, communication, " +
    "teachers, parents, and students through one fully integrated school management " +
    "system built for Nigerian and African schools.",
  keywords: [
    "school management system Nigeria",
    "school ERP Africa",
    "student information system",
    "school fee management software",
    "result computation software",
    "school administration platform",
    "Sckool Suite",
  ],
  authors:   [{ name: "Avario Digital", url: "https://avariodigitals.com" }],
  creator:   "Avario Digital",
  publisher: "Sckool Suite",
  robots: {
    index:     true,
    follow:    true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type:        "website",
    locale:      "en_NG",
    url:         BASE_URL,
    siteName:    "Sckool Suite",
    title:       "Sckool Suite — Run Your Entire School From One Platform",
    description: "The complete school operations platform for modern African schools.",
    images: [{
      url:    "/og-image.png",
      width:  1200,
      height: 630,
      alt:    "Sckool Suite Dashboard Preview",
    }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Sckool Suite — Run Your Entire School From One Platform",
    description: "The complete school operations platform for modern African schools.",
    images:      ["/og-image.png"],
  },
  alternates: { canonical: BASE_URL },
};
