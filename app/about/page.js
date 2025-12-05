// app/about/page.js
"use client";
import Image from "next/image";
import { useState } from "react";

const team = [
  {
    name: "Hafiz Zaheer Malik",
    role: "Founder & CEO",
    image: "/team1.jpg",
    description:
      "Hafiz Zaheer Malik brings over 25 years of real estate expertise. Known for his honesty, market knowledge, and exceptional negotiation skills, he has earned the trust of countless clients. His guidance consistently leads investors and buyers to secure the best property deals.",
  },
  {
    name: "Rohail Iqbal",
    role: "Director of Umer Estate",
    image: "/team22.jpg",
    description:
      "Rohail Iqbal manages overall operations at Umer Estate, ensuring seamless execution of projects and client satisfaction.",
  },
  {
    name: "Mr Shehzad",
    role: "Director of Umer Estate",
    image: "/team44.jpg",
    description:
      "Mr. Shehzad oversees strategic planning and deal management at Umer Estate, ensuring smooth property transactions and trusted client guidance.",
  },
  {
    name: "Zeenat Mughal",
    role: "Media Team",
    image: "/team4.jpg",
    description:
      "Zeenat Mughal handles marketing and media communications, ensuring Umer Estate reaches the right audience with every project.",
  },
];

export default function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappMessage = `Hello, my name is ${name}. Email: ${email}. Message: ${message}`;
    const whatsappURL = `https://wa.me/923144328762?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* PAGE TITLE */}
        <h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          About Umer Estate & Builders
        </h1>

        <p className="text-center text-lg sm:text-xl mb-16 text-gray-700 max-w-4xl mx-auto leading-relaxed">
          At Umer Estate & Builders, we combine experience, quality, and customer
          satisfaction to create exceptional real estate solutions. Meet our dedicated team:
        </p>

        {/* TEAM SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white shadow-xl rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
            >
              <div className="w-full mx-auto mb-4 flex justify-center">
                <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100 w-full max-w-[220px] h-[220px] flex items-center justify-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              <h2 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h2>
              <p className="text-indigo-600 font-semibold mb-4">{member.role}</p>
              <p className="text-gray-700 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>

        {/* CONTACT INFO SECTION WITH IMAGES */}
        <div className="bg-white shadow-xl rounded-2xl p-10 mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-center">

            {/* SABZAZAR OFFICE */}
            <div>
              <div className="w-full flex justify-center mb-5">
                <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100 w-full max-w-[320px] h-[200px] flex items-center justify-center">
                  <Image
                    src="/sabzazar-office.jpg" // change to your image
                    alt="Sabzazar Office"
                    width={500}
                    height={300}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sabzazar Office</h3>
              <p className="text-gray-700">79-Civic Center, Sabzazar, Lahore</p>
            </div>

            {/* NEW METRO CITY OFFICE */}
            <div>
              <div className="w-full flex justify-center mb-5">
                <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100 w-full max-w-[320px] h-[200px] flex items-center justify-center">
                  <Image
                    src="/new-metro-city-office.jpg" // change to your image
                    alt="New Metro City Office"
                    width={500}
                    height={300}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Dealers Enclave – New Metro City
              </h3>
              <p className="text-gray-700">Dealers Enclave, 14/15 New Metro City, Lahore</p>
            </div>

          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="bg-white shadow-xl rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Get in Touch with Us
          </h2>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all shadow-lg"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}