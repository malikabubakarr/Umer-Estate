"use client";
import Link from "next/link";

export default function PropertyCard({ data }) {
  const whatsappNumber = "+923144328762"; // Your WhatsApp number
  const message = `Hello, I'm interested in your property: ${data.title}`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="shadow rounded-lg overflow-hidden hover:scale-[1.02] transition bg-white">
      {/* Property Image */}
      <div className="w-full h-56 bg-gray-100 flex items-center justify-center">
        <img
          src={data.image}
          className="w-full h-full object-contain"
          alt={data.title}
        />
      </div>

      {/* Property Info */}
      <div className="p-4">
        <h3 className="font-bold text-xl text-gray-800">{data.title}</h3>

        {data.price && (
          <p className="text-blue-600 text-lg font-semibold mt-2">
            {data.price}
          </p>
        )}

        {/* WhatsApp Contact Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block w-full text-center bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Contact to get details
        </a>
      </div>
    </div>
  );
}
