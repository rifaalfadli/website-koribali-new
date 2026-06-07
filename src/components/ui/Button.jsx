import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-medium transition-all duration-200";

  const variants = {
    // Diubah ke gradasi merah marun gelap (Dark Blood) dengan bayangan merah
    primary: "bg-gradient-to-r from-red-800 to-red-950 text-white hover:from-red-700 hover:to-red-900 shadow-lg shadow-red-900/30 active:scale-95",

    // Border hover dan teks diubah menjadi merah terang
    secondary: "border border-slate-600 text-slate-300 hover:border-red-500 hover:text-red-400 active:scale-95",

    // Outline dan teks merah, dengan efek background merah transparan saat di-hover
    outline: "border-2 border-red-700 text-red-500 hover:bg-red-500/10 active:scale-95",

    // Teks menyala merah saat di-hover (efek pill-shape sudah otomatis terbentuk dari baseStyle rounded-full)
    ghost: "text-slate-300 hover:text-red-400 hover:bg-slate-800/80 active:scale-95"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;