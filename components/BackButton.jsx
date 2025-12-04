"use client";
import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  // Hide button on home page
  if (pathname === "/") return null;

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/"); // Fallback to home
    }
  };

  return (
    <button
      onClick={handleBack}
      className="fixed top-6 left-6 z-50 bg-white shadow-lg rounded-full p-3 
                 hover:bg-gray-100 transition border border-gray-300"
      title="Go Back"
    >
      <ArrowLeft size={22} className="text-gray-700" />
    </button>
  );
}
