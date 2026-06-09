import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown } from 'lucide-react';
import { company } from '../data/company';
import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import PageHero from '../components/ui/PageHero';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pesan berhasil dikirim! Tim kami akan segera menghubungi Anda.');
    setFormData({ name: '', email: '', whatsapp: '', service: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Hubungi Kami | Koribali</title>
        <meta name="description" content="Hubungi Koribali untuk konsultasi proyek infrastruktur dan IT Anda." />
      </Helmet>

      <PageHero
        title="Hubungi Kami"
        description="Tim pakar kami siap mendengarkan dan merancang solusi terbaik untuk kebutuhan Anda."
        breadcrumbs={[{ label: 'Kontak' }]}
      />

      <div className="pt-10">
        <SectionWrapper className="pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Form */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-xl shadow-950/50">
              <h3 className="text-2xl font-bold text-white mb-6 font-display">Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Nama Lengkap *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-400 mb-2">No. WhatsApp</label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="0812xxxx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-400 mb-2">Layanan yang Dibutuhkan</label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none pr-10"
                    >
                      <option value="" disabled>Pilih Layanan</option>
                      <option value="civil">Civil Engineering</option>
                      <option value="it">IT & Digital Solutions</option>
                      <option value="data">Data & Analytics</option>
                      <option value="other">Konsultasi Umum</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Pesan Anda *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    placeholder="Ceritakan detail proyek atau pertanyaan Anda..."
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" className="w-full group">
                  Kirim Pesan
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Info & Map */}
            <div className="flex flex-col space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 text-blue-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="text-white font-bold mb-2">Alamat Kantor</h4>
                  <p className="text-slate-400 text-sm">{company.address}</p>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 text-blue-400">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h4 className="text-white font-bold mb-2">Jam Operasional</h4>
                  <p className="text-slate-400 text-sm">{company.hours}</p>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 text-blue-400">
                    <Phone className="w-6 h-6" />
                  </div>

                  <h4 className="text-white font-bold mb-2">
                    Telepon / WhatsApp
                  </h4>

                  <p className="text-slate-400 text-sm mb-2">
                    {company.phone}
                  </p>

                  <a
                    href={`https://wa.me/${company.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 text-sm font-medium hover:underline"
                  >
                    Chat via WhatsApp →
                  </a>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 text-blue-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h4 className="text-white font-bold mb-2">Email</h4>
                  <p className="text-slate-400 text-sm">{company.email}</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-[300px] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden relative group">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
                  <MapPin className="w-10 h-10 mb-3 text-slate-600 group-hover:text-blue-500 transition-colors" />
                  <span className="font-medium">Google Maps Placeholder</span>
                  <span className="text-sm">Denpasar, Bali</span>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center flex flex-col items-center justify-center mt-6">
                <h4 className="text-white font-bold mb-2">
                  Lebih suka langsung chat?
                </h4>

                <p className="text-slate-400 text-sm mb-4">
                  Tim kami sangat responsif dan siap berdiskusi via WhatsApp.
                </p>

                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 px-6 rounded-full transition-all shadow-lg shadow-blue-600/30"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Chat via WhatsApp
                </a>
              </div>
            </div>

          </div>
        </SectionWrapper>
      </div>
    </>
  );
};

export default Contact;