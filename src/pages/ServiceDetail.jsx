import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MessageCircle } from 'lucide-react';
import { services } from '../data/services';
import SectionWrapper from '../components/ui/SectionWrapper';
import ProjectPreview from '../components/home/ProjectPreview';
import CTASection from '../components/home/CTASection';
import PageHero from '../components/ui/PageHero';
import ClientSlider from '../components/home/ClientSlider';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TechStack from '../components/home/TechStack';
import TestimonialPreview from '../components/home/TestimonialPreview';
import HowWeWork from '../components/home/HowWeWork';
import RelatedProjects from '../components/home/RelatedProjects';
import Button from '../components/ui/Button';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => {
    if (s.id === slug) return true;
    if (slug === 'civil-engineering' && s.id === 'civil-endineering') return true;
    if (slug === 'civil' && s.id === 'civil-endineering') return true;
    if (slug === 'it' && s.id === 'it-solutions') return true;
    if (slug === 'data' && s.id === 'data-analytics') return true;
    return false;
  });

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{service.title} | Koribali</title>
        <meta name="description" content={service.shortDescription} />
      </Helmet>

      {/* Hero Section */}
      <PageHero
        title={service.title}
        breadcrumbs={[{ label: 'Layanan', href: '/layanan' }, { label: service.tag }]}
      />

      <div className="pt-8 md:pt-16 pb-10 bg-white dark:bg-slate-950">
        <SectionWrapper className="pt-0">

          {/* LAYOUT UTAMA: Konten Kiri, Gambar Kanan */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Kiri: Deskripsi & Keuntungan */}
            <div className="lg:col-span-7 flex flex-col">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white font-display mb-4 leading-tight">
                {service.title}
              </h2>

              <h3 className="text-lg md:text-xl font-semibold text-blue-500 mb-8 leading-snug">
                {service.subtitle}
              </h3>

              <div className="space-y-5 text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                {service.longDescription?.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 mb-6">
                {service.benefits?.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>

              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-10">
                {service.closingText}
              </p>

              {/* Tombol CTA */}
              <div>
                <Link to="/kontak">
                  <Button variant="primary" className="gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Konsultasi Sekarang
                  </Button>
                </Link>
              </div>
            </div>

            {/* Kanan: Gambar Representatif dengan Efek Frame */}
            <div className="lg:col-span-5 relative">
              {/* Dekorasi Latar Belakang Gambar */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-slate-800 rounded-3xl transform translate-x-4 translate-y-4 -z-10" />

              <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl relative z-10">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto object-cover aspect-[4/5] md:aspect-square lg:aspect-[4/5] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/10 pointer-events-none" />
              </div>
            </div>
          </div>

        </SectionWrapper>

        <RelatedProjects category={service.tag} />
        <HowWeWork />
        <ClientSlider />
        <WhyChooseUs />
        <TechStack />
        <ProjectPreview />
        <TestimonialPreview />
        <CTASection />
      </div>
    </>
  );
};

export default ServiceDetail;