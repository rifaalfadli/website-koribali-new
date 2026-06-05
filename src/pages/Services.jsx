import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { services } from '../data/services';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionHeading from '../components/ui/SectionHeading';
import SectionWrapper from '../components/ui/SectionWrapper';
import ProjectPreview from '../components/home/ProjectPreview';
import CTASection from '../components/home/CTASection';

const workSteps = [
  { step: '01', title: 'Konsultasi & Analisis', desc: 'Diskusi awal untuk memahami kebutuhan spesifik, tantangan teknis, dan target proyek Anda.' },
  { step: '02', title: 'Perencanaan & Desain', desc: 'Tim ahli kami mulai merancang solusi arsitektur, kalkulasi beban, dan blueprint sistem.' },
  { step: '03', title: 'Pengembangan & Eksekusi', desc: 'Fase konstruksi fisik atau penulisan kode software dengan kontrol kualitas yang ketat (SNI/ISO).' },
  { step: '04', title: 'Testing & Handover', desc: 'Pengujian menyeluruh sebelum serah terima, memastikan semuanya berjalan sempurna.' },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Layanan | Koribali</title>
        <meta name="description" content="Layanan Koribali meliputi teknik sipil, IT solutions, web app tools, dan data AI." />
      </Helmet>

      <div className="pt-10">
        <SectionWrapper className="pb-10">
          <Breadcrumb items={[{ label: 'Layanan' }]} />
          <SectionHeading 
            title="Layanan Kami" 
            description="Solusi rekayasa dan teknologi terintegrasi untuk mentransformasi bisnis dan infrastruktur Anda menuju efisiensi maksimal."
          />
        </SectionWrapper>

        {/* Services Grid */}
        <SectionWrapper className="pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-slate-900/50 border border-slate-700/50 rounded-3xl p-8 md:p-10 hover:border-cyan-500/30 transition-colors group">
                <h3 className="text-2xl font-bold text-white font-display mb-4">{service.title}</h3>
                <p className="text-slate-400 mb-6 min-h-[48px]">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to={`/layanan/${service.id}`} className="inline-flex items-center text-cyan-400 font-medium hover:text-cyan-300 group/link">
                  Lihat Selengkapnya 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* How We Work */}
        <SectionWrapper className="bg-slate-950/50 border-y border-slate-800">
          <SectionHeading title="Cara Kerja Kami" className="text-center flex flex-col items-center" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {workSteps.map((item, idx) => (
              <div key={idx} className="relative">
                {idx !== workSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-20 w-[calc(100%-4rem)] h-[1px] border-t-2 border-dashed border-slate-700" />
                )}
                <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-cyan-500/50 flex items-center justify-center text-xl font-bold text-cyan-400 mb-6 relative z-10 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <ProjectPreview />
        <CTASection />
      </div>
    </>
  );
};

export default Services;
