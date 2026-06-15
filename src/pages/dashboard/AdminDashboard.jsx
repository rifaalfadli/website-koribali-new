import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Users, FileText, Activity, TrendingUp, Clock, ArrowRight, User, Tag, CheckCircle, XCircle, X, Eye, Globe, Calendar, AlertTriangle, Mail, MailOpen } from 'lucide-react';
import Button from '../../components/ui/Button';

const initialReviewArticles = [
  {
    id: 'ai-rekayasa-review',
    title: 'Penerapan AI dalam Rekayasa Teknik: Peluang dan Tantangan',
    category: 'Engineering Technology Consulting',
    author: 'Rizky Pratama',
    date: '2026-06-12',
    views: 0,
    status: 'review',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Artikel ini mengeksplorasi bagaimana teknologi kecerdasan buatan mulai merambah dunia rekayasa teknik.',
    content: `Kecerdasan buatan (AI) telah membawa perubahan signifikan di berbagai sektor industri, dan rekayasa teknik bukan pengecualian. Dalam beberapa tahun terakhir, penerapan machine learning, computer vision, dan sistem prediktif berbasis AI telah mengubah cara insinyur merancang, menguji, dan mengoperasikan infrastruktur.\n\nSalah satu peluang terbesar adalah penggunaan AI dalam simulasi struktural. Dengan model deep learning, insinyur kini dapat mensimulasikan beban dinamis pada jembatan atau gedung bertingkat dengan akurasi yang mendekati finite element analysis (FEA) konvensional, namun dalam fraksi waktu yang jauh lebih singkat.\n\nKe depan, kolaborasi antara insinyur profesional dan ilmuwan data akan menjadi kunci untuk memaksimalkan potensi AI dalam rekayasa teknik yang bertanggung jawab dan aman.`,
  },
  {
    id: 'cloud-infrastruktur',
    title: 'Membangun Infrastruktur Cloud yang Scalable untuk Startup Indonesia',
    category: 'AI Solutions & Digitalization',
    author: 'Budi Santoso',
    date: '2026-06-08',
    views: 0,
    status: 'review',
    excerpt: 'Panduan praktis membangun cloud infrastructure yang siap scale dari nol hingga ratusan ribu pengguna.',
    content: `Membangun infrastruktur cloud yang scalable sejak awal adalah investasi paling bijak yang bisa dilakukan startup teknologi Indonesia. Kesalahan arsitektur di fase awal seringkali berujung pada technical debt yang mahal dan downtime yang merusak reputasi.\n\nPertama, pahami prinsip dasar scalability: horizontal vs vertical scaling. Horizontal scaling (menambah instance) umumnya lebih cost-effective dan reliable untuk aplikasi modern dibandingkan vertical scaling (meningkatkan spesifikasi server).\n\nMulai sederhana, ukur, dan scale sesuai kebutuhan aktual—bukan kebutuhan yang dibayangkan.`,
  }
];

const recentMessages = [
  { id: 1, name: 'Andi Permana', email: 'andi.permana@example.com', subject: 'Konsultasi Aplikasi ERP', date: '2026-06-15T08:30:00', isRead: false },
  { id: 2, name: 'Dewi Kurnia', email: 'dewi.kurnia@startup.id', subject: 'Kerja Sama Proyek AI', date: '2026-06-14T14:15:00', isRead: false },
  { id: 3, name: 'PT. Bangun Sejahtera', email: 'procurement@bangunSejahtera.co.id', subject: 'Penawaran Harga BIM', date: '2026-06-13T09:00:00', isRead: true },
];

const statusConfig = {
  review: { label: 'Menunggu Review', color: 'bg-amber-500/10 text-amber-400 border-amber-500/20' }
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState(initialReviewArticles);
  const [detailArticle, setDetailArticle] = useState(null);
  const [rejectTarget, setRejectTarget] = useState(null);
  const [rejectReason, setRejectReason] = useState('');

  const stats = [
    { label: 'Total Artikel', value: '24', icon: FileText, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'Total Pegawai', value: '12', icon: Users, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { label: 'Pengunjung Bulan Ini', value: '1.2k', icon: Activity, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { label: 'Pesan Masuk', value: '8', icon: TrendingUp, color: 'text-blue-400', bg: 'bg-blue-500/10' },
  ];

  const handleApprove = (id) => {
    setArticles((prev) => prev.filter((a) => a.id !== id));
  };

  const handleRejectConfirm = () => {
    setArticles((prev) => prev.filter((a) => a.id !== rejectTarget.id));
    setRejectTarget(null);
    setRejectReason('');
  };



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

      {/* Menunggu Review + Pesan Masuk — side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Menunggu Review — wider */}
        <div className="lg:col-span-3 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white leading-tight">Menunggu Review</h3>
              <p className="text-xs text-slate-500 mt-0.5">{articles.length} artikel perlu ditinjau</p>
            </div>
            <button
              onClick={() => navigate('/dashboard/admin/artikel')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 rounded-xl transition-colors"
            >
              Kelola Artikel <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {articles.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <CheckCircle className="w-10 h-10 text-emerald-700 mb-3" />
              <p className="text-slate-400 text-sm font-medium">Semua artikel sudah ditinjau</p>
              <p className="text-slate-600 text-xs mt-1">Tidak ada artikel yang menunggu persetujuan.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[420px] text-left text-sm text-slate-400">
                <thead className="bg-slate-950/50 text-slate-300 uppercase text-xs font-semibold">
                  <tr>
                    <th className="px-4 py-3.5 w-8">No</th>
                    <th className="px-4 py-3.5">Judul</th>
                    <th className="px-4 py-3.5 hidden xl:table-cell">Penulis</th>
                    <th className="px-4 py-3.5 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {articles.slice(0, 10).map((article, index) => (
                    <tr key={article.id} className="hover:bg-slate-800/20 transition-colors">
                      <td className="px-4 py-3.5 text-slate-500 text-xs font-medium">{index + 1}</td>
                      <td className="px-4 py-3.5">
                        <p className="font-medium text-white line-clamp-2 text-sm">{article.title}</p>
                        <p className="text-xs text-slate-500 mt-0.5 xl:hidden">{article.author}</p>
                        <div className="mt-1">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium border bg-amber-500/10 text-amber-400 border-amber-500/20">
                            <Clock className="w-2.5 h-2.5" /> Menunggu Review
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 hidden xl:table-cell whitespace-nowrap text-xs">{article.author}</td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center justify-end">
                          <button
                            onClick={() => { setDetailArticle(article); setRejectTarget(null); }}
                            title="Review"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-400 hover:text-white bg-blue-500/10 hover:bg-blue-500 rounded-lg transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5 shrink-0" />
                            Review
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Pesan Masuk Terbaru — narrower */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white leading-tight">Pesan Masuk Terbaru</h3>
              <p className="text-xs text-slate-500 mt-0.5">Pesan belum dibaca dari prospek</p>
            </div>
            <button
              onClick={() => navigate('/dashboard/admin/pesan')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 rounded-xl transition-colors"
            >
              Semua Pesan <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="divide-y divide-slate-800/50">
            {recentMessages.map((msg) => (
              <Link key={msg.id} to="/dashboard/admin/pesan" className="block px-6 py-4 hover:bg-slate-800/20 transition-colors">
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${!msg.isRead ? 'bg-blue-500/10 text-blue-400' : 'bg-slate-800 text-slate-500'}`}>
                    {msg.isRead ? <MailOpen className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className={`text-sm font-semibold truncate ${!msg.isRead ? 'text-white' : 'text-slate-300'}`}>
                        {msg.subject}
                        {!msg.isRead && <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-500 text-white">Baru</span>}
                      </p>
                      <span className="text-xs text-slate-500 shrink-0">
                        {new Date(msg.date).toLocaleDateString('id-ID', { day: '2-digit', month: 'short' })}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 truncate">{msg.name} · {msg.email}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {detailArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setDetailArticle(null)} />
          <div className="relative bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-slate-800 shrink-0">
              <div>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border mb-2 ${statusConfig[detailArticle.status].color}`}>
                  <Clock className="w-3 h-3" />
                  {statusConfig[detailArticle.status].label}
                </span>
                <h2 className="text-lg font-bold text-white leading-snug">{detailArticle.title}</h2>
              </div>
              <button
                onClick={() => setDetailArticle(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0 mt-0.5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Meta */}
            <div className="px-6 py-3 border-b border-slate-800 flex flex-wrap gap-x-5 gap-y-1.5 shrink-0">
              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                <User className="w-3.5 h-3.5 text-slate-500" />{detailArticle.author}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                <Tag className="w-3.5 h-3.5 text-slate-500" />{detailArticle.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                {new Date(detailArticle.date).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}
              </span>
            </div>

            {/* Content */}
            <div className="overflow-y-auto px-6 py-5 flex-1">
              {detailArticle.image && (
                <div className="mb-6 rounded-xl overflow-hidden border border-slate-700/50">
                  <img src={detailArticle.image} alt={detailArticle.title} className="w-full h-auto object-cover max-h-[400px]" />
                </div>
              )}
              {detailArticle.excerpt && (
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 mb-5">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Ringkasan</p>
                  <p className="text-sm text-slate-300 leading-relaxed">{detailArticle.excerpt}</p>
                </div>
              )}
              {detailArticle.content ? (
                <div className="prose-sm text-slate-300 leading-relaxed space-y-4">
                  {detailArticle.content.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              ) : (
                <p className="text-slate-500 text-sm italic">Konten artikel tidak tersedia.</p>
              )}
            </div>

            {/* Modal Actions */}
            <div className="px-6 py-4 border-t border-slate-800 flex items-center justify-end gap-3 shrink-0">
              <button
                onClick={() => { setRejectTarget(detailArticle); setRejectReason(''); setDetailArticle(null); }}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-red-400 bg-red-500/10 hover:bg-red-500 hover:text-white border border-red-500/20 rounded-xl transition-colors"
              >
                <XCircle className="w-4 h-4" /> Tolak
              </button>
              <button
                onClick={() => { handleApprove(detailArticle.id); setDetailArticle(null); }}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors shadow-lg shadow-emerald-500/20"
              >
                <CheckCircle className="w-4 h-4" /> Setujui & Publikasikan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reject Modal */}
      {rejectTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setRejectTarget(null)} />
          <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 w-full max-w-lg shadow-2xl">
            <button onClick={() => setRejectTarget(null)} className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                <XCircle className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Tolak Artikel</h3>
                <p className="text-sm text-slate-400">Sertakan alasan agar penulis bisa merevisi.</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 bg-slate-800/50 rounded-xl px-4 py-3 mb-5 line-clamp-2">"{rejectTarget.title}"</p>
            <label className="block text-sm font-medium text-slate-300 mb-2">Catatan untuk Penulis <span className="text-red-400">*</span></label>
            <textarea
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              rows={4}
              placeholder="Contoh: Konten perlu diperdalam di bagian implementasi, tambahkan referensi teknis..."
              className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-red-500 transition-colors resize-none mb-5"
            />
            <div className="flex gap-3">
              <button onClick={() => setRejectTarget(null)} className="flex-1 px-4 py-2.5 text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors">Batal</button>
              <button onClick={handleRejectConfirm} disabled={!rejectReason.trim()} className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors">Kirim Penolakan</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminDashboard;
