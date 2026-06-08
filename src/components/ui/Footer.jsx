import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { company } from '../../data/company';
import { Globe, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    // Padding top (pt-40 md:pt-48) ditambahkan khusus agar tidak tertutup CTA Section
    <footer className="bg-black border-t border-slate-700/50 pt-44 pb-8 relative overflow-hidden">

      {/* Efek Garis Halus Latar Belakang (Opsional: untuk meniru tekstur gelombang pada gambar referensi) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Layout 4 Kolom mirip referensi gambar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">

          {/* Kolom 1: Brand & Deskripsi (Dibuat sedikit lebih lebar - col-span-4) */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/logo-koribali.png"
                alt="Koribali Logo"
                className="h-12 w-12 object-contain"
              />
              <h3 className="text-2xl font-bold font-display text-white">
                KORIBALI
              </h3>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Konsultan infrastruktur fisik dan IT profesional yang membantu bisnis mengembangkan solusi terintegrasi, aman, dan scalable untuk mendukung pertumbuhan dan transformasi teknologi Anda.
            </p>

            {/* Ikon Sosial Media (Solid background membulat seperti di referensi) */}
            {/* Ikon Sosial Media diperbaiki agar lebih aman dari undefined error */}
            <div className="flex space-x-4">
              <a href={company.socials?.instagram ?? '#'} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-red-950 hover:text-red-400 hover:border-red-900/50 transition-all">
                <Mail className="w-4 h-4" />
              </a>
              <a href={company.socials?.facebook ?? '#'} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-red-950 hover:text-red-400 hover:border-red-900/50 transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href={company.socials?.linkedin ?? '#'} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-red-950 hover:text-red-400 hover:border-red-900/50 transition-all">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Kolom 2: Perusahaan (col-span-2) */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-6">Perusahaan</h4>
            <ul className="space-y-4">
              <li><Link to="/tentang-kami" className="text-slate-400 text-sm hover:text-red-400 transition-colors">Tentang Kami</Link></li>
              <li><Link to="/project" className="text-slate-400 text-sm hover:text-red-400 transition-colors">Portofolio & Project</Link></li>
              <li><Link to="/tim-kami" className="text-slate-400 text-sm hover:text-red-400 transition-colors">Tim Kami</Link></li>
              <li><Link to="/teknologi" className="text-slate-400 text-sm hover:text-red-400 transition-colors">Teknologi & Infrastruktur</Link></li>
              <li><Link to="/privasi" className="text-slate-400 text-sm hover:text-red-400 transition-colors">Kebijakan Privasi</Link></li>
              <li><Link to="/syarat" className="text-slate-400 text-sm hover:text-red-400 transition-colors">Syarat & Ketentuan</Link></li>
              <li><Link to="/mitra" className="text-slate-400 text-sm hover:text-red-400 transition-colors">Klien & Kemitraan</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Layanan Kami (col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-6">Layanan Kami</h4>
            <ul className="space-y-4">
              <li><Link to="/layanan/civil-endineering" className="text-slate-400 text-sm hover:text-red-400 transition-colors">Desain Teknik & Rekayasa Struktur Profesional</Link></li>
              <li><Link to="/layanan/it-solutions" className="text-slate-400 text-sm hover:text-red-400 transition-colors">Pengembangan Sistem Web & Aplikasi Custom</Link></li>
              <li><Link to="/layanan/data-analytics" className="text-slate-400 text-sm hover:text-red-400 transition-colors">Analisis Data & Dashboard Business Intelligence</Link></li>
            </ul>
          </div>

          {/* Kolom 4: Informasi (col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-6">Informasi</h4>
            <ul className="space-y-4">
              <li><Link to="/insight" className="text-slate-400 text-sm hover:text-red-400 transition-colors">Blog & Insight</Link></li>
              {/* <li><Link to="/karir" className="text-slate-400 text-sm hover:text-red-400 transition-colors">Karir</Link></li>
              <li><Link to="/magang" className="text-slate-400 text-sm hover:text-red-400 transition-colors">Program Magang</Link></li> */}
              <li><Link to="/kontak" className="text-slate-400 text-sm hover:text-red-400 transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>
        </div>

        {/* Bagian Bawah (Copyright) */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Koribali. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/kontak" className="hover:text-slate-300 transition-colors">Support</Link>
            <Link to="/faq" className="hover:text-slate-300 transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;