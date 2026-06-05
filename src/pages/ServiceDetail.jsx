import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { services } from '../data/services';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionWrapper from '../components/ui/SectionWrapper';
import ProjectPreview from '../components/home/ProjectPreview';
import CTASection from '../components/home/CTASection';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{service.title} | Koribali</title>
        <meta name="description" content={service.shortDescription} />
      </Helmet>

      <div className="pt-10">
        <SectionWrapper className="pb-10">
          <Breadcrumb items={[{ label: 'Layanan', href: '/layanan' }, { label: service.title }]} />
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-10">
              {service.description}
            </p>
          </div>
        </SectionWrapper>

        {/* Content Section */}
        <SectionWrapper className="pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6">Lingkup Pekerjaan</h2>
              <div className="space-y-4 mb-12">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex p-4 bg-slate-900/50 rounded-xl border border-slate-800/50">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-4 flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">Mekanisme & Output</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Kami menerapkan metodologi standar industri dengan quality control berlapis. Setiap fase pekerjaan didokumentasikan secara rinci, memberikan transparansi penuh kepada klien.
              </p>
              <p className="text-slate-400 leading-relaxed mb-12">
                Hasil akhir (output) yang diserahkan tidak hanya berupa produk jadi, tetapi juga menyertakan dokumen teknis, kalkulasi engineering, source code (untuk proyek IT), dan manual book komprehensif.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">Output</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Laporan Perhitungan (PDF)',
                  'File Desain Asli (DWG, IPT)',
                  'Model 3D (SKP, IAM)',
                  'Gambar Render HD',
                  'Bill of Quantity (Excel)'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center p-4 bg-slate-900/30 rounded-xl border border-slate-800/50">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center mr-3 text-cyan-400">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-4">Tech Stack & Tools</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tools.map((tool, idx) => (
                    <span key={idx} className="bg-slate-800 text-cyan-400 border border-cyan-500/20 text-sm px-3 py-1.5 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5">
                  <h4 className="font-semibold text-cyan-400 mb-2">Konsultasi Gratis</h4>
                  <p className="text-sm text-slate-400 mb-4">Diskusikan kebutuhan spesifik Anda dengan tim spesialis kami.</p>
                  <a href="/kontak" className="inline-flex items-center text-sm font-medium text-white hover:text-cyan-400 transition-colors">
                    Hubungi Sekarang <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <div className="border-t border-slate-800 mt-10 pt-10">
          <ProjectPreview />
        </div>
        <CTASection />
      </div>
    </>
  );
};

export default ServiceDetail;
