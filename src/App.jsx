import { Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

import Layout from './components/ui/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Partners from './pages/Partners';
import About from './pages/About';
import Contact from './pages/Contact';
import Insight from './pages/Insight';
import InsightDetail from './pages/InsightDetail';
import NotFound from './pages/NotFound';
import Team from './pages/Team';
import Technology from './pages/Technology';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Faq from './pages/Faq';

import Login from './pages/dashboard/Login';
import DashboardLayout from './components/dashboard/DashboardLayout';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import AdminArtikel from './pages/dashboard/admin/AdminArtikel';
import AdminPegawai from './pages/dashboard/admin/AdminPegawai';
import AdminPesan from './pages/dashboard/admin/AdminPesan';
import AdminProfil from './pages/dashboard/admin/AdminProfil';
import AdminAkun from './pages/dashboard/admin/AdminAkun';
import PegawaiDashboard from './pages/dashboard/PegawaiDashboard';
import PegawaiArtikel from './pages/dashboard/pegawai/PegawaiArtikel';
import PegawaiArtikelTambah from './pages/dashboard/pegawai/PegawaiArtikelTambah';
import PegawaiArtikelEdit from './pages/dashboard/pegawai/PegawaiArtikelEdit';
import PegawaiProfile from './pages/dashboard/pegawai/PegawaiProfile';

function App() {
  const { i18n } = useTranslation();

  // Handle route param logic if we want like /en/services (skipping complex sync for now)
  // Let's use simple paths since the user requested /id, /en, /ja as roots but also specified standard paths like /layanan
  // We'll stick to standard paths and just use i18next language detector for translations

  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/layanan" element={<Layout><Services /></Layout>} />
      <Route path="/layanan/:slug" element={<Layout><ServiceDetail /></Layout>} />
      <Route path="/project" element={<Layout><Projects /></Layout>} />
      <Route path="/project/:slug" element={<Layout><ProjectDetail /></Layout>} />
      <Route path="/mitra" element={<Layout><Partners /></Layout>} />
      <Route path="/tentang-kami" element={<Layout><About /></Layout>} />
      <Route path="/insight" element={<Layout><Insight /></Layout>} />
      <Route path="/insight/:slug" element={<Layout><InsightDetail /></Layout>} />
      <Route path="/kontak" element={<Layout hideCTA={true}><Contact /></Layout>} />
      
      {/* New Footer Linked Pages */}
      <Route path="/tim-kami" element={<Layout><Team /></Layout>} />
      <Route path="/teknologi" element={<Layout><Technology /></Layout>} />
      <Route path="/privasi" element={<Layout><Privacy /></Layout>} />
      <Route path="/syarat" element={<Layout><Terms /></Layout>} />
      <Route path="/faq" element={<Layout><Faq /></Layout>} />
      
      {/* Auth & Dashboard Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/admin/*" element={
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="artikel" element={<AdminArtikel />} />
            <Route path="pegawai" element={<AdminPegawai />} />
            <Route path="pesan" element={<AdminPesan />} />
            <Route path="profil" element={<AdminProfil />} />
            <Route path="akun" element={<AdminAkun />} />
          </Routes>
        </DashboardLayout>
      } />
      <Route path="/dashboard/pegawai/*" element={
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<PegawaiDashboard />} />
            <Route path="artikel" element={<PegawaiArtikel />} />
            <Route path="artikel/tambah" element={<PegawaiArtikelTambah />} />
            <Route path="artikel/edit/:id" element={<PegawaiArtikelEdit />} />
            <Route path="profil" element={<PegawaiProfile />} />
          </Routes>
        </DashboardLayout>
      } />

      {/* 404 Route */}
      <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>
  );
}

export default App;
