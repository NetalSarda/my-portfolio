import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./animations.css";
import Navbar, { HamBurgerMenu } from "@/components/Navbar";
import { ConfigProvider } from "@/contexts/ConfigContext";
import {
  personStructuredData,
  websiteStructuredData,
  organizationStructuredData,
} from "./structured-data";
import { Analytics } from "@vercel/analytics/next";

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
    default: "Netal Sarda - Full Stack Developer & Data Analyst",
    template: "%s | Netal Sarda",
  },
  description:
    "Hi, I'm Netal Sarda — a Full Stack Developer and Data Analyst with experience in building scalable applications, driving tech ops, and enabling smart decision-making through data.",
  keywords: [
    "Netal Sarda",
    "Full Stack Developer",
    "Data Analyst",
    "React Developer",
    "JavaScript",
    "Operations",
    "Sales Enablement",
    "Web Developer Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Tech Generalist",
  ],
  authors: [{ name: "Netal Sarda" }],
  creator: "Netal Sarda",
  publisher: "Netal Sarda",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yourdomain.com"), // Replace with your real domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com", // Replace with your real domain
    title: "Netal Sarda - Full Stack Developer & Data Analyst",
    description:
      "Explore the work of Netal Sarda — a full stack developer and data analyst passionate about scalable software, insightful data, and driving digital operations.",
    siteName: "Netal Sarda Portfolio",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Netal Sarda - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Netal Sarda - Full Stack Developer & Data Analyst",
    description:
      "Hi, I'm Netal Sarda. I build scalable web apps, analyze data, and drive operations through efficient tech stacks.",
    images: ["/images/logo.png"],
    creator: "@yourtwitterhandle", // Optional: Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Optional: replace with real
  },
};

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
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              personStructuredData,
              websiteStructuredData,
              organizationStructuredData,
            ]),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-full lg:pt-24 container relative`}
      >
        {/* Floating orbs */}
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
          <Navbar />
          <Analytics />
          <HamBurgerMenu />
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
