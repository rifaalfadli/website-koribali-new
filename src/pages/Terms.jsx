import React from 'react';
import PageHero from '../components/ui/PageHero';

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
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Kori Bali</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Terakhir diperbarui: 1 Januari 2026</p>
            </div>

            <p>
              Syarat & Ketentuan ini mengatur penggunaan website dan layanan yang disediakan oleh Kori Bali ("Perusahaan", "Kami"). Dengan mengakses website atau menggunakan layanan kami, Anda menyatakan telah membaca, memahami, dan menyetujui seluruh ketentuan yang tercantum dalam dokumen ini.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">1. Ruang Lingkup Layanan</h3>
            <p>
              Kori Bali menyediakan layanan konsultasi teknologi terpadu, secara spesifik meliputi:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-500 dark:text-slate-400">
              <li>Konsultasi teknologi desain dan rekayasa struktur tiang (pole)</li>
              <li>Pemodelan 2D/3D dan kalkulasi verifikasi kelayakan struktur</li>
              <li>Transformasi digital operasional bisnis berbasis aplikasi web custom</li>
              <li>Implementasi kecerdasan buatan (LLM) dan analitik data</li>
            </ul>
            <p className="mt-4">
              Detail ruang lingkup, spesifikasi teknis, serta tingkat keamanan atau toleransi risiko dari setiap proyek akan diatur secara spesifik dalam proposal atau dokumen kontrak terpisah yang disepakati oleh kedua belah pihak.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">2. Kewajiban Pengguna</h3>
            <p>
              Anda setuju untuk menggunakan layanan kami hanya untuk tujuan yang sah. Anda dilarang melakukan aktivitas yang dapat merusak, melumpuhkan, atau membebani server atau jaringan kami.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">3. Hak Kekayaan Intelektual</h3>
            <p>
              Semua konten, desain, logo, dan teknologi yang dikembangkan oleh Kami tetap menjadi hak milik intelektual Kori Bali kecuali disepakati lain dalam perjanjian tertulis.
            </p>
          </div>
        </div>
      </section>
          </div>
  );
};

export default Terms;
