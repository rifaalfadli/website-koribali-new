import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { UserCircle, Mail, Phone, MapPin, Camera, Save, CheckCircle } from 'lucide-react';

const AdminAkun = () => {
  const [saveModal, setSaveModal] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [form, setForm] = useState({
    name: 'Admin Utama',
    email: 'admin@koribali.com',
    phone: '+62 811 1111 1111',
    address: 'Jl. Gatot Subroto Timur No. 123, Denpasar'
  });

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    setSaveModal(true);
  };

  const confirmSave = () => {
    setSaveModal(false);
    alert('Profil berhasil disimpan! (Simulasi)');
  };

  return (
    <>
      <Helmet>
        <title>Akun Saya | Admin Koribali</title>
      </Helmet>

      <div className="space-y-6">
        {/* Header Section */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Akun Saya</h1>
          <p className="text-slate-400 text-sm">Kelola informasi pribadi dan pengaturan keamanan akun Anda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Avatar Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col items-center text-center shadow-xl shadow-black/20 md:col-span-1 h-fit">
            <label htmlFor="avatar-upload" className="relative mb-4 group cursor-pointer block mx-auto">
              <div className="w-32 h-32 rounded-full bg-slate-800 border-4 border-slate-700 flex items-center justify-center text-slate-500 overflow-hidden">
                {avatar ? (
                  <img src={avatar} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <UserCircle className="w-20 h-20" />
                )}
              </div>
              <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <input 
                id="avatar-upload" 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleAvatarChange} 
              />
            </label>
            <h2 className="text-lg font-bold text-white">{form.name}</h2>
            <p className="text-blue-400 text-sm mb-4">Administrator</p>
            <div className="w-full h-px bg-slate-800 mb-4" />
            <div className="w-full space-y-3 text-sm text-slate-400 text-left">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="truncate">{form.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{form.phone}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>{form.address}</span>
              </div>
            </div>
          </div>

          {/* Form Content Wrapper */}
          <div className="space-y-6 md:col-span-2">
            {/* Form Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl shadow-black/20">
              <h3 className="text-base font-bold text-white mb-5">Informasi Pribadi</h3>
              <form onSubmit={handleSaveClick} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Alamat Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Nomor Telepon</label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Alamat Lengkap</label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-colors resize-none"
                />
              </div>
              
              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-5 py-2.5 rounded-xl transition-colors text-sm shadow-lg shadow-emerald-500/20"
                >
                  <Save className="w-4 h-4" />
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>

            {/* Change Password Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl shadow-black/20">
              <h3 className="text-base font-bold text-white mb-5">Keamanan Akun</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('Password berhasil diubah! (Simulasi)'); }} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Password Saat Ini</label>
                  <input
                    type="password"
                    placeholder="Masukkan password saat ini"
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Password Baru</label>
                  <input
                    type="password"
                    placeholder="Masukkan password baru"
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Konfirmasi Password Baru</label>
                  <input
                    type="password"
                    placeholder="Ulangi password baru"
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-colors"
                  />
                </div>
                
                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-medium px-5 py-2.5 rounded-xl transition-colors border border-slate-700 text-sm shadow-lg shadow-black/10"
                  >
                    Perbarui Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Save Confirmation Modal */}
      {saveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-sm p-6 shadow-2xl relative">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Simpan Perubahan?</h3>
            <p className="text-slate-400 text-sm mb-6">
              Apakah Anda yakin ingin menyimpan perubahan pada profil ini?
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setSaveModal(false)}
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

export default AdminAkun;
