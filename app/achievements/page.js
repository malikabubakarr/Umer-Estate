"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Custom Prev Arrow
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-black/60 to-black/40 hover:from-black/70 hover:to-black/50 p-3 rounded-full cursor-pointer transition-all duration-300 shadow-lg backdrop-blur-sm"
      onClick={onClick}
    >
      <ChevronLeft size={32} className="text-white drop-shadow-md" />
    </div>
  );
}

// Custom Next Arrow
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-l from-black/60 to-black/40 hover:from-black/70 hover:to-black/50 p-3 rounded-full cursor-pointer transition-all duration-300 shadow-lg backdrop-blur-sm"
      onClick={onClick}
    >
      <ChevronRight size={32} className="text-white drop-shadow-md" />
    </div>
  );
}

export default function Achievements() {
  const achievements = [
    {
      title: "Super Sales Partner at New Metro City",
      images: ["/super_sales1.jpg", "/super_sales2.jpg"],
      description:
        "Umer Estate & Builders is proud to be recognized as a Super Sales Partner at New Metro City, showcasing our strong sales performance, trusted client services, and consistent contribution to the project’s growth. Our expertise, transparency, and dedication ensure that clients secure the best investment opportunities with complete confidence.",
    },
    {
      title: "Strategic Partner with New Metro City",
      images: ["/group-photo1.jpg", "/group-photo2.jpg", "/group-photo3.jpg"],
      description:
        "We proudly partnered with New Metro City to deliver exceptional real estate solutions.",
    },
    {
      title: "First Commercial Deal Holder",
      images: ["/commercial1.jpg", "/commercial2.jpg"],
      description:
        "Umer Estate was the first to close a landmark commercial deal in the region.",
    },
    {
      title: "Sales Partner",
      images: ["/sales1.jpg", "/sales2.jpg"],
      description:
        "Our sales partners ensure smooth transactions and client satisfaction.",
    },
    {
      title: "First Residential Deal Holder",
      images: ["/residential1.jpg"],
      description:
        "We pioneered the first residential deal, setting high standards for property investment.",
    },
    {
      title: "Dealer's Enclave",
      images: ["/dealerenclave.jpg","/dealerenclave2.jpg","/dealerenclave3.jpg"],
      description:
        "Dealers Enclave is a dedicated hub for authorized real estate professionals, offering a premium environment for seamless meetings, client guidance, and property consultations within New Metro City.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-tight drop-shadow-sm animate-pulse">
          Our Achievements
        </h1>

        <div className="space-y-20">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out"
            >
              <div className="p-8 sm:p-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center text-gray-800 leading-tight relative">
                  <span className="relative inline-block">
                    {item.title}
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                  </span>
                </h2>

                <div className="w-full h-64 sm:h-80 lg:h-96 mb-8 rounded-xl overflow-hidden shadow-2xl relative bg-gray-900">
                  <Slider {...sliderSettings}>
                    {item.images.map((img, i) => (
                      <div
                        key={i}
                        className="relative w-full h-64 sm:h-80 lg:h-96 bg-gray-900"
                      >
                        <Image
                          src={img}
                          alt={`${item.title} - ${i + 1}`}
                          fill
                          className="object-contain transition-opacity duration-300"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>

                <p className="text-gray-700 text-lg sm:text-xl leading-relaxed text-center max-w-4xl mx-auto font-light tracking-wide">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .custom-dots li button:before {
          color: #374151;
          opacity: 0.5;
        }
        .custom-dots li.slick-active button:before {
          color: #1f2937;
          opacity: 1;
        }
        .slick-dots {
          bottom: -50px;
        }
      `}</style>
    </div>
  );
}
