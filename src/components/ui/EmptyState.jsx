import React from 'react';
import { PackageOpen } from 'lucide-react';

const EmptyState = ({ title, description, icon: Icon = PackageOpen }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center border border-slate-800 border-dashed rounded-2xl bg-slate-900/50">
      <Icon className="w-16 h-16 text-slate-600 mb-4" strokeWidth={1.5} />
      <h3 className="text-xl font-medium text-slate-300 mb-2">{title}</h3>
      <p className="text-slate-500 max-w-sm">{description}</p>
    </div>
  );
};

export default EmptyState;
