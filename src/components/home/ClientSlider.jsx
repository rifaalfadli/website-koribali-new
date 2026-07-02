import React from "react";
import { partners } from "../../data/partners";

const ClientSlider = () => {
  return (
    <div className="py-20 w-full max-w-6xl mx-auto px-4 md:px-8">
      <div className="mb-12 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white font-display">
          Dipercaya oleh <span className="text-blue-500">Klien Kami</span>
        </h3>
      </div>

      <div className="flex items-center justify-center gap-12 md:gap-20 flex-wrap">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className={`w-40 md:w-56 h-24 md:h-32 flex items-center justify-center p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${partner.bgClass || ""}`}
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
  );
};

export default ClientSlider;
