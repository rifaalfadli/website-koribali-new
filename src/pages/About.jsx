import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Lightbulb, Users, Shield, Zap, Code2, Check, Eye } from 'lucide-react';
import SectionWrapper from '../components/ui/SectionWrapper';
import SectionHeading from '../components/ui/SectionHeading';
import CTASection from '../components/home/CTASection';
import ClientSlider from '../components/home/ClientSlider';
import WhyChooseUs from '../components/home/WhyChooseUs';
import PageHero from '../components/ui/PageHero';
import TechStack from '../components/home/TechStack';
import ProjectPreview from '../components/home/ProjectPreview';

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
        <meta name="description" content="Koribali adalah pelopor integrasi teknik sipil dan teknologi informasi di Indonesia." />
      </Helmet>

      <PageHero
        title="Membangun Infrastruktur yang Lebih Cerdas dengan Teknologi Terkini"
        description="Berawal dari keresahan melihat gap antara proses rekayasa teknik sipil tradisional dengan pesatnya laju digitalisasi, Koribali hadir sebagai jembatan yang menyatukan kedua dunia tersebut."
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
                  Sinergi <span className="text-blue-500">Rekayasa Sipil</span> & Inovasi Digital
                </h2>
              </div>

              <p>
                Berawal dari keresahan melihat gap antara proses rekayasa teknik sipil tradisional dengan pesatnya laju digitalisasi, Koribali hadir sebagai jembatan yang menyatukan kedua dunia tersebut.
              </p>
              <p>
                Kami percaya bahwa infrastruktur fisik dan infrastruktur digital tidak seharusnya dibangun secara terpisah. Ketika software engineering dan civil engineering berjalan beriringan, terciptalah efisiensi yang luar biasa, mulai dari tahap kalkulasi desain hingga pemeliharaan aset.
              </p>
              <p>
                Tim kami terdiri dari insinyur sipil tersertifikasi dan pengembang perangkat lunak berpengalaman yang berbicara dalam satu "bahasa": <strong className="text-slate-900 dark:text-white">Solusi</strong>.
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

        {/* Visi Misi */}
        <SectionWrapper className="bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-900">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Kartu Visi */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-10 rounded-[2.5rem] relative overflow-hidden group hover:border-blue-300 dark:hover:border-blue-900/50 hover:shadow-2xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/10 transition-all duration-300">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 blur-[50px] rounded-full group-hover:bg-blue-500/20 transition-colors" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white font-display mb-6 flex items-center">
                <span className="w-8 h-1 bg-blue-500 mr-4 rounded-full"></span> Visi
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed relative z-10">
                Menjadi pelopor integrasi teknologi informasi dan rekayasa sipil terkemuka di Asia Tenggara, mewujudkan infrastruktur yang cerdas, efisien, dan berkelanjutan.
              </p>
            </div>

            {/* Kartu Misi */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-10 rounded-[2.5rem] relative overflow-hidden group hover:border-blue-300 dark:hover:border-blue-900/50 hover:shadow-2xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/10 transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-900/20 blur-[50px] rounded-full group-hover:bg-blue-600/20 transition-colors" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white font-display mb-6 flex items-center">
                <span className="w-8 h-1 bg-blue-500 mr-4 rounded-full"></span> Misi
              </h2>
              <ul className="text-slate-500 dark:text-slate-400 space-y-4 text-lg leading-relaxed relative z-10">
                <li className="flex items-start">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 flex-shrink-0" />
                  Mengotomatisasi proses desain dan kalkulasi rekayasa.
                </li>
                <li className="flex items-start">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 flex-shrink-0" />
                  Membangun ekosistem digital untuk manajemen aset infrastruktur.
                </li>
                <li className="flex items-start">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 flex-shrink-0" />
                  Menghasilkan produk rekayasa berstandar SNI yang diakui secara global.
                </li>
              </ul>
            </div>
          </div>
        </SectionWrapper>

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