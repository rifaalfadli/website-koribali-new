import React from 'react';
import PageHero from '../components/ui/PageHero';
import CTASection from '../components/home/CTASection';

const Technology = () => {
  return (
    <div>
      <PageHero
        title="Teknologi"
        breadcrumbs={[{ label: 'Teknologi' }]}
      />
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-10 rounded-xl overflow-hidden shadow-2xl border border-slate-800">
            <img
              src="/images/tech_infrastructure_1780889206291.png"
              alt="Teknologi dan Infrastruktur Koribali"
              className="w-full h-64 md:h-[400px] lg:h-[500px] object-cover object-center"
            />
          </div>

          <div className="text-slate-300 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Infrastruktur Teknologi WAN Teknologi Internasional</h2>
              <p className="text-sm text-slate-400 mb-8">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>

            <p>
              WAN Teknologi Internasional (Koribali) mengandalkan teknologi terdepan dan infrastruktur kelas atas untuk memberikan solusi yang andal, aman, dan dapat diskalakan bagi klien kami. Kami mengintegrasikan perangkat keras generasi terbaru dengan arsitektur perangkat lunak modern untuk memastikan performa optimal.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Infrastruktur Cloud & Server</h3>
            <p>
              Kami mengelola ekosistem server hybrid dan infrastruktur cloud yang tangguh. Dengan mengutamakan redundansi dan ketersediaan tinggi (High Availability), sistem kami dirancang untuk meminimalkan waktu henti (downtime) dan memastikan kelancaran operasional bisnis klien setiap saat.
            </p>

            <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-400">
              <li>Pusat Data Bersertifikasi Tier III/IV</li>
              <li>Load Balancing & Auto-scaling</li>
              <li>Manajemen Jaringan Enterprise</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Keamanan Cyber (Cybersecurity)</h3>
            <p>
              Keamanan data adalah prioritas utama. Infrastruktur kami dilindungi oleh firewall berlapis, sistem deteksi intrusi (IDS), dan protokol enkripsi standar industri untuk melindungi aset digital klien dari ancaman siber yang terus berkembang.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Teknologi Pengembangan</h3>
            <p>
              Tim developer kami menggunakan tech stack modern seperti React, Node.js, Python, dan arsitektur microservices untuk membangun aplikasi yang cepat, responsif, dan mudah dipelihara.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Technology;
