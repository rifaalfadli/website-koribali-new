import React from "react";
import { Helmet } from "react-helmet-async";
import ServicesSection from "../components/home/ServicesSection";
import ProjectPreview from "../components/home/ProjectPreview";
import CTASection from "../components/home/CTASection";
import PageHero from "../components/ui/PageHero";
import ClientSlider from "../components/home/ClientSlider";
import WhyChooseUs from "../components/home/WhyChooseUs";
import TechStack from "../components/home/TechStack";
import TestimonialPreview from "../components/home/TestimonialPreview";
import HowWeWork from "../components/home/HowWeWork";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Layanan | Koribali</title>
        <meta
          name="description"
          content="Layanan Koribali meliputi teknik sipil, IT solutions, web app tools, dan data AI."
        />
      </Helmet>

      <PageHero
        title="Layanan Kami"
        description="Sinergi rekayasa sipil, inovasi digital, dan analitik data. Kami menghadirkan solusi terintegrasi untuk mentransformasi infrastruktur dan efisiensi bisnis Anda."
        breadcrumbs={[{ label: "Layanan" }]}
      />

      <div className="pt-10">
        {/* Services Grid */}
        <ServicesSection showHeader={false} />

        <HowWeWork />
        <WhyChooseUs />
        <ClientSlider />
        <TechStack />
        <ProjectPreview />
        <TestimonialPreview />
        <CTASection />
      </div>
    </>
  );
};

export default Services;
