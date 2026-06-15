import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Plus, Edit, Trash2, Users, UserCheck, UserX, AlertTriangle, X, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

const initialPegawai = [
  { id: 1, name: 'Rifa Al Fadli', role: 'Chief Executive Officer', email: 'rifa@koribali.com', phone: '081234567890', status: 'aktif', joinDate: '2024-01-15' },
  { id: 2, name: 'Budi Santoso', role: 'Chief Technology Officer', email: 'budi@koribali.com', phone: '081298765432', status: 'aktif', joinDate: '2024-01-15' },
  { id: 3, name: 'Siti Aminah', role: 'Senior Frontend Developer', email: 'siti@koribali.com', phone: '085712341234', status: 'aktif', joinDate: '2024-02-01' },
  { id: 4, name: 'Rizky Pratama', role: 'Backend Engineer', email: 'rizky@koribali.com', phone: '081122334455', status: 'aktif', joinDate: '2024-02-10' },
  { id: 5, name: 'Dewi Lestari', role: 'UI/UX Designer', email: 'dewi@koribali.com', phone: '082233445566', status: 'aktif', joinDate: '2024-03-01' },
  { id: 6, name: 'Ahmad Fauzi', role: 'AI & ML Engineer', email: 'ahmad@koribali.com', phone: '', status: 'aktif', joinDate: '2024-03-15' },
  { id: 7, name: 'Rina Wati', role: 'Data Analyst', email: 'rina@koribali.com', phone: '', status: 'aktif', joinDate: '2024-04-01' },
  { id: 8, name: 'Hendra Gunawan', role: 'Data Scientist', email: 'hendra@koribali.com', phone: '', status: 'nonaktif', joinDate: '2024-04-10' },
  { id: 9, name: 'Ir. Wahyu Hidayat', role: 'Head of Engineering Consulting', email: 'wahyu@koribali.com', phone: '', status: 'aktif', joinDate: '2024-05-01' },
  { id: 10, name: 'Maya Safira', role: 'Project Manager', email: 'maya@koribali.com', phone: '', status: 'aktif', joinDate: '2024-05-15' },
  { id: 11, name: 'Dwi Prasetyo', role: 'DevOps Engineer', email: 'dwi@koribali.com', phone: '', status: 'aktif', joinDate: '2024-06-01' },
  { id: 12, name: 'Nia Ramadhani', role: 'Full Stack Developer', email: 'nia@koribali.com', phone: '', status: 'aktif', joinDate: '2024-06-15' },
];

const emptyForm = { name: '', role: '', email: '', phone: '', status: 'aktif' };

const AdminPegawai = () => {
  const [pegawai, setPegawai] = useState(initialPegawai);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('semua');
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [modal, setModal] = useState(null); // null | { mode: 'add' | 'edit', data: {} }
  const [saveConfirm, setSaveConfirm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextId, setNextId] = useState(13);

  const filtered = pegawai.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.role.toLowerCase().includes(search.toLowerCase()) ||
      p.email.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === 'semua' || p.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const safePage = Math.min(currentPage, totalPages);
  const paginated = filtered.slice((safePage - 1) * perPage, safePage * perPage);

  const counts = {
    semua: pegawai.length,
    aktif: pegawai.filter((p) => p.status === 'aktif').length,
    nonaktif: pegawai.filter((p) => p.status === 'nonaktif').length,
  };

  const openAdd = () => { setForm(emptyForm); setModal({ mode: 'add' }); };
  const openEdit = (p) => { setForm({ name: p.name, role: p.role, email: p.email, phone: p.phone || '', status: p.status }); setModal({ mode: 'edit', id: p.id }); };

  const handleSaveClick = () => {
    if (!form.name || !form.role || !form.email || !form.phone) return;
    setSaveConfirm(true);
  };

  const confirmSave = () => {
    if (modal.mode === 'add') {
      setPegawai((prev) => [...prev, { id: nextId, ...form, joinDate: new Date().toISOString().slice(0, 10) }]);
      setNextId((n) => n + 1);
    } else {
      setPegawai((prev) => prev.map((p) => p.id === modal.id ? { ...p, ...form } : p));
    }
    setSaveConfirm(false);
    setModal(null);
  };



  const handleDelete = () => {
    setPegawai((prev) => prev.filter((p) => p.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  const initials = (name) => name.split(' ').slice(0, 2).map((n) => n[0]).join('').toUpperCase();

  return (
    <>
      <Helmet>
        <title>Kelola Pegawai | Admin Koribali</title>
      </Helmet>

      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Kelola Pegawai</h1>
          <p className="text-slate-400 text-sm">Kelola akun dan akses seluruh pegawai.</p>
        </div>
        <button
          onClick={openAdd}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2.5 rounded-xl transition-colors text-sm"
        >
          <Plus className="w-4 h-4" />
          Tambah Pegawai
        </button>
      </div>

      {/* Tab Filter */}
      <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-2xl p-1.5 mb-6 overflow-x-auto">
        {[
          { key: 'semua', label: 'Semua', icon: Users, color: 'text-blue-400' },
          { key: 'aktif', label: 'Aktif', icon: UserCheck, color: 'text-emerald-400' },
          { key: 'nonaktif', label: 'Nonaktif', icon: UserX, color: 'text-red-400' },
        ].map(({ key, label, icon: Icon, color }) => {
          const isActive = filterStatus === key;
          return (
            <button
              key={key}
              onClick={() => { setFilterStatus(key); setCurrentPage(1); }}
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
              placeholder="Cari nama, jabatan, atau email..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
              className="w-full bg-slate-950/50 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-left text-sm text-slate-400">
            <thead className="bg-slate-950/50 text-slate-300 uppercase text-xs font-semibold">
              <tr>
                <th className="px-4 sm:px-6 py-3.5 w-10">No</th>
                <th className="px-4 sm:px-6 py-3.5">Pegawai</th>
                <th className="px-4 sm:px-6 py-3.5 hidden sm:table-cell">Email</th>
                <th className="px-4 sm:px-6 py-3.5 hidden lg:table-cell">Nomor WA</th>
                <th className="px-4 sm:px-6 py-3.5 hidden md:table-cell">Bergabung</th>
                <th className="px-4 sm:px-6 py-3.5">Status</th>
                <th className="px-4 sm:px-6 py-3.5 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-16 text-center text-slate-500">Tidak ada pegawai ditemukan.</td>
                </tr>
              ) : (
                paginated.map((p, index) => (
                  <tr key={p.id} className="hover:bg-slate-800/20 transition-colors">
                    <td className="px-4 sm:px-6 py-3.5 text-slate-500 text-xs font-medium">
                      {(safePage - 1) * perPage + index + 1}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold shrink-0">
                          {initials(p.name)}
                        </div>
                        <div>
                          <p className="font-medium text-white text-sm">{p.name}</p>
                          <p className="text-xs text-slate-500">{p.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 hidden sm:table-cell text-xs">{p.email}</td>
                    <td className="px-4 sm:px-6 py-3.5 hidden lg:table-cell text-xs">{p.phone || '-'}</td>
                    <td className="px-4 sm:px-6 py-3.5 hidden md:table-cell whitespace-nowrap text-xs">
                      {new Date(p.joinDate).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border whitespace-nowrap ${
                        p.status === 'aktif'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                          : 'bg-red-500/10 text-red-400 border-red-500/20'
                      }`}>
                        {p.status === 'aktif' ? 'Aktif' : 'Nonaktif'}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-3.5">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => openEdit(p)}
                          title="Edit"
                          className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium text-blue-400 hover:text-white bg-blue-500/10 hover:bg-blue-500 rounded-lg transition-colors"
                        >
                          <Edit className="w-3.5 h-3.5 shrink-0" />
                          <span className="hidden sm:inline">Edit</span>
                        </button>

                        <button
                          onClick={() => setDeleteTarget(p)}
                          title="Hapus"
                          className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium text-red-400 hover:text-white bg-red-500/10 hover:bg-red-500 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5 shrink-0" />
                          <span className="hidden sm:inline">Hapus</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
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

      {/* Add/Edit Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setModal(null)} />
          <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <button onClick={() => setModal(null)} className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
              <X className="w-4 h-4" />
            </button>
            <h3 className="text-lg font-bold text-white mb-5">{modal.mode === 'add' ? 'Tambah Pegawai' : 'Edit Pegawai'}</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Nama Lengkap <span className="text-red-400">*</span></label>
                <input type="text" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="Masukkan nama lengkap..." className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Jabatan <span className="text-red-400">*</span></label>
                <input type="text" value={form.role} onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))} placeholder="Masukkan jabatan..." className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Email <span className="text-red-400">*</span></label>
                <input type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder="nama@koribali.com" className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Nomor WA / HP <span className="text-red-400">*</span></label>
                <input type="text" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} placeholder="081234567890" className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Status</label>
                <select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value }))} className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors cursor-pointer">
                  <option value="aktif" className="bg-slate-900 text-white">Aktif</option>
                  <option value="nonaktif" className="bg-slate-900 text-white">Nonaktif</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setModal(null)} className="flex-1 px-4 py-2.5 text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors">Batal</button>
              <button onClick={handleSaveClick} disabled={!form.name || !form.role || !form.email || !form.phone} className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl transition-colors">
                {modal.mode === 'add' ? 'Tambah' : 'Simpan'}
              </button>
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
                <h3 className="text-lg font-bold text-white">Hapus Pegawai?</h3>
                <p className="text-sm text-slate-400">Akun ini akan dihapus permanen.</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 bg-slate-800/50 rounded-xl px-4 py-3 mb-6">
              <span className="font-semibold text-white">{deleteTarget.name}</span> · {deleteTarget.role}
            </p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteTarget(null)} className="flex-1 px-4 py-2.5 text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors">Batal</button>
              <button onClick={handleDelete} className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-500 rounded-xl transition-colors">Ya, Hapus</button>
            </div>
          </div>
        </div>
      )}

      {/* Save Confirm Modal */}
      {saveConfirm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-sm p-6 shadow-2xl relative">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 shrink-0">
              <CheckCircle className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{modal?.mode === 'add' ? 'Tambah Pegawai?' : 'Simpan Perubahan?'}</h3>
            <p className="text-slate-400 text-sm mb-6">
              {modal?.mode === 'add'
                ? 'Apakah Anda yakin ingin menambahkan pegawai ini ke sistem?'
                : 'Apakah Anda yakin ingin menyimpan perubahan data pegawai ini?'}
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setSaveConfirm(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700"
              >
                Batal
              </button>
              <button
                onClick={confirmSave}
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-xl transition-colors shadow-lg shadow-emerald-500/20"
              >
                Ya, Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPegawai;
