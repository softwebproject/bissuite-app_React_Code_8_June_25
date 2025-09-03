import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const InterFont = Inter({
  subsets: ["latin"],
  weight: "400",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BisSuite",
  description: "Created By Pangeacons" 
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${InterFont.className} antialiased`}
      >
        <Navbar />
        {children}       
        <Footer />        
      </body>
    </html>
  );
}
