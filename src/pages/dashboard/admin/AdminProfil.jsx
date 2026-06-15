import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Save, CheckCircle, Building2, Phone, Mail, MapPin, Clock, X, Map } from 'lucide-react';

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
  </svg>
);

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.512 5.838L.045 23.487a.75.75 0 00.916.916l5.674-1.466A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.901 0-3.68-.516-5.204-1.415l-.366-.214-3.793.98.997-3.74-.232-.381A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

const initialData = {
  name: 'Koribali',
  tagline: 'Technology Consulting & AI Solutions',
  address: 'Jl. Gatot Subroto Timur No. 123, Denpasar, Bali 80237',
  maps: 'https://maps.google.com/?q=Jl.+Gatot+Subroto+Timur+No.123+Denpasar+Bali',
  email: 'hello@koribali.com',
  phone: '+62 812 3456 7890',
  whatsapp: '6281234567890',
  hours: 'Senin - Jumat: 08:00 - 17:00 WITA',
  linkedin: 'https://linkedin.com/company/koribali',
  instagram: 'https://instagram.com/koribali',
  facebook: 'https://facebook.com/koribali',
  github: 'https://github.com/koribali',
};

const SectionCard = ({ title, children }) => (
  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
    <h3 className="text-base font-semibold text-white mb-5">{title}</h3>
    {children}
  </div>
);

const Field = ({ label, required, hint, children }) => (
  <div>
    <label className="block text-sm font-medium text-slate-300 mb-1.5">
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    {children}
    {hint && <p className="text-xs text-slate-500 mt-1.5">{hint}</p>}
  </div>
);

const Input = ({ icon: Icon, ...props }) => (
  <div className="relative">
    {Icon && <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />}
    <input
      className={`w-full bg-slate-950/50 border border-slate-700 rounded-xl py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors ${Icon ? 'pl-10 pr-4' : 'px-4'}`}
      {...props}
    />
  </div>
);

const AdminProfil = () => {
  const [form, setForm] = useState(initialData);
  const [saved, setSaved] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const set = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const confirmSave = () => {
    setShowConfirm(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <>
      <Helmet>
        <title>Profil Perusahaan | Admin Koribali</title>
      </Helmet>

      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Profil Perusahaan</h1>
          <p className="text-slate-400 text-sm">Kelola informasi dan kontak perusahaan yang tampil di website.</p>
        </div>
        <button
          onClick={() => setShowConfirm(true)}
          className={`inline-flex items-center gap-2 font-medium px-5 py-2.5 rounded-xl transition-all text-sm ${
            saved
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20'
              : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20'
          }`}
        >
          {saved ? <><CheckCircle className="w-4 h-4" /> Tersimpan!</> : <><Save className="w-4 h-4" /> Simpan Perubahan</>}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Identitas */}
        <SectionCard title="Identitas Perusahaan">
          <div className="space-y-4">
            <Field label="Nama Perusahaan" required>
              <Input icon={Building2} value={form.name} onChange={set('name')} placeholder="Nama perusahaan..." />
            </Field>
            <Field label="Tagline">
              <Input value={form.tagline} onChange={set('tagline')} placeholder="Tagline singkat..." />
            </Field>
            <Field label="Jam Operasional">
              <Input icon={Clock} value={form.hours} onChange={set('hours')} placeholder="Senin - Jumat: 08:00 - 17:00 WITA" />
            </Field>
            <Field label="Alamat Kantor">
              <div className="relative">
                <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                <textarea
                  rows={3}
                  value={form.address}
                  onChange={set('address')}
                  placeholder="Alamat lengkap kantor..."
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>
            </Field>
            <Field label="Link Google Maps" hint="URL yang digunakan tombol 'Lihat Lokasi' di website">
              <Input icon={Map} type="url" value={form.maps} onChange={set('maps')} placeholder="https://maps.google.com/?q=..." />
            </Field>
          </div>
        </SectionCard>

        {/* Kontak */}
        <SectionCard title="Informasi Kontak">
          <div className="space-y-4">
            <Field label="Email Utama" required>
              <Input icon={Mail} type="email" value={form.email} onChange={set('email')} placeholder="hello@koribali.com" />
            </Field>
            <Field label="Nomor Telepon">
              <Input icon={Phone} type="tel" value={form.phone} onChange={set('phone')} placeholder="+62 812 xxxx xxxx" />
            </Field>
            <Field label="Nomor WhatsApp" hint="Format: kode negara + nomor tanpa + (contoh: 628123456789). Digunakan untuk tombol chat WA di website.">
              <div className="relative">
                <WhatsAppIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" />
                <input
                  type="tel"
                  value={form.whatsapp}
                  onChange={set('whatsapp')}
                  placeholder="6281234567890"
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </Field>
          </div>
        </SectionCard>

        {/* Media Sosial */}
        <SectionCard title="Media Sosial">
          <div className="space-y-4">
            <Field label="LinkedIn">
              <div className="relative">
                <LinkedinIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0A66C2]" />
                <input type="url" value={form.linkedin} onChange={set('linkedin')} placeholder="https://linkedin.com/company/..." className="w-full bg-slate-950/50 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
            </Field>
            <Field label="Instagram">
              <div className="relative">
                <InstagramIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-400" />
                <input type="url" value={form.instagram} onChange={set('instagram')} placeholder="https://instagram.com/..." className="w-full bg-slate-950/50 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
            </Field>
            <Field label="Facebook">
              <div className="relative">
                <FacebookIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1877F2]" />
                <input type="url" value={form.facebook} onChange={set('facebook')} placeholder="https://facebook.com/..." className="w-full bg-slate-950/50 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
            </Field>
            <Field label="GitHub">
              <div className="relative">
                <GithubIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="url" value={form.github} onChange={set('github')} placeholder="https://github.com/..." className="w-full bg-slate-950/50 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
            </Field>
          </div>
        </SectionCard>

        {/* Preview */}
        <SectionCard title="Preview Info Kontak">
          <div className="space-y-3 text-sm">
            {[
              { icon: Building2, label: form.name, sub: form.tagline },
              { icon: MapPin, label: form.address, link: form.maps },
              { icon: Mail, label: form.email },
              { icon: Phone, label: form.phone },
              { icon: Clock, label: form.hours },
            ].map(({ icon: Icon, label, sub, link }, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline leading-snug">
                      {label || <span className="text-slate-600 italic">Belum diisi</span>}
                    </a>
                  ) : (
                    <p className="text-slate-300 leading-snug">{label || <span className="text-slate-600 italic">Belum diisi</span>}</p>
                  )}
                  {sub && <p className="text-xs text-slate-500 mt-0.5">{sub}</p>}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* Confirm Modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowConfirm(false)} />
          <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <button onClick={() => setShowConfirm(false)} className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Simpan Perubahan?</h3>
                <p className="text-sm text-slate-400">Informasi perusahaan di website akan diperbarui.</p>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowConfirm(false)} className="flex-1 px-4 py-2.5 text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors">Batal</button>
              <button onClick={confirmSave} className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors shadow-lg shadow-emerald-500/20">Ya, Simpan</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminProfil;
