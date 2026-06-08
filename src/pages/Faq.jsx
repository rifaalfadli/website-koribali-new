import React from 'react';
import PageHero from '../components/ui/PageHero';
import CTASection from '../components/home/CTASection';

const Faq = () => {
  return (
    <div>
      <PageHero
        title="FAQ"
        breadcrumbs={[{ label: 'FAQ' }]}
      />
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-10 rounded-xl overflow-hidden shadow-2xl border border-slate-800">
            <img
              src="/images/faq_support_1780889246980.png"
              alt="FAQ Koribali"
              className="w-full h-64 md:h-[400px] lg:h-[500px] object-cover object-center"
            />
          </div>

          <div className="text-slate-300 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Pertanyaan yang Sering Diajukan (FAQ)</h2>
              <p className="text-sm text-slate-400 mb-8">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">1. Apa saja layanan utama yang ditawarkan oleh Koribali?</h3>
                <p className="text-slate-400">
                  Kami menyediakan layanan terintegrasi yang mencakup desain rekayasa struktur, pengembangan perangkat lunak khusus, dan analitik data cerdas. Kami berfokus pada penggabungan infrastruktur fisik dengan solusi digital.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2. Bagaimana cara memulai kerja sama proyek dengan Koribali?</h3>
                <p className="text-slate-400">
                  Anda dapat menghubungi kami melalui halaman Kontak atau email langsung ke tim sales kami. Kami akan menjadwalkan sesi konsultasi awal untuk memahami kebutuhan Anda dan menyusun proposal teknis.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">3. Apakah Koribali melayani klien di luar wilayah operasional utama?</h3>
                <p className="text-slate-400">
                  Ya, dengan infrastruktur cloud dan sistem kolaborasi modern, kami dapat menangani proyek dan melayani klien baik secara nasional maupun internasional tanpa hambatan geografis.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">4. Bagaimana proses dukungan purna jual (after-sales support) bekerja?</h3>
                <p className="text-slate-400">
                  Setiap proyek yang kami selesaikan dilengkapi dengan garansi layanan dan opsi kontrak pemeliharaan (maintenance contract) berjangka panjang. Tim dukungan kami siap membantu menangani perbaikan bug, pembaruan, dan optimasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
};

export default Faq;
