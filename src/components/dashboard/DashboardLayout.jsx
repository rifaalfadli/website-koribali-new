import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  UserCircle,
  PenTool,
  Inbox,
  CheckCircle,
  XCircle,
  Clock,
  Mail,
} from "lucide-react";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const location = useLocation();

  const pegawaiNotifications = [
    {
      id: 1,
      type: 'approved',
      title: 'Artikel Disetujui',
      message: 'Artikel "Pengenalan Integrasi BIM" telah disetujui dan dipublikasikan.',
      time: '10 menit yang lalu'
    },
    {
      id: 2,
      type: 'rejected',
      title: 'Artikel Ditolak',
      message: 'Artikel "Masa Depan AI di Bali" perlu direvisi. Cek catatan dari Admin.',
      time: '2 jam yang lalu'
    }
  ];

  const adminNotifications = [
    {
      id: 3,
      type: 'review',
      title: 'Menunggu Review',
      message: 'Artikel "Penerapan AI dalam Rekayasa Teknik" perlu ditinjau.',
      time: '15 menit yang lalu'
    },
    {
      id: 4,
      type: 'message',
      title: 'Pesan Masuk Baru',
      message: 'Anda menerima pesan dari Andi Permana.',
      time: '1 jam yang lalu'
    }
  ];

  const activeNotifications = location.pathname.includes("/admin") ? adminNotifications : pegawaiNotifications;

  const getNotifIcon = (type) => {
    switch (type) {
      case 'approved': return <CheckCircle className="w-4 h-4" />;
      case 'rejected': return <XCircle className="w-4 h-4" />;
      case 'review': return <Clock className="w-4 h-4" />;
      case 'message': return <Mail className="w-4 h-4" />;
      default: return <Bell className="w-4 h-4" />;
    }
  };

  const getNotifColorClasses = (type) => {
    switch (type) {
      case 'approved': return { bg: 'bg-emerald-500/10 text-emerald-400', text: 'text-emerald-400' };
      case 'rejected': return { bg: 'bg-red-500/10 text-red-400', text: 'text-red-400' };
      case 'review': return { bg: 'bg-amber-500/10 text-amber-400', text: 'text-amber-400' };
      case 'message': return { bg: 'bg-blue-500/10 text-blue-400', text: 'text-blue-400' };
      default: return { bg: 'bg-slate-500/10 text-slate-400', text: 'text-slate-400' };
    }
  };

  const getNotifPath = (type) => {
    switch (type) {
      case 'approved':
      case 'rejected':
        return "/dashboard/pegawai/artikel";
      case 'review':
        return "/dashboard/admin/artikel";
      case 'message':
        return "/dashboard/admin/pesan";
      default:
        return location.pathname.includes("/admin") ? "/dashboard/admin" : "/dashboard/pegawai";
    }
  };

  const navigate = useNavigate();

  const isAdmin = location.pathname.includes("/admin");
  const role = isAdmin ? "Admin" : "Pegawai";
  const name = isAdmin ? "Super Admin" : "John Engineer";

  const adminLinks = [
    { name: "Dashboard", path: "/dashboard/admin", icon: LayoutDashboard },
    { name: "Kelola Artikel", path: "/dashboard/admin/artikel", icon: FileText },
    { name: "Kelola Pegawai", path: "/dashboard/admin/pegawai", icon: Users },
    { name: "Pesan Masuk", path: "/dashboard/admin/pesan", icon: Inbox, badge: 2 },
    { name: "Profil Perusahaan", path: "/dashboard/admin/profil", icon: Settings },
  ];

  const pegawaiLinks = [
    { name: "Dashboard", path: "/dashboard/pegawai", icon: LayoutDashboard },
    {
      name: "Artikel Saya",
      path: "/dashboard/pegawai/artikel",
      icon: FileText,
    },
    {
      name: "Tambah Artikel",
      path: "/dashboard/pegawai/artikel/tambah",
      icon: PenTool,
    },
  ];

  const navLinks = isAdmin ? adminLinks : pegawaiLinks;

  const [logoutModal, setLogoutModal] = useState(false);

  const handleLogoutClick = () => {
    setLogoutModal(true);
  };

  const confirmLogout = () => {
    setLogoutModal(false);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 border-r border-slate-800 transform transition-transform duration-300 ease-in-out flex flex-col
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/logo-koribali.svg"
              alt="Koribali Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold text-white font-display tracking-tight">
              KORIBALI
            </span>
          </Link>
          <button
            className="lg:hidden text-slate-400 hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4">
          <div className="mb-6 px-2">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Menu Utama
            </p>
            <div className="space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                      ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      : "text-slate-400 hover:text-white hover:bg-slate-800"
                      }`}
                  >
                    <span className="flex items-center">
                      <Icon className="w-4 h-4 mr-3 shrink-0" />
                      {link.name}
                    </span>
                    {link.badge > 0 && (
                      <span className="ml-2 min-w-[20px] h-5 px-1.5 flex items-center justify-center rounded-full text-[10px] font-bold bg-blue-500 text-white leading-none">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-slate-800">
          <button
            onClick={handleLogoutClick}
            className="flex items-center w-full px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 transition-colors"
          >
            <LogOut className="w-4 h-4 mr-3" />
            Keluar
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64 transition-all duration-300">
        {/* Topbar */}
        <header className="h-16 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-30">
          <div className="flex items-center">
            <button
              className="lg:hidden text-slate-400 hover:text-white mr-4"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-bold text-white hidden sm:block">
              {navLinks.find((l) => l.path === location.pathname)?.name ||
                (location.pathname.includes('/profil') ? "Profil Saya" : "Dashboard")}
            </h2>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-slate-400 hover:text-white transition-colors rounded-xl hover:bg-slate-800/50"
              >
                <Bell className="w-5 h-5" />
                {hasUnread && <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full border border-slate-900"></span>}
              </button>

              {/* Notification Dropdown */}
              {showNotifications && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowNotifications(false)}
                  />
                  <div className="absolute right-0 mt-2 w-80 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl shadow-black/40 z-50 overflow-hidden transform origin-top-right transition-all">
                    <div className="px-4 py-3 border-b border-slate-800 bg-slate-900 flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white">Notifikasi</h3>
                      {hasUnread && <span className="text-xs font-medium bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">2 Baru</span>}
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {activeNotifications.map((notif) => {
                        const colors = getNotifColorClasses(notif.type);
                        return (
                          <Link
                            key={notif.id}
                            to={getNotifPath(notif.type)}
                            onClick={() => setShowNotifications(false)}
                            className="block p-4 border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors cursor-pointer group"
                          >
                            <div className="flex gap-3 items-start">
                              <div className={`mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${colors.bg}`}>
                                {getNotifIcon(notif.type)}
                              </div>
                              <div>
                                <p className={`text-sm font-semibold mb-0.5 ${colors.text}`}>
                                  {notif.title}
                                </p>
                                <p className="text-xs text-slate-400 leading-relaxed mb-2 group-hover:text-slate-300 transition-colors">
                                  {notif.message}
                                </p>
                                <p className="text-[10px] text-slate-500 font-medium">{notif.time}</p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="p-2 bg-slate-900 border-t border-slate-800">
                      <button
                        onClick={() => {
                          setHasUnread(false);
                          setShowNotifications(false);
                        }}
                        className="w-full py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors text-center rounded-xl hover:bg-slate-800"
                      >
                        Tandai semua sudah dibaca
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="h-8 w-px bg-slate-800 mx-2"></div>

            <Link to={isAdmin ? "/dashboard/admin/akun" : "/dashboard/pegawai/profil"} className="flex items-center space-x-3 hover:bg-slate-800/50 py-1.5 px-3 -mr-3 rounded-xl transition-colors cursor-pointer">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-white leading-tight">
                  {name}
                </p>
                <p className="text-xs text-blue-400">{role}</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400">
                <UserCircle className="w-6 h-6" />
              </div>
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>

      {/* Logout Confirmation Modal */}
      {logoutModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-sm p-6 shadow-2xl relative">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
              <LogOut className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Konfirmasi Logout</h3>
            <p className="text-slate-400 text-sm mb-6">
              Apakah Anda yakin ingin keluar dari sesi ini? Anda harus login kembali untuk mengakses dashboard.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setLogoutModal(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700"
              >
                Batal
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2.5 bg-red-600 hover:bg-red-500 text-white text-sm font-medium rounded-xl transition-colors shadow-lg shadow-red-500/20"
              >
                Ya, Keluar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
