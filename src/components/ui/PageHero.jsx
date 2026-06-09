import React from 'react';
import { Link } from 'react-router-dom';

const PageHero = ({ title, description, breadcrumbs }) => {
  return (
    // 1. Ubah bg utama menjadi slate-900 agar satu tingkat lebih terang dari konten bawahnya
    <div className="relative bg-slate-900 pt-28 pb-20 md:pt-24 md:pb-32 overflow-hidden border-b border-slate-800">

      {/* 2. Background Image: Naikkan opacity ke 40% dan ganti ke mix-blend-overlay agar warna asli gambar sedikit membaur cerah */}
      <div
        className="absolute inset-0 opacity-50 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* 3. Gradasi: Gunakan blue-900/50 di atas agar birunya lebih 'menyala', memudar ke slate-950 di bawah agar menyatu dengan section selanjutnya */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/30 via-slate-900/70 to-slate-950 pointer-events-none" />

      {/* Tambahan: Glow effect radial di tengah agar teks lebih terbaca dan pop-up */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white font-display mb-6 leading-tight tracking-tight drop-shadow-lg">
          {title}
        </h1>
        {description && (
          <p className="text-sm md:text-base text-slate-200 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow">
            {description}
          </p>
        )}

        {/* Centered Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="flex items-center justify-center space-x-2.5 text-xs md:text-sm font-medium">
            <Link to="/" className="text-slate-300 hover:text-blue-400 transition-colors">
              Beranda
            </Link>
            {breadcrumbs.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="text-slate-500">/</span>
                {item.href ? (
                  <Link to={item.href} className="text-slate-300 hover:text-blue-400 transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-blue-400 font-bold drop-shadow-md">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHero;