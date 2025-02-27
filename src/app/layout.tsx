// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PersistentNavBar from "@/components/layout/PersistentNavBar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vatsal Tibrewal",
  description: "Portfolio of Vatsal Tibrewal, a Blockchain and Full Stack Developer specialized in Solidity, Move, and web development",
  icons: {
    icon: { url: '/logo.jpg', sizes: '32x32' }, // Reference to your new favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          <main className="flex-grow pt-6 pb-12">
            {children}
          </main>
          <PersistentNavBar />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}