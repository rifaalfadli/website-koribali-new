import React from 'react';
import { motion } from 'framer-motion';

const VisiMisi = ({ noBg = false }) => {
  return (
    <div className={`w-full py-20 ${noBg ? '' : 'bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-900'}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 md:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      </motion.div>
    </div>
  );
};

export default VisiMisi;
