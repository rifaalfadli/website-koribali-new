import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AlertCircle, Home } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Halaman Tidak Ditemukan | Koribali</title>
      </Helmet>
      
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center mb-8 relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
          <AlertCircle className="w-12 h-12 text-blue-500 relative z-10" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-white font-display mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-300 mb-4">Halaman Tidak Ditemukan</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-10 text-lg">
          Sepertinya Anda tersesat. Halaman yang Anda cari mungkin telah dihapus, diubah namanya, atau tidak pernah ada.
        </p>
        
        <Link to="/">
          <Button variant="primary" className="group">
            <Home className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
            Kembali ke Beranda
          </Button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
