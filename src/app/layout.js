import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./animations.css";
import Navbar, { HamBurgerMenu } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ConfigProvider } from "@/contexts/ConfigContext";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mushan Khan",
  description: "Hi Im Mushan Khan a Software Engineer",
};
// Background floating orbs
const orbs = [
  {
    size: "w-80 h-80",
    position: "-top-40 -left-40",
    delay: "0s",
    duration: "15s",
  },
  {
    size: "w-96 h-96",
    position: "-bottom-60 -right-60",
    delay: "2s",
    duration: "18s",
  },
  {
    size: "w-64 h-64",
    position: "top-1/3 -right-32",
    delay: "5s",
    duration: "12s",
  },
];
export default function RootLayout({ children }) {
  return (
    <html className="flex justify-center items-center" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-full lg:pt-24 container relative`}
      >
        {orbs.map((orb, index) => (
          <div
            key={index}
            className={`absolute rounded-full opacity-10 animate-pulse-slow ${orb.position} ${orb.size}`}
            style={{
              background:
                "linear-gradient(135deg, var(--gradient-end), var(--gradient-start))",
              filter: "blur(80px)",
              animation: `float ${orb.duration} infinite alternate-reverse`,
              animationDelay: orb.delay,
            }}
          />
        ))}
        <ConfigProvider>
          {/* Navbar */}
          <Navbar />
          <HamBurgerMenu/>
          {/* <CustomCursor /> */}
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
