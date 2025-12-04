"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SearchBars() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3500,
  };

  const sliderImages = [
    "/001.jpg",
    "/002.jpg",
    "/003.jpg",
    "/004.jpg",
    "/005.jpg",
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-gray-900 px-6 md:px-20 py-16">

      {/* MAIN HEADING */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-tight drop-shadow-sm animate-pulse">
        WELCOME TO <br />
        <span className="underline decoration-4 decoration-yellow-400">UMER ESTATE & BUILDERS</span>
      </h1>

      <p className="text-center text-gray-600 mt-3 text-lg sm:text-xl font-light tracking-wide">
        YOUR TRUSTWORTHY REAL ESTATE PARTNER
      </p>

      {/* GRID SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        {/* LEFT — IMAGE SLIDER */}
        <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
          <Slider {...sliderSettings}>
            {sliderImages.map((src, index) => (
              <div key={index}>
                <img src={src} className="w-full h-[350px] md:h-[420px] object-cover" />
              </div>
            ))}
          </Slider>
        </div>

        {/* RIGHT — TEXT */}
        <div className="space-y-8">
          {/* WHO WE ARE */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 relative">
              <span className="relative inline-block">
                WHO WE ARE:
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
              </span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-light">
              Umer Estate & Builders is a trusted and professional real estate consultancy 
              based in Lahore. We offer buying, selling, investment consultancy, rental 
              management, and premium real estate services.
              <br /><br />
              With deep expertise in Lahore's leading societies including Allama Iqbal Town,
              Gulshan Ravi, Johar Town, LDA Avenue, LDA City, DHA, Bahria Town, and
              <strong className="text-indigo-600"> New Metro City Lahore</strong>, we ensure safe, transparent, and profitable
              investment guidance.
            </p>
          </div>

          {/* WHAT WE DO */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 relative">
              <span className="relative inline-block">
                WHAT WE DO:
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
              </span>
            </h2>
            <ul className="text-gray-700 space-y-3 leading-relaxed text-base sm:text-lg font-light">
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>Property Buying & Selling Assistance</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>High ROI Investment Consultancy</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>Residential & Commercial Deals</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>Updated Market Prices & Guidance</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>Complete Document & Transfer Process Help</li>
            </ul>
          </div>
        </div>
      </div>

      {/* TEAM SECTION */}
      <h2 className="text-3xl sm:text-4xl font-bold mt-20 text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        MEET OUR TEAM
      </h2>
      <p className="text-center text-gray-600 mt-2 text-lg font-light">
        The dedicated professionals behind Umer Estate & Builders
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">

        {/* PERSON 1 */}
        <div className="text-center p-8 bg-white border rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
          <img src="/team1.jpg" className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg" />
          <h3 className="text-xl sm:text-2xl font-bold mt-4 text-gray-800">Umer Malik</h3>
          <p className="text-gray-600 font-medium">CEO / Founder</p>
        </div>

        {/* PERSON 2 */}
        <div className="text-center p-8 bg-white border rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
          <img src="/team22.jpg" className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg" />
          <h3 className="text-xl sm:text-2xl font-bold mt-4 text-gray-800">Mr Rohail</h3>
          <p className="text-gray-600 font-medium">Director</p>
        </div>

        {/* PERSON 3 */}
        <div className="text-center p-8 bg-white border rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
          <img src="/team44.jpg" className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg" />
          <h3 className="text-xl sm:text-2xl font-bold mt-4 text-gray-800">Mr Shehzad</h3>
          <p className="text-gray-600 font-medium">Director</p>
        </div>

        {/* PERSON 4 */}
        <div className="text-center p-8 bg-white border rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
          <img src="/team4.jpg" className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg" />
          <h3 className="text-xl sm:text-2xl font-bold mt-4 text-gray-800">Zeenat</h3>
          <p className="text-gray-600 font-medium">Marketing Manager</p>
        </div>

      </div>
    </div>
  );
}