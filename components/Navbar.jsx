"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Render Navbar only on home page
  if (pathname !== "/") return null;

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="bg-transparent md:bg-transparent bg-black/90 md:bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LOGO LEFT */}
          <div className="flex items-center gap-6">
            <img 
              src="/logo.png" 
              alt="logo" 
              className="h-12 md:h-16 lg:h-20 drop-shadow-lg border-2 border-yellow-400/50 rounded-lg transition-all duration-300 hover:scale-105" 
            />
          </div>

          {/* CENTER MENU - Desktop */}
          <div className="hidden md:flex items-center gap-10 text-white text-sm tracking-wide font-semibold">
            <Link href="/achievements" className="relative hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-yellow-400 before:transition-all before:duration-300 hover:before:w-full">
              Achievements
            </Link>
            <Link href="/developers" className="relative hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-yellow-400 before:transition-all before:duration-300 hover:before:w-full">
              New Metro City
            </Link>
            <Link href="/about" className="relative hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-yellow-400 before:transition-all before:duration-300 hover:before:w-full">
              ABOUT US
            </Link>
          </div>

          {/* RIGHT SIDE - Phone Number */}
          <a
            href="https://wa.me/923144328762"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-white bg-yellow-500 px-3 py-2 rounded-lg shadow-md hover:bg-yellow-400 transition-all"
          >
            <Phone size={18} />
            <span className="font-semibold text-sm">+923144328762</span>
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div className="md:hidden bg-black/90 px-6 pb-6 pt-2 space-y-4 text-white transition-all duration-300">
            <Link href="/achievements" onClick={() => setOpen(false)} className="block hover:text-yellow-400 transition-colors duration-300">
              Achievements
            </Link>
            <Link href="/developers" onClick={() => setOpen(false)} className="block hover:text-yellow-400 transition-colors duration-300">
              New Metro City
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="block hover:text-yellow-400 transition-colors duration-300">
              ABOUT US
            </Link>

            <a
              href="https://wa.me/923144328762"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 pt-4 border-t border-gray-600 hover:text-yellow-400"
            >
              <Phone size={18} />
              <span className="font-semibold">+923144328762</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
