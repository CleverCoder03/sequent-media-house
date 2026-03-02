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
  title: "Sequent Media House",
  description: "We are a team of storytellers, strategists, filmmakers, planners, dreamers each fluent in both logic and imagination.",
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
