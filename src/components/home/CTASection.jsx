import React from "react";
import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import Button from "../ui/Button";

const CTASection = () => {
  return (
    // Margin negatif (-mb-24 pada mobile, -mb-32 pada desktop) adalah kunci
    // agar komponen ini "turun" dan menabrak/menimpa footer di bawahnya.
    <div className="relative w-full px-4 md:px-8 mt-20 z-20 -mb-24">
      {/* Container Utama CTA - Berbentuk kapsul/rounded besar */}
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-slate-900 via-slate-900 to-blue-600 rounded-[40px] overflow-hidden relative flex flex-col md:flex-row items-center">
        {/* Dekorasi Glow Latar Belakang */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[80px] pointer-events-none" />

        {/* Konten Kiri (Teks & Tombol) */}
        <div className="w-full md:w-3/5 p-6 sm:p-8 md:p-10 relative z-10 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display mb-4 leading-tight tracking-tight">
            Perkuat Bisnismu Dengan <br className="hidden lg:block" />
            <span className="text-blue-500">Solusi Terintegrasi</span>
          </h2>
          <p className="text-slate-300 mb-8 max-w-lg text-sm md:text-base leading-relaxed">
            Mulai dari perancangan infrastruktur fisik, otomatisasi sistem web,
            hingga wawasan analitik data cerdas. Kami siap mengoptimalkan
            efisiensi dan pertumbuhan bisnis Anda.
          </p>

          <Link to="/kontak" className="w-full sm:w-auto">
            <Button
              variant="primary"
              className="w-full text-sm md:text-base px-8 py-3.5 group shadow-blue-900/20"
            >
              Konsultasi Sekarang
              <Send className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Konten Kanan (Gambar Model/Ilustrasi) */}
        {/* Disembunyikan di layar kecil agar teks tidak terlalu sesak */}
        <div className="hidden md:block w-2/5 h-full absolute right-0 top-0">
          {/* Gradasi overlay agar gambar memudar dan menyatu halus ke warna gelap di sebelah kiri */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent z-10" />

          {/* Jika kamu punya foto tim/konsultan dengan background transparan (PNG), 
                kamu bisa mengganti link src ini dan menghapus opacity-60 */}
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Konsultan Koribali"
            className="w-full h-full object-cover object-center opacity-60 mix-blend-lighten"
          />
        </div>
      </div>
    </div>
  );
};

export default CTASection;
