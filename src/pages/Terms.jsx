import React from 'react';
import PageHero from '../components/ui/PageHero';
import CTASection from '../components/home/CTASection';

const Terms = () => {
  return (
    <div>
      <PageHero
        title="Syarat & Ketentuan"
        breadcrumbs={[{ label: 'Syarat & Ketentuan' }]}
      />
      <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-10 rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
            <img
              src="/images/terms_conditions_1780889233440.png"
              alt="Syarat dan Ketentuan Koribali"
              className="w-full h-64 md:h-[400px] lg:h-[500px] object-cover object-center"
            />
          </div>

          <div className="text-slate-600 dark:text-slate-300 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">WAN Teknologi Internasional</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Terakhir diperbarui: 1 Januari 2026</p>
            </div>

            <p>
              Syarat & Ketentuan ini mengatur penggunaan website dan layanan yang disediakan oleh WAN Teknologi Internasional ("Perusahaan", "Kami"). Dengan mengakses website atau menggunakan layanan kami, Anda menyatakan telah membaca, memahami, dan menyetujui seluruh ketentuan yang tercantum dalam dokumen ini.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">1. Ruang Lingkup Layanan</h3>
            <p>
              WAN Teknologi Internasional menyediakan layanan teknologi terpadu, termasuk namun tidak terbatas pada:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-500 dark:text-slate-400">
              <li>Pengembangan website dan aplikasi mobile (Android & iOS)</li>
              <li>Pengembangan sistem informasi dan enterprise system (ERP, CRM, HRIS, dll)</li>
              <li>Implementasi Artificial Intelligence dan automasi bisnis</li>
              <li>Integrasi sistem dan infrastruktur server</li>
              <li>Manajemen server, networking, dan cloud infrastructure</li>
              <li>Konsultasi IT dan transformasi digital</li>
              <li>SEO dan digital marketing</li>
            </ul>
            <p className="mt-4">
              Detail ruang lingkup setiap proyek akan diatur secara spesifik dalam proposal, kontrak, atau perjanjian kerja sama terpisah.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">2. Kewajiban Pengguna</h3>
            <p>
              Anda setuju untuk menggunakan layanan kami hanya untuk tujuan yang sah. Anda dilarang melakukan aktivitas yang dapat merusak, melumpuhkan, atau membebani server atau jaringan kami.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">3. Hak Kekayaan Intelektual</h3>
            <p>
              Semua konten, desain, logo, dan teknologi yang dikembangkan oleh Kami tetap menjadi hak milik intelektual WAN Teknologi Internasional kecuali disepakati lain dalam perjanjian tertulis.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
};

export default Terms;
