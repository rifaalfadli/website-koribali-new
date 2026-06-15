import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Eye, Trash2, CheckCircle, Clock, Globe, AlertTriangle, ChevronLeft, ChevronRight, X, XCircle, LayoutList, FileText, User, Tag, Calendar, EyeOff } from 'lucide-react';

const allArticles = [
  { id: 'llm-bisnis-indonesia', title: 'Memanfaatkan Large Language Model (LLM) untuk Transformasi Bisnis di Indonesia', category: 'AI Solutions & Digitalization', author: 'Rifa Al Fadli', date: '2026-06-05', views: 1980, status: 'published', excerpt: null, content: null },
  { id: 'erp-custom-vs-ready', title: 'Mengapa Sistem ERP Custom Lebih Efektif Daripada Solusi Siap Pakai?', category: 'AI Solutions & Digitalization', author: 'Rifa Al Fadli', date: '2026-05-28', views: 1440, status: 'published', excerpt: null, content: null },
  { id: 'pwa-solusi-aplikasi', title: 'Progressive Web App (PWA): Solusi Cerdas Aplikasi Tanpa Perlu Instalasi', category: 'AI Solutions & Digitalization', author: 'Siti Aminah', date: '2026-02-20', views: 950, status: 'published', excerpt: null, content: null },
  { id: 'iot-manufacturing', title: 'Implementasi IoT dalam Otomasi Pabrik Manufaktur Modern', category: 'Engineering Technology Consulting', author: 'Fajar Nugroho', date: '2026-06-01', views: 2100, status: 'published', excerpt: null, content: null },
  { id: 'data-governance', title: 'Data Governance: Fondasi Transformasi Digital yang Sering Diabaikan', category: 'AI Solutions & Digitalization', author: 'Rina Wati', date: '2026-05-15', views: 780, status: 'published', excerpt: null, content: null },
  { id: 'devops-cicd', title: 'Penerapan DevOps dan CI/CD Pipeline di Lingkungan Enterprise', category: 'AI Solutions & Digitalization', author: 'Dwi Prasetyo', date: '2026-05-30', views: 630, status: 'published', excerpt: null, content: null },
  {
    id: 'ai-rekayasa-review',
    title: 'Penerapan AI dalam Rekayasa Teknik: Peluang dan Tantangan',
    category: 'Engineering Technology Consulting',
    author: 'Rizky Pratama',
    date: '2026-06-12',
    views: 0,
    status: 'review',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Artikel ini mengeksplorasi bagaimana teknologi kecerdasan buatan mulai merambah dunia rekayasa teknik, dari simulasi struktural berbasis ML hingga prediksi kegagalan material secara real-time.',
    content: `Kecerdasan buatan (AI) telah membawa perubahan signifikan di berbagai sektor industri, dan rekayasa teknik bukan pengecualian. Dalam beberapa tahun terakhir, penerapan machine learning, computer vision, dan sistem prediktif berbasis AI telah mengubah cara insinyur merancang, menguji, dan mengoperasikan infrastruktur.

Salah satu peluang terbesar adalah penggunaan AI dalam simulasi struktural. Dengan model deep learning, insinyur kini dapat mensimulasikan beban dinamis pada jembatan atau gedung bertingkat dengan akurasi yang mendekati finite element analysis (FEA) konvensional, namun dalam fraksi waktu yang jauh lebih singkat. Hal ini memungkinkan eksplorasi desain yang lebih luas dalam fase awal proyek.

Di sisi lain, AI juga digunakan untuk prediksi kegagalan material. Sensor IoT yang dipasang pada infrastruktur kritis mengirim data secara real-time ke model AI yang telah dilatih untuk mengenali pola degradasi. Sistem ini memungkinkan pemeliharaan prediktif—memperbaiki komponen sebelum terjadi kerusakan fatal.

Namun, adopsi AI di bidang rekayasa bukan tanpa tantangan. Ketersediaan data berkualitas tinggi menjadi hambatan utama, karena banyak data insinyur masih tersimpan dalam format analog atau tidak terstruktur. Selain itu, kepercayaan terhadap keputusan AI dalam konteks keselamatan jiwa harus didukung oleh standar regulasi yang jelas.

Ke depan, kolaborasi antara insinyur profesional dan ilmuwan data akan menjadi kunci untuk memaksimalkan potensi AI dalam rekayasa teknik yang bertanggung jawab dan aman.`,
  },
  {
    id: 'cloud-infrastruktur',
    title: 'Membangun Infrastruktur Cloud yang Scalable untuk Startup Indonesia',
    category: 'AI Solutions & Digitalization',
    author: 'Budi Santoso',
    date: '2026-06-08',
    views: 0,
    status: 'review',
    excerpt: 'Panduan praktis membangun cloud infrastructure yang siap scale dari nol hingga ratusan ribu pengguna, dengan studi kasus dan best practice untuk startup Indonesia.',
    content: `Membangun infrastruktur cloud yang scalable sejak awal adalah investasi paling bijak yang bisa dilakukan startup teknologi Indonesia. Kesalahan arsitektur di fase awal seringkali berujung pada technical debt yang mahal dan downtime yang merusak reputasi.

Pertama, pahami prinsip dasar scalability: horizontal vs vertical scaling. Horizontal scaling (menambah instance) umumnya lebih cost-effective dan reliable untuk aplikasi modern dibandingkan vertical scaling (meningkatkan spesifikasi server). Desain arsitektur Anda sejak awal untuk mendukung horizontal scaling.

Pilihan cloud provider untuk startup Indonesia umumnya jatuh pada AWS, Google Cloud, atau Microsoft Azure. Ketiganya memiliki region di Asia Tenggara yang memberikan latensi rendah untuk pengguna Indonesia. Manfaatkan kredit startup yang ditawarkan masing-masing provider—AWS Activate, Google for Startups, dan Azure for Startups—untuk menekan biaya awal.

Gunakan container (Docker) dan orkestrasi (Kubernetes atau Amazon ECS) sejak awal untuk memudahkan deployment dan scaling. Infrastructure as Code (IaC) dengan Terraform atau AWS CloudFormation memungkinkan Anda mereproduksi environment secara konsisten dan cepat.

Untuk database, pisahkan read dan write dengan read replica. Implementasikan caching layer menggunakan Redis untuk mengurangi beban database pada data yang sering diakses. Monitoring dengan tools seperti Datadog atau Grafana wajib ada sebelum aplikasi Anda menerima traffic produksi nyata.

Mulai sederhana, ukur, dan scale sesuai kebutuhan aktual—bukan kebutuhan yang dibayangkan.`,
  },
  {
    id: 'microservices-vs-monolith',
    title: 'Kapan Harus Beralih dari Monolith ke Microservices?',
    category: 'AI Solutions & Digitalization',
    author: 'Nia Ramadhani',
    date: '2026-06-14',
    views: 0,
    status: 'review',
    excerpt: 'Panduan praktis menentukan waktu yang tepat untuk memisahkan arsitektur monolitik menjadi layanan-layanan kecil yang independen, beserta risiko dan strategi migrasinya.',
    content: `Pertanyaan "kapan harus beralih ke microservices?" adalah salah satu yang paling sering muncul dalam diskusi arsitektur software. Jawaban singkatnya: tidak sesegera yang Anda kira.

Monolith bukan berarti buruk. Bagi startup dan tim kecil, monolith yang terstruktur dengan baik justru lebih mudah di-develop, di-test, dan di-deploy. Kompleksitas operasional microservices—service discovery, distributed tracing, eventual consistency, network latency—bisa membunuh produktivitas tim yang belum siap.

Tanda-tanda bahwa Anda mulai butuh microservices antara lain: (1) deployment satu fitur kecil membutuhkan pengujian dan deploy seluruh aplikasi; (2) tim berbeda terlalu sering menginjak "kaki" satu sama lain dalam codebase yang sama; (3) ada bagian sistem dengan kebutuhan scaling yang sangat berbeda (misalnya, modul laporan butuh resource besar saat bulan tutup, tapi tidak di waktu lain); (4) Anda ingin menggunakan teknologi berbeda untuk domain yang berbeda.

Strategi migrasi yang aman adalah pendekatan Strangler Fig: secara bertahap ekstrak layanan-layanan dari monolith, mulai dari domain yang paling independen dan paling sering berubah. Jangan mencoba migrasi semuanya sekaligus—itu hampir selalu berakhir bencana.

Yang terpenting: pastikan Anda memiliki observability yang baik (logging terpusat, distributed tracing, metrics dashboard) sebelum dan selama transisi. Tanpa visibilitas yang baik, debugging masalah di lingkungan microservices bisa menjadi mimpi buruk.`,
  },
];

const statusConfig = {
  published: { label: 'Published', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  unpublished: { label: 'Unpublished', color: 'bg-slate-500/10 text-slate-400 border-slate-500/20' },
  review: { label: 'Menunggu Review', color: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
  rejected: { label: 'Ditolak', color: 'bg-red-500/10 text-red-400 border-red-500/20' },
};

const TABS = [
  { key: 'semua', label: 'Semua', icon: LayoutList, color: 'text-blue-400' },
  { key: 'review', label: 'Menunggu Review', icon: Clock, color: 'text-amber-400' },
  { key: 'published', label: 'Published', icon: Globe, color: 'text-emerald-400' },
  { key: 'unpublished', label: 'Unpublished', icon: EyeOff, color: 'text-slate-400' },
  { key: 'rejected', label: 'Ditolak', icon: XCircle, color: 'text-red-400' },
];

const AdminArtikel = () => {
  const [articles, setArticles] = useState(allArticles);
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('semua');
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [rejectTarget, setRejectTarget] = useState(null);
  const [rejectReason, setRejectReason] = useState('');
  const [detailArticle, setDetailArticle] = useState(null);
  const [publishTarget, setPublishTarget] = useState(null);
  const [unpublishTarget, setUnpublishTarget] = useState(null);
  const [unpublishReason, setUnpublishReason] = useState('');
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const counts = {
    semua: articles.length,
    published: articles.filter((a) => a.status === 'published').length,
    unpublished: articles.filter((a) => a.status === 'unpublished').length,
    review: articles.filter((a) => a.status === 'review').length,
    rejected: articles.filter((a) => a.status === 'rejected').length,
  };

  const filtered = articles.filter((a) => {
    const q = search.toLowerCase();
    const matchSearch = a.title.toLowerCase().includes(q) || a.author.toLowerCase().includes(q);
    if (activeTab === 'semua') return matchSearch;
    return matchSearch && a.status === activeTab;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const safePage = Math.min(currentPage, totalPages);
  const paginated = filtered.slice((safePage - 1) * perPage, safePage * perPage);

  const handleChangeStatus = (id, newStatus) => {
    setArticles((prev) => prev.map((a) => a.id === id ? { ...a, status: newStatus } : a));
  };

  const handleApprove = (id) => {
    setArticles((prev) => prev.map((a) => a.id === id ? { ...a, status: 'published' } : a));
  };

  const handlePublishConfirm = () => {
    setArticles((prev) => prev.map((a) => a.id === publishTarget.id ? { ...a, status: 'published' } : a));
    setPublishTarget(null);
  };

  const handleUnpublishConfirm = () => {
    setArticles((prev) => prev.map((a) => a.id === unpublishTarget.id ? { ...a, status: 'unpublished', note: unpublishReason } : a));
    setUnpublishTarget(null);
    setUnpublishReason('');
  };

  const handleRejectConfirm = () => {
    setArticles((prev) => prev.map((a) => a.id === rejectTarget.id ? { ...a, status: 'rejected', note: rejectReason } : a));
    setRejectTarget(null);
    setRejectReason('');
  };

  const handleDelete = () => {
    setArticles((prev) => prev.filter((a) => a.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  const switchTab = (key) => { setActiveTab(key); setCurrentPage(1); };

  return (
    <>
      <Helmet>
        <title>Kelola Artikel | Admin Koribali</title>
      </Helmet>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-1">Kelola Artikel</h1>
        <p className="text-slate-400 text-sm">Kelola dan moderasi seluruh artikel dari semua penulis.</p>
      </div>

      {/* Tab Bar */}
      <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-2xl p-1.5 mb-6 overflow-x-auto">
        {TABS.map(({ key, label, icon: Icon, color }) => {
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => switchTab(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                isActive ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? color : ''}`} />
              <span>{label}</span>
              <span className={`ml-0.5 px-2 py-0.5 rounded-md text-xs font-bold ${
                isActive
                  ? `${color.replace('text-', 'bg-').replace('400', '500/20')} ${color}`
                  : 'bg-slate-700/60 text-slate-400'
              }`}>
                {counts[key]}
              </span>
            </button>
          );
        })}
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="px-4 py-4 border-b border-slate-800">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Cari judul atau penulis..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
              className="w-full bg-slate-950/50 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[660px] text-left text-sm text-slate-400">
            <thead className="bg-slate-950/50 text-slate-300 uppercase text-xs font-semibold">
              <tr>
                <th className="px-4 sm:px-6 py-3.5 w-10">No</th>
                <th className="px-4 sm:px-6 py-3.5">Judul</th>
                <th className="px-4 sm:px-6 py-3.5 hidden md:table-cell">Penulis</th>
                <th className="px-4 sm:px-6 py-3.5 hidden lg:table-cell">Tanggal</th>
                <th className="px-4 sm:px-6 py-3.5 hidden lg:table-cell">Views</th>
                <th className="px-4 sm:px-6 py-3.5">Status</th>
                <th className="px-4 sm:px-6 py-3.5 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-16 text-center text-slate-500">Tidak ada artikel ditemukan.</td>
                </tr>
              ) : (
                paginated.map((article, index) => {
                  const st = statusConfig[article.status];
                  const isReview = article.status === 'review';
                  return (
                    <tr key={article.id} className="hover:bg-slate-800/20 transition-colors">
                      <td className="px-4 sm:px-6 py-3.5 text-slate-500 text-xs font-medium">
                        {(safePage - 1) * perPage + index + 1}
                      </td>
                      <td className="px-4 sm:px-6 py-3.5">
                        <p className="font-medium text-white line-clamp-2 max-w-[200px] sm:max-w-xs">{article.title}</p>
                        <p className="text-xs text-slate-500 mt-0.5 md:hidden">{article.author}</p>
                      </td>
                      <td className="px-4 sm:px-6 py-3.5 hidden md:table-cell whitespace-nowrap text-xs">{article.author}</td>
                      <td className="px-4 sm:px-6 py-3.5 hidden lg:table-cell whitespace-nowrap">
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
                        <div className="flex items-center justify-end gap-1.5 flex-wrap">
                          <button
                            onClick={() => setDetailArticle(article)}
                            title={isReview ? "Review Artikel" : "Lihat Isi Artikel"}
                            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium text-blue-400 hover:text-white bg-blue-500/10 hover:bg-blue-500 rounded-lg transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5 shrink-0" />
                            <span className="hidden sm:inline">{isReview ? "Review" : "Lihat"}</span>
                          </button>
                          
                          {(article.status === 'published' || article.status === 'unpublished') && (
                            <select
                              value={article.status}
                              onChange={(e) => {
                                const newStatus = e.target.value;
                                if (newStatus === 'published' && article.status !== 'published') setPublishTarget(article);
                                else if (newStatus === 'unpublished' && article.status !== 'unpublished') { setUnpublishTarget(article); setUnpublishReason(''); }
                              }}
                              className={`text-xs font-medium rounded-lg px-2.5 py-1.5 border focus:outline-none focus:border-blue-500 cursor-pointer transition-colors ${
                                article.status === 'published'
                                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                                  : 'bg-slate-700/50 border-slate-600 text-slate-300'
                              }`}
                            >
                              <option value="published" className="bg-slate-900 text-white">Published</option>
                              <option value="unpublished" className="bg-slate-900 text-white">Unpublished</option>
                            </select>
                          )}
                          
                          {article.status !== 'review' && article.status !== 'published' && (
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

        <div className="px-4 sm:px-6 py-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span>Tampilkan</span>
            <select
              value={perPage}
              onChange={(e) => { setPerPage(Number(e.target.value)); setCurrentPage(1); }}
              className="bg-slate-800 border border-slate-700 text-white text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-blue-500 cursor-pointer"
            >
              {[10, 15, 20, 25].map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
            <span>per halaman</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400 flex-wrap justify-center sm:justify-end">
            <span className="whitespace-nowrap">
              {filtered.length === 0 ? '0' : `${(safePage - 1) * perPage + 1}–${Math.min(safePage * perPage, filtered.length)}`} dari {filtered.length}
            </span>
            <div className="flex items-center gap-1">
              <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={safePage === 1} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed">
                <ChevronLeft className="w-4 h-4" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button key={page} onClick={() => setCurrentPage(page)} className={`w-8 h-8 rounded-lg text-xs font-medium transition-colors ${page === safePage ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}>
                  {page}
                </button>
              ))}
              <button onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={safePage === totalPages} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
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
                  {detailArticle.status === 'review' ? <Clock className="w-3 h-3" /> : <Globe className="w-3 h-3" />}
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
              {detailArticle.status === 'rejected' && detailArticle.note && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 mb-5">
                  <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" /> Catatan Penolakan
                  </p>
                  <p className="text-sm text-red-300/90 leading-relaxed">{detailArticle.note}</p>
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
            {detailArticle.status === 'review' && (
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
            )}
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

      {/* Delete Modal */}
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
            <p className="text-sm text-slate-300 bg-slate-800/50 rounded-xl px-4 py-3 mb-6 line-clamp-2">"{deleteTarget.title}"</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteTarget(null)} className="flex-1 px-4 py-2.5 text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors">Batal</button>
              <button onClick={handleDelete} className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-500 rounded-xl transition-colors">Ya, Hapus</button>
            </div>
          </div>
        </div>
      )}

      {/* Publish Modal */}
      {publishTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setPublishTarget(null)} />
          <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Publish Artikel?</h3>
                <p className="text-sm text-slate-400">Artikel akan langsung tayang di website.</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 bg-slate-800/50 rounded-xl px-4 py-3 mb-6 line-clamp-2">"{publishTarget.title}"</p>
            <div className="flex gap-3">
              <button onClick={() => setPublishTarget(null)} className="flex-1 px-4 py-2.5 text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors">Batal</button>
              <button onClick={handlePublishConfirm} className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors">Ya, Publish</button>
            </div>
          </div>
        </div>
      )}

      {/* Unpublish Modal */}
      {unpublishTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setUnpublishTarget(null)} />
          <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 w-full max-w-lg shadow-2xl">
            <button onClick={() => setUnpublishTarget(null)} className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                <EyeOff className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Unpublish Artikel?</h3>
                <p className="text-sm text-slate-400">Artikel akan disembunyikan dari pengunjung website.</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 bg-slate-800/50 rounded-xl px-4 py-3 mb-5 line-clamp-2">"{unpublishTarget.title}"</p>
            <label className="block text-sm font-medium text-slate-300 mb-2">Alasan Unpublish <span className="text-red-400">*</span></label>
            <textarea
              value={unpublishReason}
              onChange={(e) => setUnpublishReason(e.target.value)}
              rows={3}
              placeholder="Contoh: Ada data yang perlu diperbarui, instruksi manajemen..."
              className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors resize-none mb-5"
            />
            <div className="flex gap-3">
              <button onClick={() => setUnpublishTarget(null)} className="flex-1 px-4 py-2.5 text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors">Batal</button>
              <button onClick={handleUnpublishConfirm} disabled={!unpublishReason.trim()} className="flex-1 px-4 py-2.5 text-sm font-medium text-amber-900 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors">Ya, Unpublish</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminArtikel;
