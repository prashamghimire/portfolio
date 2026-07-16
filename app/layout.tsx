import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import PersonSchema from "@/components/seo/PersonSchema";

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
    default: "Prasham Ghimire | Official Website",
    template: "%s | Prasham Ghimire",
  },

  description:
    "Official website of Prasham Ghimire featuring academic journey, leadership, writings, projects, notices and personal archive.",

  keywords: [
    "Prasham Ghimire",
    "Prasham Ghimire Nepal",
    "Official Website of Prasham Ghimire",
    "Portfolio",
    "Student",
    "Leadership",
    "Nepal",
    "BBM",
    "Writer",
    "Management",
  ],

  authors: [
    {
      name: "Prasham Ghimire",
    },
  ],

  creator: "Prasham Ghimire",

  metadataBase: new URL(
    "https://prashamghimire.com.np"
  ),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Prasham Ghimire | Official Website",
    description:
      "Official website of Prasham Ghimire featuring academic journey, writings, projects and personal archive.",
    url: "https://prashamghimire.com.np",
    siteName: "Prasham Ghimire",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Prasham Ghimire | Official Website",
    description:
      "Official website of Prasham Ghimire featuring academic journey, writings and projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PersonSchema />
        {children}
      </body>
    </html>
  );
}