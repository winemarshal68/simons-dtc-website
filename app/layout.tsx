import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Direct to Consumer Wine Sales Consulting | Simons DTC Consulting LLC | Napa CA",
  description:
    "Simons DTC Consulting - Innovative strategies and services to achieve DTC sales growth and customer engagement for wineries and beyond.",
  icons: {
    icon: "/images/favicon.jpg",
    apple: "/images/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
