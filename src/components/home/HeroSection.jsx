import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const slides = [
  // SLIDE 1: Civil Engineering — konstruksi/struktur bangunan nyata
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Desain Teknik & Rekayasa Struktur Presisi",
    subtitle:
      "Solusi perancangan infrastruktur dari gambar kerja 2D, pemodelan 3D, hingga laporan kalkulasi struktur yang terverifikasi dan memenuhi standar keamanan.",
    primaryAction: { label: "Lihat Layanan Civil", path: "/layanan#civil" },
  },
  // SLIDE 2: IT & Digital Solutions — coding / developer workspace
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Digitalisasi Sistem & Aplikasi Custom",
    subtitle:
      "Tinggalkan proses manual yang usang. Kami membangun ekosistem digital dari website profesional hingga sistem informasi terpusat untuk otomatisasi bisnis Anda.",
    primaryAction: { label: "Eksplorasi Solusi IT", path: "/layanan#it" },
  },
  // SLIDE 3: Data & Analytics — grafik / analitik bisnis
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Analisis Data & Business Intelligence",
    subtitle:
      "Ubah tumpukan data operasional menjadi strategi bisnis yang terukur melalui layanan analitik, visualisasi, dan pembuatan dashboard interaktif.",
    primaryAction: { label: "Pelajari Layanan Data", path: "/layanan#data" },
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate -mt-28 overflow-hidden pt-28 text-white bg-black">
      {/* Background Images with Crossfade */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75 }}
          className="absolute inset-0 -z-10"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay Gelap */}
      <div className="absolute inset-0 -z-10 bg-black/40 md:bg-gradient-to-r md:from-black/70 md:to-black/20" />

      {/* Container Utama */}
      <div className="relative mx-auto flex min-h-[580px] h-auto py-20 md:py-0 md:min-h-0 md:h-[650px] lg:h-[715px] max-w-7xl flex-col justify-center px-6 sm:px-10 lg:px-16 w-full">
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
