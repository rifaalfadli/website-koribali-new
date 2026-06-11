import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login logic based on email
    if (email.includes('admin')) {
      navigate('/dashboard/admin');
    } else {
      navigate('/dashboard/pegawai');
    }
  };

  return (
    <>
      <Helmet>
        <title>Login Portal | Koribali</title>
      </Helmet>

      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 relative z-10 shadow-2xl shadow-blue-500/5">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white font-display mb-2">Koribali Portal</h1>
            <p className="text-slate-400">Masuk ke sistem manajemen internal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-slate-500" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl pl-11 pr-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="admin@koribali.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-slate-500" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl pl-11 pr-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-slate-400 cursor-pointer">
                <input type="checkbox" className="mr-2 rounded border-slate-700 bg-slate-900 text-blue-500 focus:ring-blue-500" />
                Ingat saya
              </label>
              <a href="#" className="text-blue-400 hover:text-blue-300">Lupa password?</a>
            </div>

            <Button type="submit" variant="primary" className="w-full group">
              Login ke Dashboard
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-xs text-center text-slate-500 mt-6">
              *Gunakan email berisi 'admin' untuk Admin, selain itu Pegawai.
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
