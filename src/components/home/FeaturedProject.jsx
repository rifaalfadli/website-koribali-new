import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CircleCheck, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const FeaturedProject = () => {
  const features = [
    'Kalkulasi beban otomatis',
    'Generate 3D model & 2D drawing',
    'Export laporan teknis PDF',
    'Manajemen data proyek'
  ];

  const techStack = ['React', 'Python', 'Autodesk Forge', 'PostgreSQL'];

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 -mt-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-slate-900/90 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 md:p-12 shadow-2xl shadow-cyan-500/20 flex flex-col md:flex-row gap-10 items-center overflow-hidden relative">
          
          {/* Subtle Glow Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />

          <div className="w-full md:w-1/2 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full mb-6">
              <span>⭐ Project Unggulan</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display leading-tight mb-4">
              Platform Kalkulasi & Desain Pole Terintegrasi
            </h2>
            
            <p className="text-slate-400 mb-8 leading-relaxed">
              Menggantikan proses manual dengan sistem otomasi penuh. Web app ini memungkinkan engineer untuk menginput parameter beban angin dan material, lalu sistem secara otomatis menghasilkan kalkulasi struktur sesuai SNI dan men-generate model 3D beserta drawing 2D melalui integrasi API Autodesk Inventor.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-slate-300">
                  <CircleCheck className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" strokeWidth={2} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {techStack.map((tech, idx) => (
                <span key={idx} className="bg-slate-800 border border-slate-700 text-slate-300 text-xs px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            <Link to="/project/pole-calc-web">
              <Button variant="primary" className="group w-full md:w-auto">
                Lihat Detail Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="w-full md:w-1/2 relative z-10 rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
              alt="Platform Dashboard Preview" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedProject;
