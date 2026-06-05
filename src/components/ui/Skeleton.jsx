import React from 'react';

const Skeleton = ({ className = '', ...props }) => {
  return (
    <div 
      className={`bg-slate-800 animate-pulse rounded-xl ${className}`}
      {...props}
    />
  );
};

export default Skeleton;
