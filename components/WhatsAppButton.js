"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to generate WhatsApp URL with pre-filled message
  const generateWhatsAppURL = (phone, message) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  };

  // High-quality WhatsApp SVG icon
  const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      className="w-7 h-7"
    >
      <path d="M16.001 3.2c-7.063 0-12.8 5.736-12.8 12.8 0 2.256.591 4.438 1.716 6.361L3.2 28.8l6.7-1.682A12.73 12.73 0 0 0 16 28.8c7.063 0 12.8-5.736 12.8-12.8S23.064 3.2 16.001 3.2Zm0 23.04c-2.043 0-4.036-.552-5.788-1.595l-.415-.246-3.975.997 1.048-3.873-.269-.398a10.54 10.54 0 0 1-1.692-5.845c0-5.82 4.73-10.56 10.56-10.56 5.82 0 10.56 4.74 10.56 10.56s-4.74 10.56-10.56 10.56Zm5.8-7.945c-.316-.158-1.864-.92-2.153-1.024-.29-.105-.501-.158-.712.158-.21.315-.814 1.024-.998 1.234-.184.21-.368.236-.684.079-.316-.158-1.334-.49-2.54-1.563-.94-.837-1.575-1.868-1.76-2.184-.184-.315-.02-.486.138-.643.142-.142.315-.368.473-.552.158-.184.21-.315.315-.526.105-.21.053-.395-.026-.552-.079-.158-.712-1.718-.975-2.354-.256-.614-.517-.53-.712-.54-.184-.008-.395-.01-.606-.01-.21 0-.552.079-.84.395-.289.315-1.105 1.08-1.105 2.633s1.132 3.054 1.289 3.265c.158.21 2.23 3.41 5.408 4.783.756.326 1.345.52 1.804.666.758.242 1.448.208 1.99.126.607-.091 1.864-.759 2.128-1.492.263-.733.263-1.362.184-1.492-.079-.131-.29-.21-.606-.368Z"/>
    </svg>
  );

  // Options for two people/contacts
  const options = [
    {
      label: "Chat with Sales",
      phone: "923144328762",
      message:
        "Hi, I'm interested in properties from UmerEstate. Can you help?",
    },
    {
      label: "Chat with Support",
      phone: "923144328762",
      message: "Hello, I need support regarding my UmerEstate inquiry.",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none"
        aria-label="Open WhatsApp options"
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          <WhatsAppIcon />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white border border-gray-300 rounded-xl shadow-2xl p-4 space-y-3 min-w-[250px] animate-slideUp">

          <h4 className="text-gray-800 font-semibold text-center mb-2">
            Choose who to chat with:
          </h4>

          {options.map((option, index) => (
            <a
              key={index}
              href={generateWhatsAppURL(option.phone, option.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 text-gray-800 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md"
              onClick={() => setIsOpen(false)}
            >
              <WhatsAppIcon />
              <span className="font-medium">{option.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
