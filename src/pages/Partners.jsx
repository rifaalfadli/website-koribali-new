import React from 'react';
import { Helmet } from 'react-helmet-async';
import { partners } from '../data/partners';
import SectionWrapper from '../components/ui/SectionWrapper';
import CTASection from '../components/home/CTASection';
import PageHero from '../components/ui/PageHero';

const Partners = () => {
  return (
    <>
      <Helmet>
        <title>Mitra Kami | Koribali</title>
        <meta name="description" content="Koribali telah dipercaya oleh berbagai perusahaan dan institusi sebagai mitra strategis dalam pengembangan infrastruktur dan sistem digital." />
      </Helmet>

      <PageHero
        title="Mitra Kami"
        description="Kami bangga telah bekerja sama dengan berbagai organisasi terkemuka untuk membangun solusi yang berdampak."
        breadcrumbs={[{ label: 'Mitra' }]}
      />

      <div className="pt-10 bg-white dark:bg-slate-950">

        {/* Partners Grid */}
        <SectionWrapper className="pt-0 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full h-auto opacity-50 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
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