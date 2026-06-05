import React from 'react';

const Card = ({ children, className = '', hoverEffect = true, ...props }) => {
  const baseStyle = "bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-lg shadow-slate-950/50 transition-all duration-300";
  const hoverStyle = hoverEffect ? "hover:shadow-cyan-500/10 hover:border-slate-600/50 hover:scale-[1.02]" : "";

  return (
    <div className={`${baseStyle} ${hoverStyle} p-6 md:p-8 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
