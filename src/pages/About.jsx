import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Lightbulb, Users, Shield, Zap, Code2 } from 'lucide-react';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionHeading from '../components/ui/SectionHeading';
import SectionWrapper from '../components/ui/SectionWrapper';
import CTASection from '../components/home/CTASection';

const About = () => {
  const values = [
    { icon: Target, title: 'Presisi', desc: 'Akurasi adalah harga mati dalam setiap kalkulasi struktur dan baris kode kami.' },
    { icon: Zap, title: 'Inovasi', desc: 'Terus mengadopsi teknologi terbaru untuk menghadirkan solusi yang lebih efisien.' },
    { icon: Shield, title: 'Integritas', desc: 'Transparansi dan standar etika tinggi dalam setiap pengerjaan proyek klien.' },
    { icon: Users, title: 'Kolaborasi', desc: 'Sinergi erat antara tim engineer kami dan stakeholder klien.' },
    { icon: Lightbulb, title: 'Solutif', desc: 'Fokus pada penyelesaian masalah, bukan sekadar penerapan teknologi.' },
    { icon: Code2, title: 'Kualitas', desc: 'Kode yang bersih dan struktur fisik yang kokoh sesuai standar nasional.' }
  ];

  return (
    <>
      <Helmet>
        <title>Tentang Kami | Koribali</title>
        <meta name="description" content="Koribali adalah pelopor integrasi teknik sipil dan teknologi informasi di Indonesia." />
      </Helmet>

      <div className="pt-10">
        <SectionWrapper className="pb-8">
          <Breadcrumb items={[{ label: 'Tentang Kami' }]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-display leading-tight mb-6">
              Membangun Infrastruktur yang Lebih Cerdas dengan Teknologi Terkini
            </h1>
          </div>
        </SectionWrapper>

        {/* About Us Narrative */}
        <SectionWrapper className="pt-0 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-slate-300 space-y-6 leading-relaxed text-lg">
              <p>
                Berawal dari keresahan melihat gap antara proses rekayasa teknik sipil tradisional dengan pesatnya laju digitalisasi, Koribali hadir sebagai jembatan yang menyatukan kedua dunia tersebut.
              </p>
              <p>
                Kami percaya bahwa infrastruktur fisik dan infrastruktur digital tidak seharusnya dibangun secara terpisah. Ketika software engineering dan civil engineering berjalan beriringan, terciptalah efisiensi yang luar biasa, mulai dari tahap kalkulasi desain hingga pemeliharaan aset.
              </p>
              <p>
                Tim kami terdiri dari insinyur sipil tersertifikasi dan pengembang perangkat lunak berpengalaman yang berbicara dalam satu "bahasa": Solusi.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-slate-800 rounded-2xl overflow-hidden relative border border-slate-700">
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" alt="Civil Engineering" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-cyan-900/40 mix-blend-multiply" />
              </div>
              <div className="aspect-square bg-slate-800 rounded-2xl overflow-hidden relative border border-slate-700 mt-8">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" alt="Software Engineering" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Visi Misi */}
        <SectionWrapper className="bg-slate-900/50 border-y border-slate-800 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-950/50 p-8 rounded-3xl border border-slate-800 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] rounded-full group-hover:bg-cyan-500/20 transition-colors" />
              <h2 className="text-3xl font-bold text-white font-display mb-6">Visi</h2>
              <p className="text-slate-300 text-lg leading-relaxed relative z-10">
                Menjadi pelopor integrasi teknologi informasi dan rekayasa sipil terkemuka di Asia Tenggara, mewujudkan infrastruktur yang cerdas, efisien, dan berkelanjutan.
              </p>
            </div>
            <div className="bg-slate-950/50 p-8 rounded-3xl border border-slate-800 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full group-hover:bg-indigo-500/20 transition-colors" />
              <h2 className="text-3xl font-bold text-white font-display mb-6">Misi</h2>
              <ul className="text-slate-300 space-y-4 text-lg leading-relaxed relative z-10 list-disc pl-5">
                <li>Mengotomatisasi proses desain dan kalkulasi rekayasa.</li>
                <li>Membangun ekosistem digital untuk manajemen aset infrastruktur.</li>
                <li>Menghasilkan produk rekayasa berstandar SNI yang diakui secara global.</li>
              </ul>
            </div>
          </div>
        </SectionWrapper>

        {/* Keunggulan */}
        <SectionWrapper>
          <SectionHeading title="Nilai & Keunggulan Kami" className="text-center flex flex-col items-center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-5 text-cyan-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </SectionWrapper>

        {/* Teknologi & Tools */}
        <SectionWrapper className="pt-0">
          <SectionHeading title="Teknologi yang Kami Gunakan" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-6 border-b border-slate-800 pb-4">Engineering Software</h3>
              <div className="flex flex-wrap gap-3">
                {['AutoCAD', 'Civil 3D', 'SAP2000', 'ETABS', 'Revit', 'Autodesk Inventor'].map((t) => (
                  <span key={t} className="bg-slate-800 text-slate-300 px-4 py-2 rounded-lg text-sm font-medium">{t}</span>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-6 border-b border-slate-800 pb-4">Development Stack</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'TensorFlow'].map((t) => (
                  <span key={t} className="bg-slate-800 text-slate-300 px-4 py-2 rounded-lg text-sm font-medium">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>

        <CTASection />
      </div>
    </>
  );
};

export default About;
