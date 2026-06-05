import React from 'react';
import { AlertCircle } from 'lucide-react';
import Button from './Button';

const ErrorState = ({ title = 'Terjadi Kesalahan', message = 'Gagal memuat data.', onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center border border-red-900/30 rounded-2xl bg-red-950/10">
      <AlertCircle className="w-16 h-16 text-red-500/50 mb-4" strokeWidth={1.5} />
      <h3 className="text-xl font-medium text-red-400 mb-2">{title}</h3>
      <p className="text-slate-400 max-w-sm mb-6">{message}</p>
      {onRetry && (
        <Button variant="secondary" onClick={onRetry}>
          Coba Lagi
        </Button>
      )}
    </div>
  );
};

export default ErrorState;
