import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcomTool - Premium E-Commerce Store",
  description: "Discover the latest technology, fashion, and lifestyle products with exceptional quality and service. Free shipping on orders over $100.",
  keywords: "ecommerce, shopping, technology, fashion, electronics, lifestyle",
  authors: [{ name: "EcomTool Team" }],
  openGraph: {
    title: "EcomTool - Premium E-Commerce Store",
    description: "Discover the latest technology, fashion, and lifestyle products with exceptional quality and service.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Cart />
      </body>
    </html>
  );
}
