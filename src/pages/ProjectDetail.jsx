import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { projects } from '../data/projects';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionWrapper from '../components/ui/SectionWrapper';
import CTASection from '../components/home/CTASection';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Koribali</title>
        <meta name="description" content={project.shortDescription} />
      </Helmet>

      <div className="pt-10">
        <SectionWrapper className="pb-10">
          <Breadcrumb items={[{ label: 'Project', href: '/project' }, { label: project.title }]} />
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span>{project.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-display leading-tight">
              {project.title}
            </h1>
          </div>

          {/* Hero Image */}
          <div className="w-full aspect-video md:aspect-[21/9] bg-slate-800 rounded-3xl overflow-hidden mb-16 shadow-2xl border border-slate-700">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6">Deskripsi Proyek</h2>
              <div className="text-slate-300 space-y-6 leading-relaxed text-lg">
                <p>{project.description}</p>
                <p>
                  Proses implementasi dilakukan dengan mengedepankan prinsip keandalan dan skalabilitas. Setiap tahapan diuji coba melalui serangkaian quality assurance, memastikan bahwa solusi yang diberikan benar-benar menjawab permasalahan klien di lapangan.
                </p>
                <p>
                  Keberhasilan proyek ini tidak lepas dari kolaborasi erat antara tim engineering dan klien. Dengan metodologi pengembangan yang terstruktur, Koribali berhasil deliver on-time dengan hasil yang melampaui ekspektasi.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sticky top-24">
                <h3 className="text-lg font-bold text-white mb-6 border-b border-slate-800 pb-4">Info Proyek</h3>
                
                <div className="mb-8">
                  <h4 className="text-sm text-slate-500 mb-3 uppercase tracking-wider font-semibold">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="bg-slate-800 text-slate-300 border border-slate-700 text-xs px-3 py-1.5 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm text-slate-500 mb-3 uppercase tracking-wider font-semibold">Fitur Utama</h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <CTASection />
      </div>
    </>
  );
};

export default ProjectDetail;
