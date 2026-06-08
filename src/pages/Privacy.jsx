import React from 'react';
import PageHero from '../components/ui/PageHero';
import CTASection from '../components/home/CTASection';

const Privacy = () => {
  return (
    <div>
      <PageHero
        title="Kebijakan Privasi"
        breadcrumbs={[{ label: 'Kebijakan Privasi' }]}
      />
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-10 rounded-xl overflow-hidden shadow-2xl border border-slate-800">
            <img
              src="/images/privacy_policy_1780889220898.png"
              alt="Kebijakan Privasi Koribali"
              className="w-full h-64 md:h-[400px] lg:h-[500px] object-cover object-center"
            />
          </div>

          <div className="text-slate-300 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Kebijakan Privasi WAN Teknologi Internasional</h2>
              <p className="text-sm text-slate-400 mb-8">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>

            <p>
              Kebijakan Privasi ini menjelaskan bagaimana WAN Teknologi Internasional ("Perusahaan", "Kami") mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan layanan dan situs web kami. Kami berkomitmen penuh untuk menjaga privasi dan keamanan data Anda.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Informasi yang Kami Kumpulkan</h3>
            <p>
              Kami dapat mengumpulkan informasi pribadi seperti nama, alamat email, nomor telepon, dan informasi perusahaan saat Anda berinteraksi dengan layanan kami, mengisi formulir kontak, atau berlangganan buletin kami. Kami juga dapat mengumpulkan data teknis seperti alamat IP dan jenis browser.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Penggunaan Informasi</h3>
            <p>
              Informasi yang dikumpulkan digunakan untuk:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-400">
              <li>Menyediakan dan meningkatkan layanan kami.</li>
              <li>Berkomunikasi dengan Anda terkait layanan, pembaruan, atau dukungan teknis.</li>
              <li>Menganalisis penggunaan situs web untuk meningkatkan pengalaman pengguna.</li>
              <li>Memenuhi kewajiban hukum yang berlaku.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Keamanan Data</h3>
            <p>
              Kami menerapkan langkah-langadas keamanan teknis dan organisasi yang ketat, termasuk enkripsi data dan kontrol akses, untuk melindungi informasi pribadi Anda dari akses yang tidak sah, pengungkapan, perubahan, atau penghancuran.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
};

export default Privacy;
