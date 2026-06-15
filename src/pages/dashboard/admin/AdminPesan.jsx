import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Inbox, Mail, MailOpen, Trash2, X, AlertTriangle, Search, User, AtSign, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const initialMessages = [
  { id: 1, name: 'Andi Permana', email: 'andi.permana@example.com', subject: 'Konsultasi Pengembangan Aplikasi ERP', message: 'Selamat siang tim Koribali, saya ingin menanyakan lebih lanjut mengenai layanan pengembangan sistem ERP custom untuk perusahaan kami yang bergerak di bidang distribusi. Apakah bisa dijadwalkan demo atau konsultasi awal? Terima kasih.', date: '2026-06-15T08:30:00', isRead: false },
  { id: 2, name: 'Dewi Kurnia', email: 'dewi.kurnia@startup.id', subject: 'Kerja Sama Proyek AI', message: 'Halo, saya dari startup rintisan di Surabaya. Kami tertarik untuk berkolaborasi dalam pengembangan solusi AI untuk sektor pertanian. Apakah Koribali menerima kerja sama seperti ini? Mohon info lebih lanjut mengenai prosedur dan estimasi biayanya.', date: '2026-06-14T14:15:00', isRead: false },
  { id: 3, name: 'PT. Bangun Sejahtera', email: 'procurement@bangunSejahtera.co.id', subject: 'Permintaan Penawaran Harga BIM', message: 'Kepada Yth. Koribali, kami membutuhkan penawaran harga untuk layanan konsultasi BIM Level 2 untuk proyek gedung 12 lantai di Denpasar. Mohon dapat mengirimkan proposal teknis dan commercial ke email kami. Terima kasih.', date: '2026-06-13T09:00:00', isRead: true },
  { id: 4, name: 'Rudi Hartono', email: 'rudi.h@gmail.com', subject: 'Pertanyaan Tentang Layanan Digital Twin', message: 'Saya ingin bertanya tentang implementasi Digital Twin untuk pabrik manufaktur skala menengah. Seberapa lama proses implementasinya dan apa saja yang dibutuhkan dari sisi klien?', date: '2026-06-12T16:45:00', isRead: true },
  { id: 5, name: 'Sari Wulandari', email: 'sari.wulandari@univ.ac.id', subject: 'Riset Kolaborasi Akademik', message: 'Selamat pagi, saya dosen di salah satu universitas di Bali yang sedang meneliti transformasi digital UMKM. Apakah Koribali bersedia berkolaborasi dalam riset ini dan menjadi narasumber? Kontribusinya dapat berupa wawancara atau studi kasus dari proyek yang pernah dikerjakan.', date: '2026-06-11T10:20:00', isRead: true },
];

const AdminPesan = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [search, setSearch] = useState('');
  const [filterRead, setFilterRead] = useState('semua');
  const [filterMonth, setFilterMonth] = useState('');
  const [filterYear, setFilterYear] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const availableYears = [...new Set(messages.map((m) => new Date(m.date).getFullYear()))].sort((a, b) => b - a);

  const MONTHS = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

  const filtered = messages.filter((m) => {
    const q = search.toLowerCase();
    const d = new Date(m.date);
    const matchSearch = m.name.toLowerCase().includes(q) || m.subject.toLowerCase().includes(q) || m.email.toLowerCase().includes(q);
    const matchRead = filterRead === 'semua' || (filterRead === 'belum' && !m.isRead) || (filterRead === 'sudah' && m.isRead);
    const matchMonth = !filterMonth || d.getMonth() + 1 === Number(filterMonth);
    const matchYear = !filterYear || d.getFullYear() === Number(filterYear);
    return matchSearch && matchRead && matchMonth && matchYear;
  });

  const unreadCount = messages.filter((m) => !m.isRead).length;

  const counts = {
    semua: messages.length,
    belum: unreadCount,
    sudah: messages.length - unreadCount,
  };

  const markRead = (id) => {
    setMessages((prev) => prev.map((m) => m.id === id ? { ...m, isRead: true } : m));
  };

  const markAllRead = () => {
    setMessages((prev) => prev.map((m) => ({ ...m, isRead: true })));
  };

  const handleDelete = () => {
    setMessages((prev) => prev.filter((m) => m.id !== deleteTarget.id));
    if (expandedId === deleteTarget.id) setExpandedId(null);
    setDeleteTarget(null);
  };

  const toggleExpand = (id, isRead) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
      if (!isRead) markRead(id);
    }
  };

  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }) + ', ' +
      d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <Helmet>
        <title>Pesan Masuk | Admin Koribali</title>
      </Helmet>

      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Pesan Masuk</h1>
          <p className="text-slate-400 text-sm">Pesan dari formulir kontak website.</p>
        </div>
        <div className="flex items-center gap-3">
          {unreadCount > 0 && (
            <button
              onClick={markAllRead}
              className="text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Tandai semua dibaca
            </button>
          )}
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl">
            <Inbox className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">{unreadCount} Belum Dibaca</span>
          </div>
        </div>
      </div>

      {/* Tab Filter */}
      <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-2xl p-1.5 mb-6 overflow-x-auto">
        {[
          { key: 'semua', label: 'Semua Pesan', icon: Inbox, color: 'text-blue-400', showCount: false },
          { key: 'belum', label: 'Belum Dibaca', icon: Mail, color: 'text-amber-400', showCount: true },
          { key: 'sudah', label: 'Sudah Dibaca', icon: MailOpen, color: 'text-emerald-400', showCount: false },
        ].map(({ key, label, icon: Icon, color, showCount }) => {
          const isActive = filterRead === key;
          return (
            <button
              key={key}
              onClick={() => setFilterRead(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                isActive ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? color : ''}`} />
              <span>{label}</span>
              {showCount && (
                <span className={`ml-0.5 px-2 py-0.5 rounded-md text-xs font-bold ${
                  isActive
                    ? `${color.replace('text-', 'bg-').replace('400', '500/20')} ${color}`
                    : 'bg-slate-700/60 text-slate-400'
                }`}>
                  {counts[key]}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="px-4 py-4 border-b border-slate-800 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Cari nama, email, atau subjek..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-950/50 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <select
              value={filterMonth}
              onChange={(e) => setFilterMonth(e.target.value)}
              className="bg-slate-800 border border-slate-700 text-sm text-slate-300 rounded-xl px-3 py-2 focus:outline-none focus:border-blue-500 cursor-pointer transition-colors"
            >
              <option value="">Semua Bulan</option>
              {MONTHS.map((name, i) => (
                <option key={i + 1} value={i + 1}>{name}</option>
              ))}
            </select>
            <select
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
              className="bg-slate-800 border border-slate-700 text-sm text-slate-300 rounded-xl px-3 py-2 focus:outline-none focus:border-blue-500 cursor-pointer transition-colors"
            >
              <option value="">Semua Tahun</option>
              {availableYears.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Inbox className="w-10 h-10 text-slate-700 mb-3" />
            <p className="text-slate-500 text-sm">Tidak ada pesan ditemukan.</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-800/50">
            {filtered.map((msg) => {
              const isExpanded = expandedId === msg.id;
              return (
                <div key={msg.id} className={`transition-colors ${!msg.isRead ? 'bg-blue-500/5' : ''}`}>
                  <div
                    className="px-4 sm:px-6 py-4 flex items-start gap-3 cursor-pointer hover:bg-slate-800/20 transition-colors"
                    onClick={() => toggleExpand(msg.id, msg.isRead)}
                  >
                    <div className={`mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${!msg.isRead ? 'bg-blue-500/10 text-blue-400' : 'bg-slate-800 text-slate-500'}`}>
                      {msg.isRead ? <MailOpen className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className={`text-sm font-semibold truncate ${!msg.isRead ? 'text-white' : 'text-slate-300'}`}>
                            {msg.subject}
                            {!msg.isRead && <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-500 text-white">Baru</span>}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">{msg.name} · {msg.email}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-xs text-slate-500 hidden sm:block whitespace-nowrap">{formatDate(msg.date)}</span>
                          <button
                            onClick={(e) => { e.stopPropagation(); setDeleteTarget(msg); }}
                            className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                            title="Hapus"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                          {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                        </div>
                      </div>
                      {!isExpanded && (
                        <p className="text-xs text-slate-500 mt-1.5 line-clamp-1">{msg.message}</p>
                      )}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-4 sm:px-6 pb-5 ml-11">
                      <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div className="flex items-center gap-2 text-slate-400">
                            <User className="w-3.5 h-3.5 shrink-0" />
                            <span>{msg.name}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400">
                            <AtSign className="w-3.5 h-3.5 shrink-0" />
                            <a href={`mailto:${msg.email}`} className="text-blue-400 hover:underline truncate">{msg.email}</a>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400">
                            <Calendar className="w-3.5 h-3.5 shrink-0" />
                            <span>{formatDate(msg.date)}</span>
                          </div>
                        </div>
                        <div className="border-t border-slate-700/50 pt-3">
                          <p className="text-sm text-slate-300 leading-relaxed">{msg.message}</p>
                        </div>
                        <div className="border-t border-slate-700/50 pt-3">
                          <a
                            href={`mailto:${msg.email}?subject=Re: ${msg.subject}`}
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium rounded-lg transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            Balas via Email
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setDeleteTarget(null)} />
          <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Hapus Pesan?</h3>
                <p className="text-sm text-slate-400">Pesan ini akan dihapus permanen.</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 bg-slate-800/50 rounded-xl px-4 py-3 mb-6 line-clamp-1">"{deleteTarget.subject}"</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteTarget(null)} className="flex-1 px-4 py-2.5 text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors">Batal</button>
              <button onClick={handleDelete} className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-500 rounded-xl transition-colors">Ya, Hapus</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPesan;
