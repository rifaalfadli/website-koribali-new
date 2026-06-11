import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PenTool, FileText, CheckCircle } from 'lucide-react';

const PegawaiDashboard = () => {
  return (
    <>
      <Helmet>
        <title>Pegawai Dashboard | Koribali</title>
      </Helmet>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Halo, John Engineer</h1>
        <p className="text-slate-400">Selamat datang kembali di panel kerja Anda.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Quick Actions */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-6">Aksi Cepat</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="flex flex-col items-center justify-center p-6 bg-slate-950 border border-slate-800 rounded-xl hover:border-blue-500/50 hover:bg-slate-800 transition-all group">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <PenTool className="w-5 h-5" />
                </div>
                <span className="text-white font-medium">Tulis Artikel Baru</span>
              </button>
              <button className="flex flex-col items-center justify-center p-6 bg-slate-950 border border-slate-800 rounded-xl hover:border-blue-500/50 hover:bg-slate-800 transition-all group">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-white font-medium">Lihat Draft Saya</span>
              </button>
            </div>
          </div>

          {/* Recent Articles */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-6">Artikel Terakhir Anda</h3>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-950 border border-slate-800 rounded-xl">
                  <div>
                    <h4 className="text-white font-medium mb-1">Pengenalan Integrasi BIM</h4>
                    <p className="text-sm text-slate-500">Terakhir diedit: 2 hari yang lalu</p>
                  </div>
                  <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-medium border border-emerald-500/20">
                    Published
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-8">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-6">Status Profil</h3>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 mr-4"></div>
              <div>
                <h4 className="text-white font-bold">John Engineer</h4>
                <p className="text-sm text-blue-400">Civil & IT Integrator</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-slate-400">
                <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" /> Email terverifikasi
              </div>
              <div className="flex items-center text-sm text-slate-400">
                <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" /> Profil lengkap
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PegawaiDashboard;
