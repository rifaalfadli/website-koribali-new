import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';

const previewProjects = [
  // 1. MEWAKILI LAYANAN: Civil Engineering
  {
    id: 'civil-pole-design',
    category: 'Civil Engineering',
    title: 'Desain & Kalkulasi Struktur Smart Pole',
    shortDescription: 'Perancangan gambar kerja 2D/3D dan laporan kalkulasi beban mekanis untuk kebutuhan infrastruktur jalan tol yang terverifikasi.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  // 2. MEWAKILI LAYANAN: IT & Digital Solutions (Termasuk Integrasi Inventor)
  {
    id: 'it-inventor-integration',
    category: 'IT & Digital Solutions',
    title: 'Web App & Otomatisasi Desain Parametrik',
    shortDescription: 'Pengembangan sistem web custom yang terintegrasi langsung dengan Autodesk Inventor untuk men-generate model 3D secara otomatis.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  // 3. MEWAKILI LAYANAN: Data & Analytics
  {
    id: 'data-dashboard-analytics',
    category: 'Data & Analytics',
    title: 'Dashboard Analitik & Business Intelligence',
    shortDescription: 'Pembuatan dashboard interaktif berbasis web untuk memvisualisasikan data operasional menjadi wawasan bisnis yang akurat dan real-time.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];

const ProjectPreview = () => {
  return (
    <SectionWrapper className="bg-slate-950">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <SectionHeading
          title="Project Unggulan"
          description="Karya nyata kami dalam menjembatani rekayasa infrastruktur fisik dan solusi sistem digital."
          className="mb-6 md:mb-0"
        />
        <Link to="/project" className="hidden md:block">
          <Button variant="ghost" className="group">
            Lihat Semua Project
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {previewProjects.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id} className="group cursor-pointer">
            <div className="bg-slate-900 border border-slate-800 rounded-[1.5rem] overflow-hidden transition-all duration-300 h-full flex flex-col hover:-translate-y-1">

              <div className="aspect-[4/3] bg-slate-950 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/60 backdrop-blur-md text-red-400 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-red-900/40 uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white font-display mb-3 group-hover:text-red-400 transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.shortDescription}
                </p>

                <div className="mt-auto flex items-center text-red-500 text-sm font-semibold group-hover:text-red-400 transition-colors">
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center md:hidden">
        <Link to="/project">
          <Button variant="secondary" className="w-full">
            Lihat Semua Project
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default ProjectPreview;