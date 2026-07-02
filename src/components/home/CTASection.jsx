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
      <div className="max-w-5xl mx-auto bg-slate-900 rounded-[40px] overflow-hidden relative flex flex-col md:flex-row items-center">
        {/* Konten Kiri (Teks & Tombol) */}
        <div className="w-full md:w-3/5 p-6 sm:p-8 md:p-10 relative z-10 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display mb-4 leading-tight tracking-tight">
            Perkuat Bisnismu Dengan <br className="hidden lg:block" />
            <span className="text-blue-500">Solusi Terintegrasi</span>
          </h2>
          <p className="text-slate-300 mb-8 max-w-lg text-sm md:text-base leading-relaxed">
            Dari transformasi digital dan integrasi AI hingga konsultasi
            teknologi engineering. Kami siap membantu bisnis Anda tumbuh
            lebih cerdas, efisien, dan berdaya saing tinggi.
          </p>

          <Link to="/kontak" className="w-full sm:w-auto">
            <Button
              variant="primary"
              className="w-full text-sm md:text-base px-8 py-3.5 group"
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
            src="/images/cta_hijab_invite.png"
            alt="Konsultasi Koribali"
            className="w-full h-full object-cover object-center opacity-50 mix-blend-lighten"
          />
        </div>
      </div>
    </div>
  );
};

export default CTASection;
