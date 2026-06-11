import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import SectionWrapper from '../components/ui/SectionWrapper';
import CTASection from '../components/home/CTASection';
import PageHero from '../components/ui/PageHero';

const categories = ['Semua', 'Civil Engineering', 'IT & Digital Solutions', 'Data & Analytics'];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handleTabChange = (cat) => {
    setActiveTab(cat);
    setCurrentPage(1); // Reset page to 1 when changing tabs
  };

  const filteredProjects = activeTab === 'Semua'
    ? projects
    : projects.filter(p => p.category === activeTab);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const visibleProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Secara opsional scroll kembali ke atas daftar
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Project & Portofolio | Koribali</title>
        <meta name="description" content="Portofolio project Koribali meliputi pengembangan sistem terintegrasi, teknik sipil, dan IT digital." />
      </Helmet>

      <PageHero
        title="Portofolio Project Website, Aplikasi & Digital Marketing"
        description="Kumpulan project website, aplikasi web & mobile, serta digital marketing yang telah kami kerjakan untuk berbagai kebutuhan bisnis."
        breadcrumbs={[{ label: 'Project' }]}
      />

      <div className="pt-10 bg-white dark:bg-slate-950">

        {/* Filter Tabs */}
        <SectionWrapper className="pt-0 pb-12">
          <div className="flex flex-wrap gap-3 border-b border-slate-200 dark:border-slate-800 pb-4 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleTabChange(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${activeTab === cat
                  ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                  : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-700'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </SectionWrapper>

        {/* Projects Grid - Diubah ke Tema Biru & Deep Blue */}
        <SectionWrapper className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
            {visibleProjects.map((project) => (
              <Link to={`/project/${project.id}`} key={project.id} className="group cursor-pointer">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col">

                  {/* Image Container */}
                  <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-950 relative overflow-hidden flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                    />

                    {/* Badge Category (Pojok Kiri Atas) */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/60 backdrop-blur-md text-blue-400 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-blue-900/40 uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-3 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors leading-snug line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                      {project.shortDescription}
                    </p>

                    {/* Tombol Footer Action */}
                    <div className="mt-auto pt-4 flex items-center text-blue-500 text-sm font-semibold group-hover:text-blue-400 transition-colors border-t border-slate-200 dark:border-slate-800/50">
                      Lihat Detail Project
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>

          {/* Pesan Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-slate-500 border border-slate-200 dark:border-slate-800 border-dashed rounded-2xl bg-slate-50 dark:bg-slate-900/50">
              Belum ada project di kategori ini.
            </div>
          )}

        </SectionWrapper>

        {/* Pagination Dynamic - Diubah ke Tema Biru */}
        {totalPages > 1 && (
          <SectionWrapper className="pt-0 pb-12">
            <div className="flex justify-center items-center space-x-2">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-300 dark:border-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {Array.from({ length: totalPages }).map((_, idx) => {
                const pageNum = idx + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 border ${currentPage === pageNum
                      ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(59,130,246,0.5)] border-blue-500'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border-slate-300 dark:border-slate-800'
                      }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-300 dark:border-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </SectionWrapper>
        )}

        <CTASection />
      </div>
    </>
  );
};

export default Projects;