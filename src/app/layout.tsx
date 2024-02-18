import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import SessionProvider from "@/app/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Segment ECom Demo",
  description: "A Demo Ecommerce web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <SessionProvider>
          <Navbar />
          <main className="p-4 m-auto max-w-7xl min-w-[300px]">{children}</main>
          <Footer></Footer>
        </SessionProvider>
      </body>
    </html>
  );
}
