import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisScrollProvider from "@/components/LenisScrollProvider";
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // Favicon and Icon Configuration
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  // Web App Manifest and Apple Title
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Sequent Media House",
    statusBarStyle: "default",
    capable: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning="true">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisScrollProvider>{children}</LenisScrollProvider>
        <Toaster />
      </body>
    </html>
  );
}
