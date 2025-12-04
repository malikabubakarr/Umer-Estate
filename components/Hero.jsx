"use client";

import { useState, useEffect } from "react";

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg", // add as many images as you like
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
            index === current ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105 blur-sm"
          }`}
        />
      ))}

      {/* Modern Gradient Overlay for Better Background Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

      {/* Stylish Overlay Text with Enhanced Animations */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-2xl leading-tight animate-fadeIn transform transition-transform duration-500 hover:scale-105">
          Umer Estate & Builders 
          <span className="block text-yellow-400 mt-2 md:mt-4 animate-pulse">
            Find Your Dream Property
          </span>
        </h1>
        <p className="mt-4 text-white/90 text-sm md:text-base lg:text-lg max-w-xl animate-fadeIn delay-200 drop-shadow-lg">
          Explore the best communities and properties to find your perfect home.
        </p>
      </div>
    </div>
  );
}
