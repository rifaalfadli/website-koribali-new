import React from 'react';
import { Helmet } from 'react-helmet-async';
import { partners } from '../data/partners';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionHeading from '../components/ui/SectionHeading';
import SectionWrapper from '../components/ui/SectionWrapper';
import CTASection from '../components/home/CTASection';

const Partners = () => {
  return (
    <>
      <Helmet>
        <title>Mitra Kami | Koribali</title>
        <meta name="description" content="Koribali telah dipercaya oleh berbagai perusahaan dan institusi sebagai mitra strategis dalam pengembangan infrastruktur dan sistem digital." />
      </Helmet>

      <div className="pt-10">
        <SectionWrapper className="pb-12">
          <Breadcrumb items={[{ label: 'Mitra' }]} />
          <SectionHeading 
            title="Mitra Kami" 
            description="Kami bangga telah bekerja sama dengan berbagai organisasi terkemuka untuk membangun solusi yang berdampak."
          />
        </SectionWrapper>

        {/* Partners Grid */}
        <SectionWrapper className="pt-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <div 
                key={partner.id} 
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex items-center justify-center transition-all duration-300 hover:bg-slate-800 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
                />
              </div>
            ))}
          </div>
        </SectionWrapper>

        <CTASection />
      </div>
    </>
  );
};

export default Partners;
