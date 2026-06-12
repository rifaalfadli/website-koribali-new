import React from 'react';
import PageHero from '../components/ui/PageHero';
import CTASection from '../components/home/CTASection';
import { teamMembers } from '../data/team';

const Team = () => {
  return (
    <div>
      <PageHero
        title="Tim Kami"
        description="Kenali para profesional di balik Koribali — tim ahli teknologi, AI engineer, dan konsultan engineering yang berkomitmen menghadirkan solusi terbaik untuk bisnis Anda."
        breadcrumbs={[{ label: 'Tim Kami' }]}
      />

      <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          {/* Header */}
          <div className="mb-12">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-3 block">
              Tim Koribali
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              Kenali Tim Kami
            </h2>
            <hr className="border-slate-200 dark:border-slate-800/60 mt-4" />
          </div>

          {/* Grid */}
          {teamMembers.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="group bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800/80 hover:border-blue-300 dark:hover:border-slate-700 rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 dark:hover:shadow-slate-900/40"
                >
                  {/* Photo */}
                  <div className="w-20 h-20 mb-4 shrink-0 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-700 group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-colors duration-300">
                    <img
                      src={member.image}
                      alt={`Foto ${member.name}`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  {/* Info */}
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-semibold text-sm md:text-base tracking-tight leading-tight group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {member.name}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-1 leading-snug">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 7a4 4 0 11-8 0 4 4 0 018 0zM22 12a3 3 0 11-6 0 3 3 0 016 0zM2 12a3 3 0 116 0 3 3 0 01-6 0z" />
                </svg>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-base">
                Data anggota tim akan segera ditampilkan.
              </p>
            </div>
          )}

        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Team;