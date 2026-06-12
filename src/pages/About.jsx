import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Lightbulb, Users, Shield, Zap, Code2, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionWrapper from '../components/ui/SectionWrapper';
import SectionHeading from '../components/ui/SectionHeading';
import CTASection from '../components/home/CTASection';
import ClientSlider from '../components/home/ClientSlider';
import WhyChooseUs from '../components/home/WhyChooseUs';
import PageHero from '../components/ui/PageHero';
import TechStack from '../components/home/TechStack';
import ProjectPreview from '../components/home/ProjectPreview';
import VisiMisi from '../components/home/VisiMisi';

const teamMembers = [
  {
    id: 1,
    name: 'I Kadek Rifa Adinata',
    role: 'Founder & CEO',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Ni Made Ayu Saraswati',
    role: 'Chief Technology Officer',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'I Putu Gede Wiranata',
    role: 'Lead Civil Engineer',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Ni Luh Putu Kartini',
    role: 'Senior Software Engineer',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    name: 'I Wayan Dharma Putra',
    role: 'Structural Engineer',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    name: 'Ni Nyoman Sari Dewi',
    role: 'UI/UX Designer',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 7,
    name: 'I Made Bayu Krisna',
    role: 'Backend Developer',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 8,
    name: 'Putu Ayu Pradnyani',
    role: 'Project Manager',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  },
];

const TeamCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  const autoPlayRef = useRef(null);
  const totalSlides = teamMembers.length;

  const scrollToIndex = (index) => {
    const bounded = Math.max(0, Math.min(index, totalSlides - 1));
    setActiveIndex(bounded);
    if (trackRef.current) {
      const card = trackRef.current.children[bounded];
      if (card) {
        const track = trackRef.current;
        const cardLeft = card.offsetLeft;
        const cardWidth = card.offsetWidth;
        const trackWidth = track.offsetWidth;
        track.scrollTo({
          left: cardLeft - (trackWidth / 2) + (cardWidth / 2),
          behavior: 'smooth',
        });
      }
    }
  };

  const prev = () => scrollToIndex(activeIndex === 0 ? totalSlides - 1 : activeIndex - 1);
  const next = () => scrollToIndex(activeIndex === totalSlides - 1 ? 0 : activeIndex + 1);

  useEffect(() => {
    autoPlayRef.current = setInterval(next, 3500);
    return () => clearInterval(autoPlayRef.current);
  }, [activeIndex]);

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -translate-x-3 md:-translate-x-5 w-11 h-11 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200"
        aria-label="Previous"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 translate-x-3 md:translate-x-5 w-11 h-11 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200"
        aria-label="Next"
      >
        <ChevronRight size={20} />
      </button>

      {/* Cards Track */}
      <div className="overflow-hidden mx-6 md:mx-8">
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {teamMembers.map((member, idx) => (
            <div
              key={member.id}
              onClick={() => scrollToIndex(idx)}
              className={`snap-center flex-shrink-0 w-52 md:w-60 group cursor-pointer transition-all duration-300 ${activeIndex === idx ? 'scale-100' : 'scale-95 opacity-80'}`}
            >
              {/* Photo */}
              <div className="relative mb-4 rounded-2xl overflow-hidden aspect-[3/4] border-2 border-transparent group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all duration-300 shadow-lg">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {activeIndex === idx && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />
                )}
              </div>
              {/* Info */}
              <div className="text-center px-1">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base leading-tight mb-1 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-blue-500 dark:text-blue-400 text-xs md:text-sm font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {teamMembers.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === idx
                ? 'w-6 h-2 bg-blue-500'
                : 'w-2 h-2 bg-slate-300 dark:bg-slate-600 hover:bg-blue-300 dark:hover:bg-blue-700'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const About = () => {
  const values = [
    { icon: Target, title: 'Presisi', desc: 'Akurasi adalah harga mati dalam setiap kalkulasi struktur dan baris kode kami.' },
    { icon: Zap, title: 'Inovasi', desc: 'Terus mengadopsi teknologi terbaru untuk menghadirkan solusi yang lebih efisien.' },
    { icon: Shield, title: 'Integritas', desc: 'Transparansi dan standar etika tinggi dalam setiap pengerjaan proyek klien.' },
    { icon: Users, title: 'Kolaborasi', desc: 'Sinergi erat antara tim engineer kami dan stakeholder klien.' },
    { icon: Lightbulb, title: 'Solutif', desc: 'Fokus pada penyelesaian masalah, bukan sekadar penerapan teknologi.' },
    { icon: Code2, title: 'Kualitas', desc: 'Kode yang bersih dan struktur fisik yang kokoh sesuai standar nasional.' }
  ];

  const galleryPhotos = [
    { id: 1, src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80", heightClass: "h-64 md:h-80" },
    { id: 2, src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", heightClass: "h-80 md:h-96" },
    { id: 3, src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80", heightClass: "h-96 md:h-[28rem]" },
    { id: 4, src: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=800&q=80", heightClass: "h-80 md:h-96" },
    { id: 5, src: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80", heightClass: "h-72 md:h-[22rem]" },
    // Perubahannya ada di baris ini (id 6)
    // Tinggi ditambah menjadi h-[22rem] untuk mobile dan h-[26rem] untuk desktop
    { id: 6, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", heightClass: "h-[22rem] md:h-[26rem]" },
  ];

  return (
    <>
      <Helmet>
        <title>Tentang Kami | Koribali</title>
        <meta name="description" content="Koribali adalah perusahaan Technology Consulting & AI Solutions yang menghadirkan transformasi digital, solusi AI, dan konsultasi teknologi engineering." />
      </Helmet>

      <PageHero
        title="Technology Consulting & AI Solutions untuk Bisnis yang Lebih Cerdas"
        description="Koribali hadir untuk memimpin transformasi digital bisnis Anda — dari integrasi kecerdasan buatan dan digitalisasi sistem, hingga konsultasi teknologi rekayasa yang presisi."
        breadcrumbs={[{ label: 'Tentang Kami' }]}
      />

      <div className="pt-10 bg-white dark:bg-slate-950">

        {/* About Us Narrative */}
        <SectionWrapper className="pt-0 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Kolom Teks (Kiri) */}
            <div className="lg:col-span-7 text-slate-600 dark:text-slate-300 space-y-6 leading-relaxed text-lg">
              <div className="mb-8">
                <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">
                  Tentang Kami
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white font-display leading-tight">
                  <span className="text-blue-500">Technology Consulting</span> & AI Solutions
                </h2>
              </div>

              <p>
                Koribali adalah perusahaan konsultan teknologi yang berfokus pada transformasi digital, kecerdasan buatan (AI), dan konsultasi teknologi engineering — menghadirkan solusi menyeluruh agar bisnis Anda beroperasi lebih cerdas dan efisien.
              </p>
              <p>
                Kami membangun segala kebutuhan digital Anda: dari aplikasi web custom dan digitalisasi sistem operasional manual, hingga integrasi LLM (Large Language Model) yang mengotomatisasi analisis dan pengambilan keputusan bisnis secara real-time.
              </p>
              <p>
                Di sisi engineering, tim kami menyediakan konsultasi teknologi desain dan rekayasa struktur — memastikan setiap infrastruktur yang Anda bangun telah melalui kalkulasi keamanan yang terverifikasi. Satu mitra, dua keahlian, satu tujuan: <strong className="text-slate-900 dark:text-white">Solusi</strong>.
              </p>
            </div>

            {/* Kolom Gambar (Kanan) - Layout 3 Foto Asimetris/Masonry */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 lg:gap-6 relative group mt-8 lg:mt-0 h-full min-h-[500px]">
              {/* Efek Glow di belakang gambar */}
              <div className="absolute inset-0 bg-blue-900/20 blur-[60px] rounded-full transform -translate-x-4 translate-y-4 -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Sub-kolom Kiri: 2 Foto (Square & Portrait) */}
              <div className="flex flex-col gap-4 lg:gap-6 pt-8 lg:pt-12">
                <div className="aspect-square bg-slate-900 rounded-3xl overflow-hidden relative border border-slate-800 shadow-xl group-hover:-translate-y-2 transition-transform duration-500">
                  <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" alt="Civil Engineering" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply pointer-events-none" />
                </div>
                <div className="aspect-[4/5] bg-slate-900 rounded-3xl overflow-hidden relative border border-slate-800 shadow-xl group-hover:-translate-y-1 transition-transform duration-500 delay-100">
                  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" alt="Software Engineering" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-slate-950/60 mix-blend-multiply pointer-events-none" />
                </div>
              </div>

              {/* Sub-kolom Kanan: 1 Foto Besar Memanjang */}
              <div className="flex flex-col gap-4 lg:gap-6 pt-8 lg:pt-12 pb-8 h-full">
                <div className="w-full h-full min-h-[300px] bg-slate-900 rounded-3xl overflow-hidden relative border border-slate-800 shadow-xl group-hover:translate-y-2 transition-transform duration-500">
                  {/* Gambar diset absolute agar membentang mengikuti tinggi container */}
                  <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" alt="Engineering Team" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply pointer-events-none" />
                </div>
              </div>

            </div>

          </div>
        </SectionWrapper>

        <VisiMisi noBg />

        {/* Tim Koribali — full-width background, content stays within layout */}
        <div className="w-full bg-slate-50 dark:bg-slate-900/20 border-y border-slate-200 dark:border-slate-900 py-24">
          {/* Heading — dibatasi max-w-7xl */}
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">
                Tim Kami
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white font-display mb-4">
                Orang-orang di Balik Koribali
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg">
                Tim multidisiplin yang berdedikasi, menyatukan keahlian rekayasa sipil dan teknologi digital.
              </p>
            </div>
          </div>
          {/* Carousel — konten (kartu) dibatasi max-w-7xl, tapi area scroll tetap di dalam full-width bg */}
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <TeamCarousel />
          </div>
        </div>

        {/* Galeri Kegiatan (Pinterest Style / Masonry Layout) */}
        <SectionWrapper className="pb-24 pt-24">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">
              Galeri Kegiatan
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white font-display mb-6">
              Momen & Aktivitas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
              {galleryPhotos.slice(0, 3).map((photo) => (
                <div key={photo.id} className="relative group rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-xl transition-all duration-500">
                  <div className="absolute inset-0 bg-blue-900/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
                  <img
                    src={photo.src}
                    alt={`Kegiatan ${photo.id}`}
                    className={`w-full ${photo.heightClass} object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105 relative z-10`}
                  />
                  <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-20" />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6">
              {galleryPhotos.slice(3, 6).map((photo) => (
                <div key={photo.id} className="relative group rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-xl transition-all duration-500">
                  <div className="absolute inset-0 bg-blue-900/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
                  <img
                    src={photo.src}
                    alt={`Kegiatan ${photo.id}`}
                    className={`w-full ${photo.heightClass} object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105 relative z-10`}
                  />
                  <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-20" />
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <ClientSlider />
        <WhyChooseUs />
        <TechStack />
        <ProjectPreview />
        <CTASection />
      </div>
    </>
  );
};

export default About;