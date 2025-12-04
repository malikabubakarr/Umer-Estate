import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackButton from "@/components/BackButton";
import Announcement from "@/components/Announcement"; // ← ADD THIS
import {Metadata} from "next"; 
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "UmerEstate - Real Estate in Pakistan",
  description: "Best real estate listings, projects & investment opportunities",
  icons: [
    {
      rel: "icon",
      url: "/logo.png"
    }
  ]
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">

        {/* Announcement Bar */}
        <Announcement />

        {/* Sticky Back Button */}
        <BackButton />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <Footer />

        {/* WhatsApp Floating Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
