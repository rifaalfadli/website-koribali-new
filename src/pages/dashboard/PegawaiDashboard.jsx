import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PenTool, FileText, Globe, Clock, XCircle, CheckCircle, AlertTriangle, ArrowRight, Edit } from 'lucide-react';

const myArticles = [
  { id: 1, title: 'Penerapan BIM dalam Proyek Konstruksi Modern', status: 'published', date: '2026-06-01', views: 1240 },
  { id: 2, title: 'Digitalisasi Proses Desain dengan Teknologi AI', status: 'published', date: '2026-05-20', views: 870 },
  { id: 3, title: 'Tantangan Implementasi IoT di Sektor Manufaktur', status: 'published', date: '2026-05-05', views: 530 },
  { id: 4, title: 'Strategi Adopsi Cloud untuk Perusahaan Menengah', status: 'review', date: '2026-06-10' },
  { id: 5, title: 'Peran Digital Twin dalam Pemeliharaan Infrastruktur', status: 'review', date: '2026-06-13' },
  { id: 6, title: 'Optimasi Workflow dengan Otomasi Berbasis ML', status: 'rejected', date: '2026-06-08', note: 'Konten terlalu umum, perlu diperdalam di bagian studi kasus dan tambahkan data pendukung yang lebih spesifik.' },
  { id: 7, title: 'Pengenalan Konsep Zero-Trust Security Architecture', status: 'draft', date: '2026-06-14' },
];

const statusConfig = {
  published:  { label: 'Published',         color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', icon: Globe },
  review:     { label: 'Menunggu Review',   color: 'bg-amber-500/10 text-amber-400 border-amber-500/20',   icon: Clock },
  rejected:   { label: 'Ditolak',           color: 'bg-red-500/10 text-red-400 border-red-500/20',         icon: XCircle },
  draft:      { label: 'Draft',             color: 'bg-slate-500/10 text-slate-400 border-slate-500/20',   icon: FileText },
};

const recentActivity = [
  { id: 2, title: 'Digitalisasi Proses Desain dengan Teknologi AI', type: 'approved', time: '2 hari lalu' },
  { id: 6, title: 'Optimasi Workflow dengan Otomasi Berbasis ML', type: 'rejected', time: '3 hari lalu', note: 'Konten terlalu umum, perlu diperdalam di bagian studi kasus dan tambahkan data pendukung yang lebih spesifik.' },
];

const PegawaiDashboard = () => {
  const counts = {
    total:     myArticles.length,
    published: myArticles.filter((a) => a.status === 'published').length,
    review:    myArticles.filter((a) => a.status === 'review').length,
    rejected:  myArticles.filter((a) => a.status === 'rejected').length,
  };

  return (
    <>
      <Helmet>
        <title>Dashboard | Koribali Portal</title>
      </Helmet>

      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Halo, John Engineer</h1>
          <p className="text-slate-400 text-sm">Pantau artikel dan status kiriman kamu di sini.</p>
        </div>
        <Link
          to="/dashboard/pegawai/artikel/tambah"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2.5 rounded-xl transition-colors text-sm shrink-0"
        >
          <PenTool className="w-4 h-4" />
          Tulis Artikel Baru
        </Link>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Artikel', value: counts.total, icon: FileText, color: 'text-blue-400', bg: 'bg-blue-500/10' },
          { label: 'Published', value: counts.published, icon: Globe, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
          { label: 'Menunggu Review', value: counts.review, icon: Clock, color: 'text-amber-400', bg: 'bg-amber-500/10' },
          { label: 'Ditolak', value: counts.rejected, icon: XCircle, color: 'text-red-400', bg: 'bg-red-500/10' },
        ].map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${bg} ${color} mb-3`}>
              <Icon className="w-5 h-5" />
            </div>
            <p className="text-slate-400 text-xs font-medium mb-1">{label}</p>
            <p className="text-3xl font-bold text-white">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Recent Activity — left, wider */}
        <div className="lg:col-span-3 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-800">
            <h3 className="text-base font-bold text-white">Artikel Terbaru</h3>
            <p className="text-xs text-slate-500 mt-0.5">5 artikel terakhir kamu</p>
          </div>
          <div className="divide-y divide-slate-800/50">
            {myArticles.slice(0, 5).map((article) => {
              const st = statusConfig[article.status];
              const Icon = st.icon;
              return (
                <div key={article.id} className="px-6 py-3.5 flex items-center gap-3 hover:bg-slate-800/20 transition-colors">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">{article.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {new Date(article.date).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })}
                      {article.views ? ` · ${article.views.toLocaleString('id-ID')} views` : ''}
                    </p>
                  </div>
                  <span className={`shrink-0 inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${st.color}`}>
                    <Icon className="w-3 h-3" />
                    <span className="hidden sm:inline">{st.label}</span>
                  </span>
                  <Link
                    to={`/dashboard/pegawai/artikel/edit/${article.id}`}
                    className="shrink-0 p-1.5 rounded-lg text-slate-500 hover:text-blue-400 hover:bg-blue-500/10 transition-colors"
                    title="Edit"
                  >
                    <Edit className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="px-6 py-3.5 border-t border-slate-800">
            <Link
              to="/dashboard/pegawai/artikel"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              Lihat semua artikel <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Notifications — right, narrower */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-800">
            <h3 className="text-base font-bold text-white">Update dari Admin</h3>
            <p className="text-xs text-slate-500 mt-0.5">Status terbaru kiriman kamu</p>
          </div>

          {recentActivity.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center px-6">
              <CheckCircle className="w-10 h-10 text-slate-700 mb-3" />
              <p className="text-slate-500 text-sm">Belum ada update dari admin.</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-800/50">
              {recentActivity.map((item) => (
                <div key={item.id} className="px-6 py-4">
                  <div className="flex items-start gap-3">
                    <div className={`mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      item.type === 'approved' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
                    }`}>
                      {item.type === 'approved'
                        ? <CheckCircle className="w-4 h-4" />
                        : <XCircle className="w-4 h-4" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-bold mb-0.5 ${item.type === 'approved' ? 'text-emerald-400' : 'text-red-400'}`}>
                        {item.type === 'approved' ? 'Artikel Disetujui' : 'Artikel Ditolak'}
                      </p>
                      <p className="text-sm text-slate-300 font-medium leading-snug line-clamp-2">{item.title}</p>
                      {item.note && (
                        <div className="mt-2 bg-red-500/5 border border-red-500/15 rounded-lg px-3 py-2">
                          <p className="text-xs text-slate-400 flex items-start gap-1.5 leading-relaxed">
                            <AlertTriangle className="w-3 h-3 text-red-400 shrink-0 mt-0.5" />
                            {item.note}
                          </p>
                        </div>
                      )}
                      <p className="text-[11px] text-slate-600 mt-2">{item.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PegawaiDashboard;
