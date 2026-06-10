import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Code2, BarChart3 } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

const pillars = [
  {
    icon: Building2,
    title: 'Rekayasa Sipil',
    description: 'Desain struktur, kalkulasi teknik, dan gambar kerja berstandar SNI untuk infrastruktur yang aman dan kokoh.',
  },
  {
    icon: Code2,
    title: 'Solusi IT & Digital',
    description: 'Pengembangan web app, sistem informasi, dan otomatisasi proses bisnis untuk transformasi digital perusahaan Anda.',
  },
  {
    icon: BarChart3,
    title: 'Analisis Data',
    description: 'Dashboard interaktif, visualisasi data, dan business intelligence untuk pengambilan keputusan yang terukur.',
  },
];

const AboutPreview = () => {
  return (
    <SectionWrapper id="about-preview" className="bg-white dark:bg-slate-950 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">
            Tentang Koribali
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white font-display leading-tight tracking-tight mb-6">
            Sinergi{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Rekayasa Sipil
            </span>{' '}
            & Inovasi Digital
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            <strong className="text-slate-900 dark:text-white">Koribali</strong> adalah perusahaan konsultan yang mengintegrasikan keahlian di bidang <strong className="text-slate-900 dark:text-white">teknik sipil</strong> dan <strong className="text-slate-900 dark:text-white">teknologi informasi</strong> dalam satu ekosistem yang utuh.
          </p>

          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
            Kami percaya bahwa infrastruktur fisik dan infrastruktur digital tidak seharusnya dibangun secara terpisah. Ketika keduanya berjalan beriringan, terciptalah efisiensi luar biasa — dari tahap kalkulasi desain hingga pemeliharaan aset dan otomatisasi bisnis.
          </p>

          <Link to="/tentang-kami">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-7 py-3 rounded-full font-semibold flex items-center transition-all duration-300 group hover:-translate-y-0.5">
              Selengkapnya Tentang Kami
              <div className="bg-white/10 p-1.5 rounded-full ml-3 group-hover:bg-white/20 transition-colors">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </button>
          </Link>
        </motion.div>

        {/* Pillars / Cards */}
        <div className="flex flex-col gap-5">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex items-start gap-5 group hover:border-blue-300 dark:hover:border-blue-800/60 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-[1rem] bg-blue-600 dark:bg-blue-800 flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display tracking-tight mb-1 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </SectionWrapper>
  );
};

export default AboutPreview;
