import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const slides = [
  // SLIDE 1: Sinkron dengan Services "Civil Engineering"
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: 'Desain Teknik & Rekayasa Struktur Presisi',
    subtitle: 'Solusi perancangan teknik sipil dari gambar kerja 2D, visualisasi 3D, hingga laporan kalkulasi struktur yang terverifikasi.',
    primaryAction: { label: 'Lihat Layanan Civil', path: '/layanan#civil' },
  },
  // SLIDE 2: Sinkron dengan Services "IT & Digital Solutions" (Termasuk Integrasi Inventor)
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: 'Web App & Otomatisasi Sistem Digital',
    subtitle: 'Membangun ekosistem digital mulai dari website, sistem informasi, hingga otomatisasi desain parametrik yang terintegrasi dengan Autodesk Inventor.',
    primaryAction: { label: 'Eksplorasi Solusi IT', path: '/layanan#it' },
  },
  // SLIDE 3: Sinkron dengan Services "Data & Analytics"
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: 'Analisis Data & Pengambilan Keputusan',
    subtitle: 'Ubah data mentah menjadi wawasan bisnis melalui layanan analitik, visualisasi, dan pembuatan dashboard interaktif yang cerdas.',
    primaryAction: { label: 'Pelajari Layanan Data', path: '/layanan#data' },
  }
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
      <div className="relative mx-auto flex h-[580px] md:h-[650px] lg:h-[715px] max-w-7xl flex-col justify-center px-6 sm:px-10 lg:px-16 w-full">

        <div className="relative h-[320px] sm:h-[280px] md:h-[300px] flex flex-col justify-start w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-[800px]"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display max-w-[720px] leading-[1.1] tracking-tight mb-6 text-white drop-shadow-lg">
                {slides[currentSlide].title}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
                {slides[currentSlide].subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link to={slides[currentSlide].primaryAction.path}>
                  <button className="bg-gradient-to-r from-red-800 to-red-950 hover:from-red-700 hover:to-red-900 text-white px-7 py-3.5 rounded-full font-semibold flex items-center transition-all duration-300 group shadow-md shadow-red-900/30 hover:shadow-lg hover:shadow-red-900/40 hover:-translate-y-0.5">
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

        {/* Slider Indicators Tema Dark Blood */}
        <div className="mt-12 flex w-full justify-center items-center gap-[0.5rem]">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 ease-in-out rounded-full border ${currentSlide === index
                ? 'w-[42px] h-[12px] bg-red-600 border-red-600 shadow-[0_4px_12px_rgba(220,38,38,0.5)]'
                : 'w-[12px] h-[12px] bg-white/40 border-white/30 hover:bg-white/70'
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;