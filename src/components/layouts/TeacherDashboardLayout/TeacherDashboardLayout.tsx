import React, { useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../store/useAuthStore';

export const TeacherDashboardLayout: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-gray-100 antialiased transition-colors duration-300">
      {/* Sidebar Navigation */}
      <aside className="w-72 hidden md:flex flex-col h-full bg-white dark:bg-[#0f160c] border-r border-gray-200 dark:border-[#2e4328]/50 flex-shrink-0">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 shadow-lg shadow-primary/20" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCcKQmiALq-miZcQxcFdSiIeO3YwV2oY8iRoRSzd4Rb1MM9dMbRwiU5SK7xrVYFsq4tBKgMXw-HZBxehaqrqsLNGpU-cdJ60ZAmYrhDAxNrpr-unXfRv4Vn5u7KChPppwaL9EQC7wXnynxDwgrZ9OplaZzDgkHClREmS_yUJSwcUkEGoGtSmNn15ao-IOO6xpcA1wSy4Y-zFHtMu2HO-AHD93MscLUCkhz_mpIPVr6nF8fcnLREUg6xa4BadlgSC2P_eKWK5UD538")' }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">GyaanSetu</h1>
              <p className="text-gray-500 dark:text-[#a2c398] text-xs font-medium uppercase tracking-wider">Teacher Portal</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            <Link to="/teacher/dashboard" className="flex items-center gap-4 px-4 py-3 rounded-full bg-primary/15 text-primary-dark dark:text-primary transition-colors group">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
              <span className="text-sm font-bold">Dashboard</span>
            </Link>
            <Link to="/teacher/students" className="flex items-center gap-4 px-4 py-3 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#2e4328]/50 hover:text-slate-900 dark:hover:text-white transition-all group">
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">groups</span>
              <span className="text-sm font-medium">Students</span>
            </Link>
            <Link to="/teacher/lessons" className="flex items-center gap-4 px-4 py-3 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#2e4328]/50 hover:text-slate-900 dark:hover:text-white transition-all group">
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">menu_book</span>
              <span className="text-sm font-medium">Lessons</span>
            </Link>
            <Link to="/teacher/reports" className="flex items-center gap-4 px-4 py-3 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#2e4328]/50 hover:text-slate-900 dark:hover:text-white transition-all group">
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">assignment</span>
              <span className="text-sm font-medium">Reports</span>
            </Link>
            <Link to="/teacher/settings" className="flex items-center gap-4 px-4 py-3 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#2e4328]/50 hover:text-slate-900 dark:hover:text-white transition-all group">
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">settings</span>
              <span className="text-sm font-medium">Settings</span>
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-6">
          <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-primary rounded-full text-white">
                <span className="material-symbols-outlined text-[20px]">headset_mic</span>
              </div>
              <div>
                <p className="text-sm font-bold dark:text-white">Need Help?</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Contact Support</p>
              </div>
            </div>
            <button className="w-full py-2 bg-white dark:bg-[#2e4328] text-xs font-bold rounded-lg shadow-sm hover:shadow-md transition-shadow dark:text-white text-slate-800">
              Open Ticket
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto relative flex flex-col">
        {/* Header Section */}
        <header className="sticky top-0 z-30 bg-background-light/80 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-[#2e4328]/30 px-6 py-4 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                Welcome back, Harpreet
              </h2>
              <p className="text-sm text-gray-500 dark:text-[#a2c398] font-medium flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                October 24, 2023
              </p>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              {/* Search Bar */}
              <div className="relative w-full md:w-96 group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">search</span>
                </div>
                <input 
                  className="block w-full pl-10 pr-3 py-2.5 border-none rounded-full leading-5 bg-white dark:bg-[#1c2619] text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 sm:text-sm shadow-sm transition-all" 
                  placeholder="Search students, lessons, or reports..." 
                  type="text"
                />
              </div>
              {/* Cloud Sync Indicator */}
              <button className="hidden lg:flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1c2619] rounded-full shadow-sm border border-gray-100 dark:border-[#2e4328] group hover:border-primary/50 transition-colors">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </div>
                <span className="text-xs font-bold text-slate-700 dark:text-white whitespace-nowrap">Sync: Online</span>
              </button>
              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 rounded-full bg-white dark:bg-[#2e4328] text-slate-800 dark:text-white">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <Outlet />
      </main>
    </div>
  );
};
