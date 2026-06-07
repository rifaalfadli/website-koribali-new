import React from "react";
import { partners } from "../../data/partners";

const ClientSlider = () => {
  const fadeStyle = {
    maskImage:
      "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
  };

  return (
    <div className="py-16 max-w-6xl mx-auto bg-slate-950 overflow-hidden mt-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 text-center">
        <h3 className="text-xl md:text-2xl font-bold text-white font-display">
          Dipercaya oleh <span className="text-red-500">100+</span> Client Kami
        </h3>
      </div>

      {/* Row 1 — gerak ke kanan */}
      <div className="relative overflow-hidden mb-8" style={fadeStyle}>
        <div className="flex gap-12 animate-scroll-left w-max">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`row1-${index}`}
              className="w-28 md:w-36 h-16 flex-shrink-0 flex items-center justify-center grayscale invert opacity-30 hover:opacity-80 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — gerak ke kiri */}
      <div className="relative overflow-hidden" style={fadeStyle}>
        <div className="flex gap-12 animate-scroll-right w-max">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`row2-${index}`}
              className="w-28 md:w-36 h-16 flex-shrink-0 flex items-center justify-center grayscale invert opacity-30 hover:opacity-80 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSlider;
