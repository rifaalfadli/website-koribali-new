import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown, Globe2, Smartphone, PenTool } from 'lucide-react';
import { services } from '../../data/services';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/layanan' },
    { name: t('nav.projects'), path: '/project' },
    { name: t('nav.partners'), path: '/mitra' },
    { name: t('nav.about'), path: '/tentang-kami' },
    { name: t('nav.insight'), path: '/insight' },
  ];

  const languages = [
    { code: 'id', label: 'Indonesia' },
    { code: 'en', label: 'English' },
    { code: 'ja', label: '日本語' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu and dropdowns on route change
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Handle click outside to close the dropdown for better UX
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isServicesDropdownOpen && !event.target.closest('.services-dropdown-container')) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isServicesDropdownOpen]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsLangDropdownOpen(false);
    
    // Set Google Translate cookie to auto-translate the whole DOM
    const domain = window.location.hostname;
    // Format: /source_lang/target_lang
    const targetLang = code === 'ja' ? 'ja' : (code === 'en' ? 'en' : 'id');
    
    if (targetLang === 'id') {
      // Clear translation if switching back to ID
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      if (domain !== 'localhost') {
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
      }
    } else {
      // Set translation target
      document.cookie = `googtrans=/id/${targetLang}; path=/;`;
      if (domain !== 'localhost') {
        document.cookie = `googtrans=/id/${targetLang}; path=/; domain=${domain};`;
      }
    }
    
    // Give cookie a tiny moment to save then reload the DOM
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const renderServiceIcon = (idx) => {
    if (idx === 0) return <Globe2 className="w-6 h-6" />;
    if (idx === 1) return <Smartphone className="w-6 h-6" />;
    return <PenTool className="w-6 h-6" />;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/50'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <img
              src="/logo-koribali.png"
              alt="Koribali Logo"
              className="h-12 w-12 object-contain"
            />
            <span className="text-2xl font-bold font-display text-white tracking-tight">
              KORIBALI
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 h-full">
            {navLinks.map((link) => {
              if (link.path === '/layanan') {
                return (
                  // Menghilangkan 'relative' agar dropdown bisa fixed di tengah layar
                  <div
                    key={link.path}
                    className="flex items-center h-full group services-dropdown-container"
                  >
                    <button
                      onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                      className={`flex items-center text-sm font-medium transition-colors hover:text-red-500 py-6 focus:outline-none ${location.pathname.startsWith('/layanan') || isServicesDropdownOpen ? 'text-red-500' : 'text-slate-300'
                        }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 ml-1 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180 text-red-500' : ''
                          }`}
                      />
                    </button>

                    {/* Mega Menu Dropdown - Menggunakan 'fixed' agar posisinya mutlak di tengah layar */}
                    <div
                      className={`fixed left-1/2 -translate-x-1/2 top-[85px] w-[1100px] max-w-[95vw] bg-slate-900 border border-slate-800 rounded-[1.5rem] shadow-2xl shadow-black/80 overflow-hidden transition-all duration-300 origin-top ${isServicesDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                        }`}
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-3 pb-3 border-b border-slate-800/80">
                          <h3 className="text-sm font-medium text-white">Layanan Kami</h3>
                          <Link
                            to="/layanan"
                            className="text-red-500 hover:text-red-400 text-sm font-medium flex items-center transition-colors"
                            onClick={() => setIsServicesDropdownOpen(false)}
                          >
                            Lihat Semua
                          </Link>
                        </div>

                        {/* Grid disesuaikan dengan referensi gambar (Layout Horizontal) */}
                        <div className="grid grid-cols-1 md:grid-cols-3">
                          {services.map((service, idx) => (
                            <Link
                              key={service.id}
                              to={`/layanan/${service.id}`}
                              className="group/item block"
                              onClick={() => setIsServicesDropdownOpen(false)}
                            >
                              <div className="flex flex-row items-start gap-2 p-2 rounded-2xl hover:bg-slate-800/50 transition-all duration-300 border border-transparent">

                                {/* Ikon Layanan - Berubah menjadi solid merah saat hover */}
                                <div className="flex-shrink-0 w-14 h-14 bg-slate-950 border border-slate-800 rounded-full flex items-center justify-center text-red-500 group-hover/item:bg-red-600 group-hover/item:text-white group-hover/item:border-red-500 group-hover/item:shadow-lg group-hover/item:shadow-red-900/50 transition-all duration-300">
                                  {renderServiceIcon(idx)}
                                </div>

                                {/* Teks Layout - Ukuran disesuaikan */}
                                <div className="flex flex-col pt-1">
                                  <h4 className="text-sm font-medium text-white mb-1.5 group-hover/item:text-red-400 transition-colors leading-tight">
                                    {service.title}
                                  </h4>
                                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                                    {service.shortDescription}
                                  </p>
                                </div>

                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-red-500 flex items-center h-full ${location.pathname === link.path ? 'text-red-500' : 'text-slate-300'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center text-slate-300 hover:text-white transition-colors"
              >
                <Globe className="w-5 h-5 mr-1" strokeWidth={1.5} />
                <span className="text-sm font-medium uppercase">{i18n.language}</span>
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${i18n.language === lang.code
                        ? 'bg-slate-800 text-red-500 font-medium'
                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                        }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Tombol Hubungi Kami versi Gradien Dark Blood */}
            <Link to="/kontak">
              <button className="bg-gradient-to-r from-red-800 to-red-950 hover:from-red-700 hover:to-red-900 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md shadow-red-900/30 hover:shadow-lg hover:shadow-red-900/40 hover:-translate-y-0.5">
                {t('common.contactUs')}
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-red-500 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-900 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ top: '80px' }}
      >
        <div className="flex flex-col p-6 space-y-6 overflow-y-auto h-[calc(100vh-80px)]">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              if (link.path === '/layanan') {
                return (
                  <div key={link.path} className="flex flex-col">
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className={`flex items-center justify-between text-lg font-medium w-full text-left pb-2 transition-colors ${location.pathname.startsWith('/layanan') ? 'text-red-500' : 'text-slate-300 hover:text-white'
                        }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180 text-red-500' : ''
                          }`}
                      />
                    </button>

                    {/* Mobile Accordion Content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-[500px] opacity-100 mb-2' : 'max-h-0 opacity-0'
                        }`}
                    >
                      <div className="flex flex-col space-y-4 pl-4 border-l-2 border-slate-800 py-2 mt-2">
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            to={`/layanan/${service.id}`}
                            className="text-slate-400 hover:text-red-400 text-sm block transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                        <Link
                          to="/layanan"
                          className="text-red-500 hover:text-red-400 text-sm font-semibold pt-2 block transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Lihat Semua Layanan
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium pb-2 transition-colors ${location.pathname === link.path ? 'text-red-500' : 'text-slate-300 hover:text-white'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex space-x-4 pt-6 border-t border-slate-800/80">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${i18n.language === lang.code
                  ? 'bg-red-500/10 text-red-500 border border-red-500/30'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:bg-slate-800'
                  }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <div className="pt-4 pb-10">
            {/* Tombol Hubungi Kami versi Mobile */}
            <Link to="/kontak" className="block w-full" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="bg-gradient-to-r from-red-800 to-red-950 hover:from-red-700 hover:to-red-900 text-white w-full py-3.5 rounded-full text-base font-semibold transition-all duration-300 shadow-md shadow-red-900/30 hover:shadow-lg hover:shadow-red-900/40">
                {t('common.contactUs')}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;