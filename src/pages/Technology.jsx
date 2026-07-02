import React from 'react';
import PageHero from '../components/ui/PageHero';

const Technology = () => {
  return (
    <div>
      <PageHero
        title="Teknologi"
        breadcrumbs={[{ label: 'Teknologi' }]}
      />
      <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-10 rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
            <img
              src="/images/tech_infrastructure_1780889206291.png"
              alt="Teknologi dan Infrastruktur Koribali"
              className="w-full h-64 md:h-[400px] lg:h-[500px] object-cover object-center"
            />
          </div>

          <div className="text-slate-600 dark:text-slate-300 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Infrastruktur & Teknologi Kori Bali</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>

            <p>
              Di Kori Bali, kami menggabungkan kecanggihan rekayasa perangkat lunak dengan presisi rekayasa sipil. Teknologi yang kami gunakan dipilih secara ketat untuk memberikan solusi yang akurat, aman, dan dapat diskalakan—baik untuk digitalisasi bisnis Anda maupun keamanan struktur fisik Anda.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">1. Teknologi Analitik Data & Kecerdasan Buatan (AI)</h3>
            <p>
              Kami mengadopsi model bahasa skala besar (LLM) dan arsitektur analitik data modern untuk mengubah data mentah perusahaan Anda menjadi wawasan visual (insight) yang cerdas. 
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-500 dark:text-slate-400">
              <li>Pemrosesan Data Skala Besar (Pandas, NumPy)</li>
              <li>Integrasi AI & LLM untuk Otomatisasi Keputusan</li>
              <li>Visualisasi Data Interaktif secara Real-time</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">2. Rekayasa Struktur & Pemodelan 3D (Pole)</h3>
            <p>
              Untuk divisi engineering kami, presisi adalah segalanya. Kami menggunakan perangkat lunak (software) standar industri untuk memastikan setiap rancangan tiang (pole) yang kami buat telah lolos uji keamanan secara virtual sebelum dieksekusi di lapangan.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-500 dark:text-slate-400">
              <li>Drafting & Pemodelan 2D/3D Presisi Tinggi</li>
              <li>Simulasi Analisis Beban (Angin, Gravitasi, dan Beban Dinamis)</li>
              <li>Kalkulasi Kelayakan Struktur & Verifikasi Keamanan (OK/NG)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">3. Pengembangan Sistem Web & Arsitektur Cloud</h3>
            <p>
              Infrastruktur digital Anda didukung oleh teknologi web terkini seperti React, Node.js, dan Python, dipadukan dengan database handal untuk mendigitalisasi proses bisnis yang sebelumnya serba manual. Sistem kami dirancang untuk cepat, responsif, dan mudah di-maintain.
            </p>
          </div>
        </div>
      </section>

          </div>
  );
};

export default Technology;
