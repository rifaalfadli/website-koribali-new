import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, FileText, Activity, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Artikel', value: '24', icon: FileText, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'Total Pegawai', value: '12', icon: Users, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { label: 'Pengunjung Bulan Ini', value: '1.2k', icon: Activity, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { label: 'Pesan Masuk', value: '8', icon: TrendingUp, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  ];

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Koribali</title>
      </Helmet>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Selamat datang, Super Admin</h1>
        <p className="text-slate-400">Ringkasan aktivitas platform Koribali hari ini.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <p className="text-slate-400 text-sm font-medium mb-1">{stat.label}</p>
              <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
            </div>
          );
        })}
      </div>

      {/* Recent Activity Table Placeholder */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-800 flex justify-between items-center">
          <h3 className="text-lg font-bold text-white">Aktivitas Terbaru</h3>
          <button className="text-sm text-cyan-400 hover:text-cyan-300 font-medium">Lihat Semua</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-slate-950/50 text-slate-300 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-4">Pengguna</th>
                <th className="px-6 py-4">Aktivitas</th>
                <th className="px-6 py-4">Tanggal</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {[1, 2, 3, 4].map((i) => (
                <tr key={i} className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">John Engineer</td>
                  <td className="px-6 py-4">Memperbarui artikel "Desain Pole 3D"</td>
                  <td className="px-6 py-4">Hari ini, 10:45</td>
                  <td className="px-6 py-4">
                    <span className="bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full text-xs font-medium border border-emerald-500/20">
                      Selesai
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
