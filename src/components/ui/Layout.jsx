import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from './FloatingContact';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-50">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Layout;
