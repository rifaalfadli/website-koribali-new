import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import ClientSlider from '../components/home/ClientSlider';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TechStack from '../components/home/TechStack';
import ProjectPreview from '../components/home/ProjectPreview';
import InsightPreview from '../components/home/InsightPreview';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Koribali | Platform Desain Struktur & IT Solutions</title>
        <meta name="description" content="Koribali adalah perusahaan rekayasa sipil dan teknologi informasi yang menyediakan solusi web app, desain struktur, dan analisis data." />
      </Helmet>

      <div className="flex flex-col w-full bg-slate-950 text-white">
        <HeroSection />
        <TrustBar />
        <ClientSlider />
        <ServicesSection />
        <WhyChooseUs />
        <TechStack />
        <ProjectPreview />
        <InsightPreview />
        <CTASection />
      </div>
    </>
  );
};

export default Home;