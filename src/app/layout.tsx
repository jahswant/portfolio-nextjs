import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import ReduxProvider from "./ReduxProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mon Portfolio",
  description: "Portfolio personnel avec Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <ReduxProvider>
          <Navbar />
          <main className="min-h-screen px-4 py-6">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
