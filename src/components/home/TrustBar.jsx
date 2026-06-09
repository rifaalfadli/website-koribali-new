import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Users, Cpu, FileText } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: '100+', label: 'Proyek' },
  { icon: Award, value: '10+ Tahun', label: 'Berpengalaman' },
  { icon: Users, value: '30+', label: 'Tim Ahli' },
  { icon: Cpu, value: 'Teknologi', label: 'Canggih' },
  { icon: FileText, value: '100+', label: 'Portofolio' },
];

const TrustBar = () => {
  return (
    // 1. WIDTH & POSISI: max-w-[1080px] agar lebarnya persis proporsional seperti di gambar. -mt-24 agar posisi naiknya pas.
    <div className="relative z-20 -mt-14 max-w-[960px] mx-auto px-4 md:px-8">

      {/* 2. HEIGHT & ROUNDED: rounded-[24px] di mobile agar tidak terlalu bulat, py-6 agar proporsional */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-[24px] lg:rounded-[40px] shadow-2xl shadow-blue-600/35 py-4 sm:py-4 px-1 sm:px-4 md:px-6 lg:px-4">

        {/* 3. FLEX WRAP: Menggunakan flex agar item ganjil (ke-5) bisa otomatis ke tengah di baris terakhir */}
        <div className="flex flex-wrap justify-center gap-y-6 gap-x-4 sm:gap-8 lg:gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center px-2 w-[30%] sm:w-[45%] lg:w-[30%] md:w-auto md:flex-1"
              >
                {/* 4. UKURAN IKON: Kembali dibesarkan (w-16 h-16) dan jarak bawah (mb-4) agar seimbang dengan text */}
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white/10 flex items-center justify-center mb-3 lg:mb-4">
                  <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" strokeWidth={2} />
                </div>

                {/* 5. TEKS SATU BARIS: Angka dan Label digabung menjadi satu baris sejajar (misal: "100+ Proyek") sesuai gambar */}
                <div className="text-xs sm:text-sm lg:text-[15px] font-bold text-white tracking-wide text-balance md:whitespace-nowrap">
                  <span className="block lg:inline">{stat.value}</span> <span className="block lg:inline">{stat.label}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;