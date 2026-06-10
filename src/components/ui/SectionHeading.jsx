import React from 'react';

const SectionHeading = ({ title, description, className = '' }) => {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white font-display">
        {title}
      </h2>
      {description && (
        <p className="text-slate-500 dark:text-slate-400 mt-3 text-base md:text-lg max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
