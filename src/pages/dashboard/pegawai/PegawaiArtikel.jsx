import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PenTool, Search, Eye, Edit, Trash2, Plus, FileText, CheckCircle, Clock, AlertTriangle, EyeOff, Info, ChevronLeft, ChevronRight } from 'lucide-react';

const myArticles = [
  {
    id: 'llm-bisnis-indonesia',
    title: 'Memanfaatkan Large Language Model (LLM) untuk Transformasi Bisnis di Indonesia',
    category: 'AI Solutions & Digitalization',
    date: '2026-06-05',
    views: 1980,
    status: 'published',
  },
  {
    id: 'erp-custom-vs-ready',
    title: 'Mengapa Sistem ERP Custom Lebih Efektif Daripada Solusi Siap Pakai?',
    category: 'AI Solutions & Digitalization',
    date: '2026-05-28',
    views: 1440,
    status: 'unpublished',
    note: 'Ada data yang kurang akurat pada paragraf 2 terkait persentase. Tolong dicek lagi sumber terbarunya.',
  },
  {
    id: 'pwa-solusi-aplikasi',
    title: 'Progressive Web App (PWA): Solusi Cerdas Aplikasi Tanpa Perlu Instalasi',
    category: 'AI Solutions & Digitalization',
    date: '2026-02-20',
    views: 950,
    status: 'published',
  },
  {
    id: 'bim-revolusi-desain-draft',
    title: 'Revolusi Desain Sipil dengan Digital Twin dan BIM Level 3',
    category: 'Engineering Technology Consulting',
    date: '2026-06-10',
    views: 0,
    status: 'draft',
  },
  {
    id: 'ai-rekayasa-review',
    title: 'Penerapan AI dalam Rekayasa Teknik: Peluang dan Tantangan',
    category: 'Engineering Technology Consulting',
    date: '2026-06-12',
    views: 0,
    status: 'review',
  },
  {
    id: 'ai-rekayasa-rejected',
    title: 'Penerapan Internet of Things (IoT) di Sektor Pertanian Bali',
    category: 'Engineering Technology Consulting',
    date: '2026-06-14',
    views: 0,
    status: 'rejected',
    note: 'Mohon tambahkan lebih banyak contoh studi kasus nyata penerapan IoT pada sawah/subak di Bali.',
  },
];

const statusConfig = {
  published: { label: 'Published', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  unpublished: { label: 'Unpublished', color: 'bg-slate-500/10 text-slate-400 border-slate-500/20' },
  draft: { label: 'Draft', color: 'bg-slate-500/10 text-slate-400 border-slate-500/20' },
  review: { label: 'Menunggu Review', color: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
  rejected: { label: 'Ditolak', color: 'bg-red-500/10 text-red-400 border-red-500/20' },
};

const PegawaiArtikel = () => {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('semua');
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [rejectionReasonModal, setRejectionReasonModal] = useState(null);

  const filtered = myArticles.filter((a) => {
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === 'semua' 
      ? true 
      : a.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const safePage = Math.min(currentPage, totalPages);
  const paginated = filtered.slice((safePage - 1) * perPage, safePage * perPage);

  const handlePerPageChange = (val) => {
    setPerPage(val);
    setCurrentPage(1);
  };

  const handleFilterChange = (key) => {
    setFilterStatus(key);
    setCurrentPage(1);
  };

  const handleSearch = (val) => {
    setSearch(val);
    setCurrentPage(1);
  };

  const counts = {
    semua: myArticles.length,
    published: myArticles.filter((a) => a.status === 'published').length,
    unpublished: myArticles.filter((a) => a.status === 'unpublished').length,
    draft: myArticles.filter((a) => a.status === 'draft').length,
    review: myArticles.filter((a) => a.status === 'review').length,
    rejected: myArticles.filter((a) => a.status === 'rejected').length,
  };

  const handleDeleteConfirm = () => {
    // TODO: panggil API hapus artikel dengan id deleteTarget.id
    setDeleteTarget(null);
  };

  return (
    <>
      <Helmet>
        <title>Artikel Saya | Koribali Portal</title>
      </Helmet>

      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Artikel Saya</h1>
          <p className="text-slate-400 text-sm">Kelola semua artikel yang telah Anda tulis.</p>
        </div>
        <Link
          to="/dashboard/pegawai/artikel/tambah"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2.5 rounded-xl transition-colors text-sm"
        >
          <Plus className="w-4 h-4" />
          Tulis Artikel Baru
        </Link>
      </div>

      {/* Tab Bar */}
      <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-2xl p-1.5 mb-6 overflow-x-auto">
        {[
          { key: 'semua', label: 'Semua Artikel', icon: FileText, color: 'text-blue-400' },
          { key: 'published', label: 'Published', icon: CheckCircle, color: 'text-emerald-400' },
          { key: 'unpublished', label: 'Unpublished', icon: EyeOff, color: 'text-slate-400' },
          { key: 'draft', label: 'Draft', icon: FileText, color: 'text-slate-400' },
          { key: 'review', label: 'Menunggu Review', icon: Clock, color: 'text-amber-400' },
          { key: 'rejected', label: 'Ditolak / Revisi', icon: AlertTriangle, color: 'text-red-400' },
        ].map(({ key, label, icon: Icon, color }) => {
          const isActive = filterStatus === key;
          return (
            <button
              key={key}
              onClick={() => handleFilterChange(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                isActive ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? color : ''}`} />
              <span>{label}</span>
              <span className={`ml-0.5 px-2 py-0.5 rounded-md text-xs font-bold ${
                isActive
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'bg-slate-800 text-slate-500'
              }`}>
                {counts[key]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="px-4 py-4 border-b border-slate-800">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Cari artikel..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full bg-slate-950/50 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] text-left text-sm text-slate-400">
            <thead className="bg-slate-950/50 text-slate-300 uppercase text-xs font-semibold">
              <tr>
                <th className="px-4 sm:px-6 py-3.5">Judul</th>
                <th className="px-4 sm:px-6 py-3.5 hidden md:table-cell">Kategori</th>
                <th className="px-4 sm:px-6 py-3.5 hidden sm:table-cell">Tanggal</th>
                <th className="px-4 sm:px-6 py-3.5 hidden lg:table-cell">Views</th>
                <th className="px-4 sm:px-6 py-3.5">Status</th>
                <th className="px-4 sm:px-6 py-3.5 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-16 text-center text-slate-500">
                    Tidak ada artikel ditemukan.
                  </td>
                </tr>
              ) : (
                paginated.map((article) => {
                  const st = statusConfig[article.status];
                  return (
                    <tr key={article.id} className="hover:bg-slate-800/20 transition-colors">
                      <td className="px-4 sm:px-6 py-3.5">
                        <p className="font-medium text-white line-clamp-2 max-w-[200px] sm:max-w-xs">{article.title}</p>
                      </td>
                      <td className="px-4 sm:px-6 py-3.5 hidden md:table-cell whitespace-nowrap">
                        <span className="text-xs">{article.category}</span>
                      </td>
                      <td className="px-4 sm:px-6 py-3.5 hidden sm:table-cell whitespace-nowrap">
                        {new Date(article.date).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </td>
                      <td className="px-4 sm:px-6 py-3.5 hidden lg:table-cell">
                        <div className="flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5" />
                          {article.views.toLocaleString('id-ID')}
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-3.5">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border whitespace-nowrap ${st.color}`}>
                          {st.label}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-3.5">
                        <div className="flex items-center justify-end gap-1.5">
                          {(article.status === 'rejected' || article.status === 'unpublished') && article.note && (
                            <button
                              onClick={() => setRejectionReasonModal(article.note)}
                              title={article.status === 'unpublished' ? "Alasan Unpublish" : "Lihat Alasan Penolakan"}
                              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium text-amber-400 hover:text-white bg-amber-500/10 hover:bg-amber-500 rounded-lg transition-colors"
                            >
                              <Info className="w-3.5 h-3.5 shrink-0" />
                              <span className="hidden sm:inline">Alasan</span>
                            </button>
                          )}
                          <Link
                            to={`/dashboard/pegawai/artikel/edit/${article.id}`}
                            title="Edit"
                            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium text-blue-400 hover:text-white bg-blue-500/10 hover:bg-blue-500 rounded-lg transition-colors"
                          >
                            <Edit className="w-3.5 h-3.5 shrink-0" />
                            <span className="hidden sm:inline">Edit</span>
                          </Link>
                          {article.status === 'draft' && (
                            <button
                              onClick={() => setDeleteTarget(article)}
                              title="Hapus"
                              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium text-red-400 hover:text-white bg-red-500/10 hover:bg-red-500 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5 shrink-0" />
                              <span className="hidden sm:inline">Hapus</span>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-4 sm:px-6 py-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span>Tampilkan</span>
            <select
              value={perPage}
              onChange={(e) => handlePerPageChange(Number(e.target.value))}
              className="bg-slate-800 border border-slate-700 text-white text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
            >
              {[10, 15, 20, 25].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
            <span>per halaman</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-400 flex-wrap justify-center sm:justify-end">
            <span className="whitespace-nowrap">
              {filtered.length === 0 ? '0' : `${(safePage - 1) * perPage + 1}–${Math.min(safePage * perPage, filtered.length)}`} dari {filtered.length}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={safePage === 1}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-lg text-xs font-medium transition-colors ${
                    page === safePage
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={safePage === totalPages}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Konfirmasi Hapus */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setDeleteTarget(null)} />
          <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Hapus Artikel?</h3>
                <p className="text-sm text-slate-400">Tindakan ini tidak bisa dibatalkan.</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 bg-slate-800/50 rounded-xl px-4 py-3 mb-6 line-clamp-2">
              "{deleteTarget.title}"
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteTarget(null)}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
              >
                Batal
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-500 rounded-xl transition-colors"
              >
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Catatan Penolakan */}
      {rejectionReasonModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setRejectionReasonModal(null)} />
          <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Catatan Admin</h3>
                <p className="text-sm text-slate-400">Alasan mengapa artikel ini ditolak atau diturunkan.</p>
              </div>
            </div>
            <div className="text-sm text-slate-300 bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3.5 mb-6 leading-relaxed max-h-48 overflow-y-auto">
              "{rejectionReasonModal}"
            </div>
            <button
              onClick={() => setRejectionReasonModal(null)}
              className="w-full px-4 py-2.5 text-sm font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PegawaiArtikel;
