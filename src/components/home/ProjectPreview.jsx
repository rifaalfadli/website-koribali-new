import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';

import { projects as previewProjects } from '../../data/projects';

const ProjectPreview = () => {
  // Ambil hanya 3 proyek dari tiap kategori
  const civilProjects = previewProjects.filter(p => p.category === 'Civil Engineering').slice(0, 3);
  const itProjects = previewProjects.filter(p => p.category === 'IT & Digital Solutions').slice(0, 3);
  const dataProjects = previewProjects.filter(p => p.category === 'Data & Analytics').slice(0, 3);

  const displayProjects = [...civilProjects, ...itProjects, ...dataProjects];

  // State untuk melacak halaman yang sedang aktif
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(displayProjects.length / itemsPerPage);

  // Navigasi Slider
  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  // Mengambil 3 proyek yang sesuai dengan halaman saat ini
  const visibleProjects = displayProjects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

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

      {/* Grid Proyek (Animasi Paginasi & Height Seragam) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project) => (
          // Penambahan 'block h-full' pada Link agar grid item merentang sejajar
          <Link to={`/project/${project.id}`} key={project.id} className="group cursor-pointer block h-full">
            <div className="bg-slate-900 border border-slate-800 rounded-[1.5rem] overflow-hidden transition-all duration-300 h-full flex flex-col hover:-translate-y-1">

              <div className="aspect-[4/3] bg-slate-950 relative overflow-hidden flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/60 backdrop-blur-md text-blue-400 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-blue-900/40 uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white font-display mb-3 group-hover:text-blue-400 transition-colors leading-snug line-clamp-2">
                  {project.title}
                </h3>
                {/* flex-grow akan mendorong elemen Baca Selengkapnya ke paling bawah */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {project.shortDescription}
                </p>

                <div className="mt-auto pt-4 flex items-center text-blue-500 text-sm font-semibold group-hover:text-blue-400 transition-colors border-t border-slate-800/50">
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>

      {/* Kontrol Navigasi (Slider) */}
      <div className="flex items-center justify-center mt-12 space-x-6">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          aria-label="Proyek Sebelumnya"
          className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ${currentPage === 0
            ? 'border-slate-800 text-slate-700 cursor-not-allowed'
            : 'border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-500 hover:bg-slate-800 hover:shadow-lg hover:shadow-blue-900/20'
            }`}
        >
          <ChevronLeft className="w-6 h-6 ml-[-2px]" />
        </button>

        {/* Indikator Titik (Dots) */}
        <div className="flex space-x-3">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              aria-label={`Ke Halaman ${index + 1}`}
              className={`transition-all duration-500 rounded-full ${currentPage === index
                ? 'w-10 h-2.5 bg-blue-500'
                : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          aria-label="Proyek Selanjutnya"
          className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ${currentPage === totalPages - 1
            ? 'border-slate-800 text-slate-700 cursor-not-allowed'
            : 'border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-500 hover:bg-slate-800 hover:shadow-lg hover:shadow-blue-900/20'
            }`}
        >
          <ChevronRight className="w-6 h-6 mr-[-2px]" />
        </button>
      </div>

      {/* Tombol Mobile View */}
      <div className="mt-12 text-center md:hidden">
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