import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Netal's Portfolio",
  description: "Hi Im Netal Sarda",
};

export default function RootLayout({ children }) {
  return (
    <html className="flex justify-center items-center" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased lg:pt-24 container relative`}
      >
        {/* Navbar */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
