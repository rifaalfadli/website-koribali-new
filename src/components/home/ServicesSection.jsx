import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

import { services } from '../../data/services';
const ServicesSection = ({ showHeader = true }) => {
  return (
    <div id="services" className="text-white">

      {/* Section Header — hanya ditampilkan di Beranda */}
      {showHeader && (
        <div className="pt-20 md:pt-28 bg-slate-950">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4 md:px-8 text-center"
          >
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">
              Layanan Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display leading-tight tracking-tight mb-4">
              Solusi Terintegrasi untuk Setiap Kebutuhan
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto">
              Dari desain struktur hingga pengembangan sistem digital — kami menghadirkan layanan menyeluruh yang dirancang untuk mendorong pertumbuhan bisnis Anda.
            </p>
          </motion.div>
        </div>
      )}

      {services.map((service) => (
        <div
          key={service.id}
          className={`py-16 md:py-24 ${service.bgPattern ? 'bg-slate-900' : 'bg-slate-950'}`}
          style={service.bgPattern ? {
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800'%3E%3Cg fill='none' stroke='%23334155' stroke-width='1' opacity='0.4'%3E%3Cellipse cx='400' cy='400' rx='50' ry='30'/%3E%3Cellipse cx='400' cy='400' rx='100' ry='65'/%3E%3Cellipse cx='400' cy='400' rx='155' ry='105'/%3E%3Cellipse cx='400' cy='400' rx='215' ry='148'/%3E%3Cellipse cx='400' cy='400' rx='278' ry='194'/%3E%3Cellipse cx='400' cy='400' rx='345' ry='243'/%3E%3Cellipse cx='400' cy='400' rx='415' ry='295'/%3E%3Cellipse cx='400' cy='400' rx='490' ry='350'/%3E%3Cellipse cx='400' cy='400' rx='568' ry='408'/%3E%3Cellipse cx='400' cy='400' rx='650' ry='470'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '600px 600px',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
          } : undefined}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className={`flex flex-col ${service.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>

              {/* Text Content */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: service.reversed ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Warna Tag Diubah ke Biru Terang */}
                  <div className="text-blue-500 font-bold mb-3 uppercase tracking-widest text-sm">
                    {service.tag}
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display leading-[1.2] tracking-tight mb-6">
                    {service.title}
                  </h2>

                  <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        {/* Lingkaran Centang Diubah ke Tema Biru */}
                        <div className="mt-1 bg-blue-900/40 p-1 rounded-full mr-3 shrink-0">
                          <Check className="w-3.5 h-3.5 text-blue-500" strokeWidth={3} />
                        </div>
                        <span className="text-sm md:text-base text-slate-300 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tombol Diubah ke Gradasi Deep Blue */}
                  <Link to={`/layanan/${service.id}`}>
                    <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-7 py-3 rounded-full font-semibold flex items-center transition-all duration-300 group hover:-translate-y-0.5">
                      Lihat Selengkapnya
                      <div className="bg-white/10 p-1.5 rounded-full ml-3 group-hover:bg-white/20 transition-colors">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </button>
                  </Link>
                </motion.div>
              </div>

              {/* Image Content */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/40 aspect-square md:aspect-[4/3] bg-slate-800"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Efek Glow di belakang gambar diubah ke Biru Gelap */}
                  <div className={`absolute bottom-0 ${service.reversed ? 'left-0' : 'right-0'} w-40 h-40 bg-blue-900/30 blur-[50px] rounded-full pointer-events-none`} />
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;