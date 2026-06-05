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

import Login from './pages/dashboard/Login';
import DashboardLayout from './components/dashboard/DashboardLayout';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import PegawaiDashboard from './pages/dashboard/PegawaiDashboard';

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
      <Route path="/kontak" element={<Layout><Contact /></Layout>} />
      
      {/* Auth & Dashboard Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/admin/*" element={
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            {/* Placeholder routes for nested paths */}
            <Route path="*" element={<div className="p-8 text-center text-slate-400">Sedang dalam pengembangan (Admin)</div>} />
          </Routes>
        </DashboardLayout>
      } />
      <Route path="/dashboard/pegawai/*" element={
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<PegawaiDashboard />} />
            {/* Placeholder routes for nested paths */}
            <Route path="*" element={<div className="p-8 text-center text-slate-400">Sedang dalam pengembangan (Pegawai)</div>} />
          </Routes>
        </DashboardLayout>
      } />

      {/* 404 Route */}
      <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>
  );
}

export default App;
