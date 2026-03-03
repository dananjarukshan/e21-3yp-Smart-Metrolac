import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Smart Metrolac | IoT Rubber Quality Monitoring",
    template: "%s | Smart Metrolac"
  },
  description:
    "Smart Metrolac is a full-stack IoT-based rubber quality monitoring platform for DRC, temperature, pH, and TDS analytics with fraud prevention.",
  keywords: [
    "Smart Metrolac",
    "IoT",
    "Rubber Quality Monitoring",
    "DRC",
    "ESP32",
    "Sri Lanka",
    "Node.js",
    "Next.js",
    "Firebase"
  ],
  openGraph: {
    title: "Smart Metrolac",
    description:
      "A scalable, cost-efficient, full-stack IoT architecture for transparent latex quality assessment.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
