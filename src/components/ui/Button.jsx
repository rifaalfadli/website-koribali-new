import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-medium transition-all duration-200";

  const variants = {
    // Diubah ke gradasi biru navy gelap (Deep Blue) dengan bayangan biru
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-600/30 active:scale-95",

    // Border hover dan teks diubah menjadi biru terang
    secondary: "border border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400 active:scale-95",

    // Outline dan teks biru, dengan efek background biru transparan saat di-hover
    outline: "border-2 border-blue-700 text-blue-500 hover:bg-blue-500/10 active:scale-95",

    // Teks menyala biru saat di-hover (efek pill-shape sudah otomatis terbentuk dari baseStyle rounded-full)
    ghost: "text-slate-300 hover:text-blue-400 hover:bg-slate-800/80 active:scale-95"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;