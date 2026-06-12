import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { Layers, ShieldCheck, Cpu, FileSignature, Headset, Award } from 'lucide-react';

const reasons = [
  {
    title: 'AI-First Approach',
    description: 'Kami mengintegrasikan kecerdasan buatan (LLM & ML) langsung ke dalam sistem digital klien untuk otomatisasi cerdas dan analisis data yang mendalam.',
    icon: Layers,
  },
  {
    title: 'Akurasi & Keamanan Terverifikasi',
    description: 'Setiap solusi yang kami bangun — baik sistem digital maupun desain engineering — divalidasi dengan standar keamanan dan kelayakan yang ketat.',
    icon: ShieldCheck,
  },
  {
    title: 'Otomatisasi Cerdas',
    description: 'Kami membangun sistem terintegrasi yang mampu memangkas waktu kerja manual Anda dari hitungan hari menjadi hitungan menit.',
    icon: Cpu,
  },
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
    title: 'Konsultan Teknologi Terpercaya',
    description: 'Dipercaya oleh berbagai perusahaan di bidang infrastruktur, telekomunikasi, dan korporasi untuk menangani proyek-proyek transformasi digital kritikal mereka.',
    icon: Award,
  }
];

const WhyChooseUs = () => {
  return (
    <SectionWrapper className="bg-white dark:bg-slate-950">
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
              <Card className="h-full flex flex-col p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-800/60 transition-colors group shadow-lg">

                {/* Ikon Dibuat Solid Background */}
                <div className="w-14 h-14 rounded-[1rem] bg-blue-600 dark:bg-blue-800 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-display tracking-tight group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {reason.title}
                </h4>

                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-[15px] leading-relaxed flex-grow">
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