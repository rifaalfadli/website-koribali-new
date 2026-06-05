import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/layanan' },
    { name: t('nav.projects'), path: '/project' },
    { name: t('nav.partners'), path: '/mitra' },
    { name: t('nav.about'), path: '/tentang-kami' },
    { name: t('nav.insight'), path: '/insight' },
  ];

  const languages = [
    { code: 'id', label: 'ID' },
    { code: 'en', label: 'EN' },
    { code: 'ja', label: 'JA' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsLangDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-950/50'
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
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-red-500 ${location.pathname === link.path ? 'text-red-500' : 'text-slate-300' // Menu aktif jadi merah terang agar kontras di bg gelap
                  }`}
              >
                {link.name}
              </Link>
            ))}
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
                <div className="absolute right-0 mt-2 w-24 bg-slate-800 border border-slate-700 rounded-xl shadow-xl overflow-hidden py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full text-left px-4 py-2 text-sm ${i18n.language === lang.code ? 'bg-slate-700 text-red-500' : 'text-slate-300 hover:bg-slate-700/50'
                        }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Tombol Hubungi Kami versi Gradien Dark Blood dengan Shadow Profesional */}
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
              className="text-slate-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-sm transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ top: '80px' }}
      >
        <div className="flex flex-col p-6 space-y-6">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium ${location.pathname === link.path ? 'text-red-500' : 'text-slate-300' // Menu aktif mobile jadi merah
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex space-x-4 pt-6 border-t border-slate-800">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${i18n.language === lang.code ? 'bg-red-500/20 text-red-500 border border-red-500/30' : 'bg-slate-800 text-slate-400'
                  }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <div className="pt-4">
            {/* Tombol Hubungi Kami versi Gradien Dark Blood (Mobile) */}
            <Link to="/kontak" className="block w-full">
              <button className="bg-gradient-to-r from-red-800 to-red-950 hover:from-red-700 hover:to-red-900 text-white w-full py-3 rounded-full text-base font-semibold transition-all duration-300 shadow-md shadow-red-900/30 hover:shadow-lg hover:shadow-red-900/40">
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