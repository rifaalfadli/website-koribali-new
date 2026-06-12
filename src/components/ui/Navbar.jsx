import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Menu,
  X,
  Globe,
  ChevronDown,
  Globe2,
  Smartphone,
  PenTool,
  Sun,
  Moon,
} from "lucide-react";
import { services } from "../../data/services";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.services"), path: "/layanan" },
    { name: t("nav.projects"), path: "/project" },
    { name: t("nav.partners"), path: "/mitra" },
    { name: t("nav.about"), path: "/tentang-kami" },
    { name: t("nav.insight"), path: "/insight" },
  ];

  const languages = [
    { code: "id", label: "Indonesia" },
    { code: "en", label: "English" },
    { code: "ja", label: "日本語" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      if (
        isServicesDropdownOpen &&
        !event.target.closest(".services-dropdown-container")
      ) {
        setIsServicesDropdownOpen(false);
      }
      if (
        isLangDropdownOpen &&
        !event.target.closest(".lang-dropdown-container")
      ) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isServicesDropdownOpen, isLangDropdownOpen]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsLangDropdownOpen(false);

    // Set Google Translate cookie to auto-translate the whole DOM
    const domain = window.location.hostname;
    // Format: /source_lang/target_lang
    const targetLang = code === "ja" ? "ja" : code === "en" ? "en" : "id";

    if (targetLang === "id") {
      // Clear translation if switching back to ID
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      if (domain !== "localhost") {
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
      }
    } else {
      // Set translation target
      document.cookie = `googtrans=/id/${targetLang}; path=/;`;
      if (domain !== "localhost") {
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

  const isHomePage = location.pathname === "/";
  // Navbar transparan hanya di halaman home (ada HeroSection foto di bawahnya).
  // Di halaman lain langsung solid agar teks tetap terbaca.
  const isNavTransparent = isHomePage && !isScrolled && !isMobileMenuOpen;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isNavTransparent
          ? "bg-transparent"
          : "bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <img
              src="/logo-koribali.svg"
              alt="Koribali Logo"
              className="h-12 w-12 object-contain"
            />
            <span
              className={`text-2xl font-bold font-display tracking-tight transition-colors duration-300 ${
                isNavTransparent
                  ? "text-white"
                  : "text-slate-900 dark:text-white"
              }`}
            >
              KORIBALI
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 h-full">
            {navLinks.map((link) => {
              if (link.path === "/layanan") {
                return (
                  <div
                    key={link.path}
                    className="flex items-center h-full group services-dropdown-container"
                  >
                    <button
                      onClick={() =>
                        setIsServicesDropdownOpen(!isServicesDropdownOpen)
                      }
                      className={`flex items-center text-sm font-medium transition-colors hover:text-blue-500 py-6 focus:outline-none ${
                        location.pathname.startsWith("/layanan") ||
                        isServicesDropdownOpen
                          ? "text-blue-500"
                          : isNavTransparent
                            ? "text-white/90 hover:text-white"
                            : "text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                          isServicesDropdownOpen
                            ? "rotate-180 text-blue-500"
                            : ""
                        }`}
                      />
                    </button>

                    {/* Mega Menu Dropdown */}
                    <div
                      className={`fixed left-1/2 -translate-x-1/2 top-[85px] w-[890px] max-w-[95vw] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[1.5rem] shadow-2xl shadow-slate-300/50 dark:shadow-black/80 overflow-hidden transition-all duration-300 origin-top ${
                        isServicesDropdownOpen
                          ? "opacity-100 scale-100 visible"
                          : "opacity-0 scale-95 invisible"
                      }`}
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-3 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                          <h3 className="text-sm font-medium text-slate-900 dark:text-white">
                            Layanan Kami
                          </h3>
                          <Link
                            to="/layanan"
                            className="text-blue-500 hover:text-blue-400 text-sm font-medium flex items-center transition-colors"
                            onClick={() => setIsServicesDropdownOpen(false)}
                          >
                            Lihat Semua
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          {services.map((service, idx) => (
                            <Link
                              key={service.id}
                              to={`/layanan/${service.id}`}
                              className="group/item block"
                              onClick={() => setIsServicesDropdownOpen(false)}
                            >
                              <div className="flex flex-row items-start gap-3 p-2 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-300 border border-transparent">
                                <div className="flex-shrink-0 w-14 h-14 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center text-blue-500 group-hover/item:bg-blue-600 group-hover/item:text-white group-hover/item:border-blue-500 transition-all duration-300">
                                  {renderServiceIcon(idx)}
                                </div>
                                <div className="flex flex-col pt-1">
                                  <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-1.5 group-hover/item:text-blue-500 transition-colors leading-tight">
                                    {service.title}
                                  </h4>
                                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
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
                  className={`text-sm font-medium transition-colors hover:text-blue-500 flex items-center h-full ${
                    location.pathname === link.path
                      ? "text-blue-500"
                      : isNavTransparent
                        ? "text-white/90 hover:text-white"
                        : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 hover:scale-105 ${
                isNavTransparent
                  ? "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-blue-400"
                  : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400"
              }`}
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* Language Switcher */}
            <div className="relative lang-dropdown-container">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className={`flex items-center transition-colors ${
                  isNavTransparent
                    ? "text-white/90 hover:text-white"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Globe className="w-5 h-5 mr-1" strokeWidth={1.5} />
                <span className="text-sm font-medium uppercase">
                  {i18n.language}
                </span>
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl overflow-hidden py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        i18n.language === lang.code
                          ? "bg-slate-100 dark:bg-slate-800 text-blue-500 font-medium"
                          : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Tombol Hubungi Kami */}
            <Link to="/kontak">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5">
                {t("common.contactUs")}
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center w-9 h-9 rounded-full border transition-colors ${
                isNavTransparent
                  ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
                  : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-blue-500"
              }`}
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors ${
                isNavTransparent
                  ? "text-white hover:text-white/80"
                  : "text-slate-600 dark:text-slate-300 hover:text-blue-500"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Tidak Ada Perubahan Signifikan Di Sini) */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "80px" }}
      >
        <div className="flex flex-col p-6 space-y-6 overflow-y-auto h-[calc(100vh-80px)]">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              if (link.path === "/layanan") {
                return (
                  <div key={link.path} className="flex flex-col">
                    <button
                      onClick={() =>
                        setIsMobileServicesOpen(!isMobileServicesOpen)
                      }
                      className={`flex items-center justify-between text-lg font-medium w-full text-left pb-2 transition-colors ${
                        location.pathname.startsWith("/layanan")
                          ? "text-blue-500"
                          : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isMobileServicesOpen ? "rotate-180 text-blue-500" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isMobileServicesOpen
                          ? "max-h-[500px] opacity-100 mb-2"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="flex flex-col space-y-4 pl-4 border-l-2 border-slate-200 dark:border-slate-800 py-2 mt-2">
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            to={`/layanan/${service.id}`}
                            className="text-slate-500 dark:text-slate-400 hover:text-blue-400 text-sm block transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                        <Link
                          to="/layanan"
                          className="text-blue-500 hover:text-blue-400 text-sm font-semibold pt-2 block transition-colors"
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
                  className={`text-lg font-medium pb-2 transition-colors ${
                    location.pathname === link.path
                      ? "text-blue-500"
                      : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex space-x-4 pt-6 border-t border-slate-200 dark:border-slate-800/80">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  i18n.language === lang.code
                    ? "bg-blue-500/10 text-blue-500 border border-blue-500/30"
                    : "bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <div className="pt-4 pb-10">
            <Link
              to="/kontak"
              className="block w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white w-full py-3.5 rounded-full text-base font-semibold transition-all duration-300">
                {t("common.contactUs")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
