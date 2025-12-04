"use client";

import { Instagram, Facebook, Twitter, Linkedin, Phone, Mail, Star, MapPin } from "lucide-react";
import { SiTiktok } from "react-icons/si";   // TikTok icon
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-16 pb-10 relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Company Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
            Umer Estate & Builders
          </h2>

          <p className="text-gray-300 leading-relaxed text-base">
            Find your dream property with UmerEstate. Explore curated communities, top developers, and modern homes that fit your lifestyle.
          </p>

          {/* Social Icons (Updated with Your Links) */}
          <div className="flex items-center gap-4 mt-4">

            <Link
              href="https://www.tiktok.com/@umar.estate.builde?_r=1&_t=ZS-91tO13fcL"
              className="text-white hover:text-pink-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              target="_blank"
            >
              <SiTiktok size={28} />
            </Link>

            <Link
              href="https://www.instagram.com/umerestateandbuilders?igsh=a2V3ZTd6aGdtNzF0"
              className="text-white hover:text-pink-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              target="_blank"
            >
              <Instagram size={28} />
            </Link>

            <Link
              href="https://www.facebook.com/share/1BVkGNrGFf/?mibextid=wwXIfr"
              className="text-white hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              target="_blank"
            >
              <Facebook size={28} />
            </Link>

          </div>

          {/* Google Rating */}
          <div className="flex items-center mt-6 gap-3 p-3 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50">
            <img 
              src="/google-logo.png" 
              alt="Google" 
              className="w-8 h-8 drop-shadow-lg"
            />
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-current animate-pulse" />
              ))}
            </div>
            <span className="text-gray-300 ml-2 text-sm font-medium">4.9/5 Google Reviews</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-yellow-400">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li><Link href="/achievements" className="hover:text-yellow-400 transition-all duration-300 transform hover:translate-x-2 hover:scale-105">Achievements</Link></li>
            <li><Link href="/developers" className="hover:text-yellow-400 transition-all duration-300 transform hover:translate-x-2 hover:scale-105">New Metro City</Link></li>
            <li><Link href="/about" className="hover:text-yellow-400 transition-all duration-300 transform hover:translate-x-2 hover:scale-105">About Us</Link></li>
            
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-yellow-400">Contact Us</h3>

          <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
            <Phone size={24} className="text-yellow-400" />
            <span className="font-medium">+923144328762</span>
          </div>

          <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
            <Mail size={24} className="text-yellow-400" />
            <span className="font-medium">info@umerestate.com</span>
          </div>

          <div className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-300">
            <MapPin size={24} className="text-yellow-400 mt-1" />
            <span className="font-medium">79-Civic Center, Sabzazar, Lahore</span>
          </div>
                    <div className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-300">
            <MapPin size={24} className="text-yellow-400 mt-1" />
            <span className="font-medium">Dealers Enclave, 14/15 New Metro City, Lahore</span>
          </div>

          <p className="text-gray-500 mt-8 text-sm border-t border-gray-700 pt-4">
            © {new Date().getFullYear()} UmerEstate. All rights reserved.
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="relative mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm bg-gradient-to-r from-transparent via-gray-800 to-transparent py-4">
        <span className="inline-block animate-pulse">Designed with ❤️ by UmerEstate Team</span>
      </div>

    </footer>
  );
}