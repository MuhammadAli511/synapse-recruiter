import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Synapse Recruiter",
  description: "AI-powered recruiting co-pilot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontClasses = `${geistSans.variable} ${geistMono.variable}`;

  return (
    <html lang="en">
      <body className={`${fontClasses} antialiased bg-white text-black dark:bg-gray-900 dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
