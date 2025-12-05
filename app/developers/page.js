"use client";

import { useRef, useEffect } from "react";

export default function Developers() {
  const devs = ["New Metro City", "Umer Estate & Builders"];
  const iframeRef = useRef(null);

  // Enable pinch-zoom on mobile
  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.setAttribute("allow", "fullscreen");
      iframe.setAttribute("allowfullscreen", "");
    }
  }, []);

  // Zoom functions
  const zoomIn = () => {
    const iframe = iframeRef.current;
    iframe.style.transform = "scale(1.2)";
    iframe.style.transformOrigin = "0 0";
  };

  const zoomOut = () => {
    const iframe = iframeRef.current;
    iframe.style.transform = "scale(0.8)";
    iframe.style.transformOrigin = "0 0";
  };

  const resetZoom = () => {
    const iframe = iframeRef.current;
    iframe.style.transform = "scale(1)";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-tight drop-shadow-sm">
          Top Developers
        </h1>

        {/* Developer List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {devs.map((a, i) => (
            <li
              key={i}
              className="p-6 shadow-xl bg-white rounded-2xl text-xl font-semibold text-center hover:scale-105 transition-transform duration-300 list-none"
            >
              {a}
            </li>
          ))}
        </div>

        {/* PDF Map Section */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Project Map
          </h2>

          {/* Zoom Controls */}
          <div className="flex gap-4 justify-center mb-6">
            <button
              onClick={zoomIn}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            >
              Zoom In ➕
            </button>
            <button
              onClick={zoomOut}
              className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
            >
              Zoom Out ➖
            </button>
            <button
              onClick={resetZoom}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700"
            >
              Reset 🔄
            </button>
          </div>

          {/* PDF Viewer */}
          <div className="w-full h-[600px] sm:h-[800px] md:h-[1000px] lg:h-[1200px] rounded-xl overflow-scroll shadow-lg">
            <iframe
              ref={iframeRef}
              src="/map.pdf"
              width="100%"
              height="100%"
              style={{
                border: "none",
                overflow: "scroll",
                touchAction: "pan-x pan-y",
              }}
              title="Project Map PDF"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
