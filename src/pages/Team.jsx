import React from 'react';
import PageHero from '../components/ui/PageHero';
import CTASection from '../components/home/CTASection';

const Team = () => {
  return (
    <div>
      <PageHero
        title="Tim Kami"
        breadcrumbs={[{ label: 'Tim Kami' }]}
      />
      <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          {/* Divisi IT */}
          <div className="mb-20">
            <div className="flex items-baseline space-x-3 mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Divisi IT</h2>
              <span className="text-xs md:text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
                7 Anggota
              </span>
            </div>
            <hr className="border-slate-200 dark:border-slate-800/60 mb-10" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: 'Budi Santoso', role: 'Chief Technology Officer', image: 'https://i.pravatar.cc/150?u=budi' },
                { name: 'Siti Aminah', role: 'Senior Frontend Developer', image: 'https://i.pravatar.cc/150?u=siti' },
                { name: 'Rizky Pratama', role: 'Backend Engineer', image: 'https://i.pravatar.cc/150?u=rizky' },
                { name: 'Dewi Lestari', role: 'UI/UX Designer', image: 'https://i.pravatar.cc/150?u=dewi' },
                { name: 'Ahmad Fauzi', role: 'DevOps Engineer', image: 'https://i.pravatar.cc/150?u=ahmad' },
                { name: 'Rina Wati', role: 'QA Automation Engineer', image: 'https://i.pravatar.cc/150?u=rina' },
                { name: 'Hendra Gunawan', role: 'Data Scientist', image: 'https://i.pravatar.cc/150?u=hendra' },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="group bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="w-24 h-24 mb-5 shrink-0 rounded-full overflow-hidden border-2 border-slate-800 group-hover:border-blue-500/50 transition-colors duration-300 relative">
                    <img
                      src={member.image}
                      alt={`Foto ${member.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-semibold text-lg tracking-tight">{member.name}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divisi Civil */}
          <div>
            <div className="flex items-baseline space-x-3 mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Divisi Civil</h2>
              <span className="text-xs md:text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
                10 Anggota
              </span>
            </div>
            <hr className="border-slate-200 dark:border-slate-800/60 mb-10" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: 'Ir. Wahyu Hidayat', role: 'Head of Civil Engineering', image: 'https://i.pravatar.cc/150?u=wahyu' },
                { name: 'Rahmat Hidayatullah', role: 'Structural Engineer', image: 'https://i.pravatar.cc/150?u=rahmat' },
                { name: 'Maya Safira', role: 'Project Manager', image: 'https://i.pravatar.cc/150?u=maya' },
                { name: 'Dwi Prasetyo', role: 'Geotechnical Engineer', image: 'https://i.pravatar.cc/150?u=dwi' },
                { name: 'Nia Ramadhani', role: 'Architect', image: 'https://i.pravatar.cc/150?u=nia' },
                { name: 'Fajar Nugroho', role: 'Quantity Surveyor', image: 'https://i.pravatar.cc/150?u=fajar' },
                { name: 'Linda Purnama', role: 'Drafter CAD', image: 'https://i.pravatar.cc/150?u=linda' },
                { name: 'Eko Susanto', role: 'Site Inspector', image: 'https://i.pravatar.cc/150?u=eko' },
                { name: 'Sri Mulyani', role: 'Environmental Engineer', image: 'https://i.pravatar.cc/150?u=sri' },
                { name: 'Aditya Firmansyah', role: 'Civil Estimator', image: 'https://i.pravatar.cc/150?u=aditya' },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="group bg-slate-900/50 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/20"
                >
                  <div className="w-24 h-24 mb-5 shrink-0 rounded-full overflow-hidden border-2 border-slate-800 group-hover:border-blue-500/50 transition-colors duration-300 relative">
                    <img
                      src={member.image}
                      alt={`Foto ${member.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg tracking-tight">{member.name}</h3>
                    <p className="text-slate-400 text-sm mt-1">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Team;