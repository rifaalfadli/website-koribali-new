import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Transformasi Digital, Analitik Data & Solusi AI",
    subtitle:
      "Akselerasi bisnis Anda dengan ekosistem digital terintegrasi, mulai dari aplikasi custom dan analitik data hingga implementasi AI untuk otomatisasi operasional.",
    primaryAction: {
      label: "Eksplorasi Solusi Digital & AI",
      path: "/layanan",
    },
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Konsultasi Teknologi Desain & Rekayasa Struktur",
    subtitle:
      "Infrastruktur dirancang dengan standar presisi tertinggi, memadukan pemodelan 3D interaktif, gambar kerja teknis, dan kalkulasi kelayakan struktur yang terverifikasi.",
    primaryAction: {
      label: "Eksplorasi Layanan Engineering",
      path: "/layanan",
    },
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate -mt-28 overflow-hidden pt-28 text-white bg-black">
      {/* Background Images with Crossfade + Ken Burns */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 -z-10 overflow-hidden"
        >
          <motion.img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15, ease: "linear" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay: gradient kiri untuk teks + vignette bawah */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-transparent to-black/15" />

      {/* Container Utama */}
      <div className="relative mx-auto flex min-h-[580px] h-auto py-20 md:py-0 md:min-h-0 md:h-[650px] lg:h-[715px] max-w-7xl flex-col justify-center pb-12 md:pb-16 px-6 sm:px-10 lg:px-16 w-full">
        <div className="relative min-h-[320px] sm:min-h-[280px] md:min-h-0 md:h-[300px] flex flex-col justify-start w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-[800px]"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-display max-w-[760px] leading-[1.2] md:leading-[1.1] tracking-tight mb-4 md:mb-6 text-white drop-shadow-lg">
                {slides[currentSlide].title}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed drop-shadow-md">
                {slides[currentSlide].subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link to={slides[currentSlide].primaryAction.path}>
                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-7 py-3.5 rounded-full font-semibold flex items-center transition-all duration-300 group hover:-translate-y-0.5">
                    {slides[currentSlide].primaryAction.label}
                    <div className="bg-white/10 p-1.5 rounded-full ml-3 group-hover:bg-white/20 transition-colors">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Indicators Tema Deep Blue */}
        <div className="mt-12 flex w-full justify-center items-center gap-[0.5rem]">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 ease-in-out rounded-full border ${
                currentSlide === index
                  ? "w-[42px] h-[12px] bg-blue-600 border-blue-600"
                  : "w-[12px] h-[12px] bg-white/40 border-white/30 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
