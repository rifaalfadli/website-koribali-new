import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle } from 'lucide-react';
import { projects } from '../data/projects';
import SectionWrapper from '../components/ui/SectionWrapper';
import CTASection from '../components/home/CTASection';
import PageHero from '../components/ui/PageHero';

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

      <PageHero
        title={project.title}
        description={`Kategori: ${project.category}`}
        breadcrumbs={[{ label: 'Project', href: '/project' }, { label: project.title }]}
      />

      <div className="pt-10 bg-white dark:bg-slate-950">
        <SectionWrapper className="pb-10">

          {/* Hero Image dengan aksen Deep Blue */}
          <div className="w-full aspect-video md:aspect-[21/9] bg-slate-100 dark:bg-slate-900 rounded-3xl overflow-hidden mb-16 shadow-2xl border border-slate-200 dark:border-slate-800 relative group">
            <div className="absolute inset-0 bg-blue-900/20 blur-3xl rounded-full transform scale-150 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover relative z-10"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 font-display border-l-4 border-blue-500 pl-4">Deskripsi Proyek</h2>
              <div className="text-slate-600 dark:text-slate-400 space-y-6 leading-relaxed text-base md:text-lg">
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
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 sticky top-28 shadow-xl">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">Info Proyek</h3>

                <div className="mb-8">
                  <h4 className="text-sm text-slate-500 mb-3 uppercase font-semibold">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map((tech, idx) => (
                      <span key={idx} className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full hover:border-blue-500/50 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm text-slate-500 mb-3 uppercase font-semibold">Fitur Utama</h4>
                  <ul className="space-y-3">
                    {project.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-950/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80 hover:border-blue-300 dark:hover:border-blue-900/50 hover:bg-white dark:hover:bg-slate-900/80 transition-all">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="font-medium">{feature}</span>
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