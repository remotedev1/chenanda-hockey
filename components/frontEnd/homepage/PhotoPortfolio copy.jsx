"use client";
import React, { useState } from "react";

const PhotoPortfolio = () => {
  const [hoveredPhoto, setHoveredPhoto] = useState(null);

  const photos = [
    { id: 1, rotation: -8, top: "5%", left: "8%", size: "w-48 h-56" },
    { id: 2, rotation: 12, top: "8%", right: "15%", size: "w-52 h-48" },
    { id: 3, rotation: -5, top: "15%", left: "28%", size: "w-44 h-52" },
    { id: 4, rotation: 8, top: "18%", right: "35%", size: "w-48 h-56" },
    { id: 5, rotation: -12, top: "45%", left: "5%", size: "w-56 h-64" },
    { id: 6, rotation: 6, top: "48%", left: "25%", size: "w-44 h-52" },
    { id: 7, rotation: -6, top: "50%", right: "25%", size: "w-48 h-56" },
    { id: 8, rotation: 10, top: "52%", right: "8%", size: "w-52 h-60" },
    { id: 9, rotation: -10, top: "75%", left: "12%", size: "w-52 h-48" },
    { id: 10, rotation: 8, top: "78%", left: "32%", size: "w-44 h-52" },
    { id: 11, rotation: -7, top: "75%", right: "30%", size: "w-40 h-48" },
    { id: 12, rotation: 15, top: "72%", right: "12%", size: "w-56 h-56" },
  ];

  const generateGradient = (id) => {
    const gradients = [
      "from-blue-400 to-purple-500",
      "from-pink-400 to-orange-400",
      "from-green-400 to-teal-500",
      "from-yellow-400 to-red-500",
      "from-indigo-400 to-blue-500",
      "from-purple-400 to-pink-500",
    ];
    return gradients[id % gradients.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-blue-600 overflow-hidden">

      {/* Hero Text */}
      <div className="relative z-10 text-center pt-16 pb-8">
        <h1 className="text-8xl font-bold text-white tracking-tight leading-tight">
          everything
          <br />
          is a frame
        </h1>
      </div>

      {/* Main Content Card */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 mt-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
       
          {/* Photo Gallery Section */}
          <div className="relative h-[500px] bg-gradient-to-br from-gray-50 to-white">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className={`absolute ${photo.size} cursor-pointer transition-all duration-500 ease-out`}
                style={{
                  top: photo.top,
                  left: photo.left,
                  right: photo.right,
                  transform: `rotate(${
                    hoveredPhoto === photo.id ? 0 : photo.rotation
                  }deg) ${
                    hoveredPhoto === photo.id ? "scale(1.1)" : "scale(1)"
                  }`,
                  zIndex: hoveredPhoto === photo.id ? 50 : 10,
                }}
                onMouseEnter={() => setHoveredPhoto(photo.id)}
                onMouseLeave={() => setHoveredPhoto(null)}
              >
                <div
                  className={`w-full h-full bg-gradient-to-br ${generateGradient(
                    photo.id
                  )} rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 border-8 border-white`}
                >
                  <div className="w-full h-full flex items-center justify-center text-white text-opacity-40 text-sm">
                    Photo {photo.id}
                  </div>
                </div>
              </div>
            ))}

            {/* Center CTA */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-30 pointer-events-none">
              <h2 className="text-6xl font-serif mb-6 text-gray-900">
                Explore Museum
              </h2>
              <button className="pointer-events-auto px-8 py-3 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-full font-medium hover:shadow-xl transition transform hover:scale-110">
                Start now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Image Section */}
      <div className="relative z-10 mt-12 h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 opacity-60"></div>
      </div>
    </div>
  );
};

export default PhotoPortfolio;
