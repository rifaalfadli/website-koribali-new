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
    <div className="relative z-20 -mt-14 max-w-[930px] mx-auto px-4 md:px-8">

      {/* 2. HEIGHT & ROUNDED: rounded-[40px] untuk sudut membulat seperti gambar, py-8 untuk tinggi yang proporsional */}
      <div className="bg-gradient-to-r from-red-800 to-red-950 rounded-[40px] shadow-2xl shadow-red-950/40 py-4 px-4">

        {/* 3. GRID TANPA DIVIDER: Garis pemisah (divide-x) dihapus agar clean seperti gambar referensi */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center px-2"
              >
                {/* 4. UKURAN IKON: Kembali dibesarkan (w-16 h-16) dan jarak bawah (mb-4) agar seimbang dengan text */}
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                {/* 5. TEKS SATU BARIS: Angka dan Label digabung menjadi satu baris sejajar (misal: "100+ Proyek") sesuai gambar */}
                <div className="text-sm md:text-[15px] font-bold text-white tracking-wide whitespace-nowrap">
                  {stat.value} {stat.label}
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