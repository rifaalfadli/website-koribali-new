import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { Layers, ShieldCheck, Cpu, FileSignature, Headset, Award } from 'lucide-react';

const reasons = [
  // POIN KEKUATAN KORIBALI (Niche & Expertise)
  {
    title: 'Sinergi Sipil & IT',
    description: 'Satu-satunya konsultan yang menggabungkan keahlian infrastruktur fisik dan ekosistem digital secara terintegrasi dalam satu atap.',
    icon: Layers,
  },
  {
    title: 'Akurasi & Standar Aman',
    description: 'Setiap perancangan dan kalkulasi divalidasi dengan standar keamanan industri (SNI) untuk menjamin kelayakan operasional.',
    icon: ShieldCheck,
  },
  {
    title: 'Otomatisasi Cerdas',
    description: 'Kami membangun sistem terintegrasi yang mampu memangkas waktu kerja manual Anda dari hitungan hari menjadi hitungan menit.',
    icon: Cpu,
  },
  // POIN JAMINAN OPERASIONAL & REPUTASI
  {
    title: 'Legalitas & Keamanan Data',
    description: 'Berbadan hukum resmi dengan infrastruktur server bersertifikasi. Kami menjamin kerahasiaan data dan hak kekayaan intelektual (HAKI) klien.',
    icon: FileSignature,
  },
  {
    title: 'Dedicated Support 24/7',
    description: 'Dikembangkan sepenuhnya oleh tim ahli internal kami (in-house). Kami menyediakan layanan pemeliharaan sistem agar bisnis Anda tetap online.',
    icon: Headset,
  },
  {
    title: 'Profesional & Terpercaya',
    description: 'Dipercaya oleh berbagai perusahaan infrastruktur dan telekomunikasi untuk menangani proyek-proyek kritikal mereka.',
    icon: Award,
  }
];

const WhyChooseUs = () => {
  return (
    <SectionWrapper className="bg-slate-950">
      <SectionHeading
        title="Mengapa Memilih Koribali?"
        description="Keunggulan teknis dan jaminan profesionalitas yang membuat kami menjadi mitra strategis terbaik untuk perusahaan Anda."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              {/* Card BG dibuat solid (bg-slate-900) agar lebih kontras dari bg-slate-950 */}
              <Card className="h-full flex flex-col p-6 bg-slate-900 border border-slate-800 hover:border-red-800/60 transition-colors group shadow-lg">

                {/* Ikon Dibuat Solid Background seperti referensi gambar */}
                <div className="w-14 h-14 rounded-[1rem] bg-red-800 flex items-center justify-center mb-6">
                  {/* Warna ikon diubah jadi putih murni dan sedikit ditebalkan */}
                  <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>

                <h4 className="text-xl font-bold text-white mb-3 font-display tracking-tight group-hover:text-red-400 transition-colors">
                  {reason.title}
                </h4>

                {/* Text paragraf diubah menjadi slate-300 agar jauh lebih terang dan mudah dibaca */}
                <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed flex-grow">
                  {reason.description}
                </p>

              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default WhyChooseUs;