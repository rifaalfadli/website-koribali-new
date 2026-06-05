import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionHeading from '../components/ui/SectionHeading';
import SectionWrapper from '../components/ui/SectionWrapper';
import CTASection from '../components/home/CTASection';

const categories = ['Semua', 'Teknik Sipil', 'IT & Digital', 'Project Integrasi'];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('Semua');

  const filteredProjects = activeTab === 'Semua' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <>
      <Helmet>
        <title>Project & Portofolio | Koribali</title>
        <meta name="description" content="Portofolio project Koribali meliputi pengembangan sistem terintegrasi, teknik sipil, dan IT digital." />
      </Helmet>

      <div className="pt-10">
        <SectionWrapper className="pb-8">
          <Breadcrumb items={[{ label: 'Project' }]} />
          <SectionHeading 
            title="Portofolio Project Teknik Sipil & Digital" 
            description="Kumpulan mahakarya kami dalam mewujudkan infrastruktur yang presisi dan sistem digital yang andal."
          />
        </SectionWrapper>

        {/* Filter Tabs */}
        <SectionWrapper className="pt-0 pb-12">
          <div className="flex flex-wrap gap-3 border-b border-slate-800 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === cat 
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25' 
                    : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </SectionWrapper>

        {/* Projects Grid */}
        <SectionWrapper className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProjects.map((project) => (
              <Link to={`/project/${project.id}`} key={project.id} className="group cursor-pointer">
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 h-full flex flex-col">
                  
                  <div className="aspect-video bg-slate-800 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-slate-900/80 backdrop-blur-md text-cyan-400 text-xs font-medium px-3 py-1 rounded-full border border-cyan-500/30">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white font-display mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                      {project.shortDescription}
                    </p>
                    <div className="mt-auto flex items-center text-cyan-400 text-sm font-medium">
                      Detail Project
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-slate-500 border border-slate-800 border-dashed rounded-2xl">
              Belum ada project di kategori ini.
            </div>
          )}
          
        </SectionWrapper>

        {/* Pagination Dummy */}
        {filteredProjects.length > 0 && (
          <SectionWrapper className="pt-0 pb-12">
            <div className="flex justify-center items-center space-x-2">
              <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-500 text-white font-medium shadow-lg shadow-cyan-500/25">
                1
              </button>
              <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-800/50 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors border border-slate-700/50">
                2
              </button>
              <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-800/50 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors border border-slate-700/50">
                3
              </button>
              <span className="text-slate-500 px-2">...</span>
              <button className="px-4 h-10 rounded-lg flex items-center justify-center bg-slate-800/50 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors border border-slate-700/50">
                Next <ArrowRight className="w-4 h-4 ml-2" />
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
