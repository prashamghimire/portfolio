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

export const metadata = {
  title: {
    default: "Prasham Ghimire",
    template: "%s | Prasham Ghimire",
  },

  description:
    "Official portfolio of Prasham Ghimire showcasing academic achievements, leadership, writings, projects and personal journey.",

  keywords: [
    "Prasham Ghimire",
    "Portfolio",
    "Student",
    "Leadership",
    "Nepal",
    "BBM",
    "Writer",
    "Management",
  ],

  authors: [{ name: "Prasham Ghimire" }],

  creator: "Prasham Ghimire",

  metadataBase: new URL("https://YOUR-WEBSITE.vercel.app"),
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
