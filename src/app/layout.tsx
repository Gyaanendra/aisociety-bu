import { Manrope } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Navbar from "@/custom_components/CommonComponents/Navbar";
import Footer from "@/custom_components/CommonComponents/Footer";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from "framer-motion";

const fontHeading = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased p-4 md:p-6",
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <Navbar />
        <AnimatePresence mode="wait">{children}</AnimatePresence>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
