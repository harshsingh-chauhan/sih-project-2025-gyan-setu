import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../../../store/useAuthStore';

export const Profile: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="bg-background-light dark:bg-profile-bg-dark text-slate-900 dark:text-white font-lexend overflow-x-hidden transition-colors duration-200 min-h-screen flex flex-col">
      <div className="relative flex min-h-screen flex-col">
        {/* Top Navigation Bar */}
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 dark:border-b-profile-border-dark bg-background-light dark:bg-profile-bg-dark px-4 py-3 md:px-10">
          <div className="flex items-center gap-4 text-slate-900 dark:text-white">
            <div className="size-8 text-profile-primary flex items-center justify-center">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">GyaanSetu</h2>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-end gap-8">
            <nav className="flex items-center gap-9">
              <Link className="text-sm font-medium leading-normal text-slate-600 hover:text-profile-primary dark:text-white dark:hover:text-profile-primary transition-colors" to="/app/dashboard">{t('common.home')}</Link>
              <Link className="text-sm font-medium leading-normal text-slate-600 hover:text-profile-primary dark:text-white dark:hover:text-profile-primary transition-colors" to="/app/lessons">{t('common.lessons')}</Link>
              <Link className="text-sm font-bold leading-normal text-profile-primary" to="/app/profile">My Profile</Link>
              <Link className="text-sm font-medium leading-normal text-slate-600 hover:text-profile-primary dark:text-white dark:hover:text-profile-primary transition-colors" to="/app/progress">{t('common.progress')}</Link>
            </nav>
            <div className="flex items-center gap-4">
              <button className="flex size-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-profile-border-dark text-slate-900 dark:text-white hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <div 
                className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-profile-primary" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSnfRD6wO6df2P-0_HhiVymFk0tfimYxZiXbJeiLHi7A2tdW7NMGqP1s1cdn38fL9pEjT9hd1Yfw2cwHrYkIphshwRJJQ1mvK-VzKBEQgWoM8apzgURbqhQR4iGfRfaa3ZWNvXv14D6vW78GpOPpUCkOB5RBps-E9XDhbw6GhZCKmKGH-4dvul1PX8RffMMU5NzCCYIgnxxJ1bBPiuQd1u9jmc8GXp5ucZ7F_AFXe-wSI8muG-9iJEgxs5aPXGOlXPaa5QZfcx44")' }}
              ></div>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden text-slate-900 dark:text-white cursor-pointer">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </div>
        </header>

        <main className="flex-1 flex justify-center py-5 px-4 md:px-8 lg:px-40">
          <div className="flex flex-col max-w-[960px] w-full gap-6">
            
            {/* Page Heading & Offline Status */}
            <div className="flex flex-wrap justify-between items-end gap-3 pb-2 border-b border-gray-200 dark:border-profile-border-dark">
              <div className="flex flex-col gap-1">
                <h1 className="text-3xl md:text-[32px] font-bold leading-tight text-slate-900 dark:text-white">Mera Profile</h1>
                <p className="text-slate-500 dark:text-profile-text-sec text-sm font-normal">Manage your details and view progress</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wide border border-green-200 dark:border-green-800">
                <span className="material-symbols-outlined text-sm">cloud_done</span>
                <span>Synced</span>
              </div>
            </div>

            {/* Profile Card */}
            <div className="w-full bg-white dark:bg-profile-surface-dark rounded-xl p-6 shadow-sm border border-gray-100 dark:border-profile-border-dark">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-6 w-full items-center sm:items-start md:items-center text-center sm:text-left">
                  <div className="relative group">
                    <div 
                      className="bg-center bg-no-repeat bg-cover rounded-full size-32 border-4 border-gray-100 dark:border-profile-border-dark shadow-lg" 
                      style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7URHu38hQlVVFmRPxJUlWoFfomuCehl2ppOHb-QHtfSbs_j3_0lMtpv4Zmpk83vv2TLbnLaV_0qXwVDF6eAHTAdO0LuYK7lAF6NNAe8mxKgR4bmLyy1mTRqEg6wDORvtTtJhiWu7t3jj0KC5B7i3CIRIsxSCjETben5FIBhXzUs1OqTvo99ggFmX2MByxG3LSQUMrZEMnqPZV0pvSb-H21S1W6okR8FZogEXk2tniUM2-E-jPAGCzWgC4RI1d2035Gs_hVfqbF2Y")' }}
                    ></div>
                    <button aria-label="Change Avatar" className="absolute bottom-0 right-0 p-2 bg-profile-primary text-black rounded-full shadow-md hover:bg-green-400 transition-colors">
                      <span className="material-symbols-outlined text-sm font-bold">photo_camera</span>
                    </button>
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">{user?.name || 'Rohan Singh'}</h2>
                    <p className="text-slate-500 dark:text-profile-text-sec text-base">{t('dashboard.classInfo')}</p>
                    <div className="inline-flex items-center justify-center sm:justify-start gap-1 mt-1">
                      <span className="material-symbols-outlined text-slate-400 dark:text-gray-500 text-sm">badge</span>
                      <span className="text-slate-400 dark:text-gray-500 text-sm font-mono">ID: {user?.phone || 'NAB-2023-089'}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full md:w-auto shrink-0 flex items-center justify-center gap-2 bg-slate-100 dark:bg-profile-border-dark hover:bg-slate-200 dark:hover:bg-[#3a5a30] text-slate-900 dark:text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors border border-gray-200 dark:border-transparent">
                  <span className="material-symbols-outlined text-lg">edit</span>
                  <span>Edit Details</span>
                </button>
              </div>
            </div>

            {/* Progress Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-profile-primary/10 dark:bg-[#20321b] border border-profile-primary/20 dark:border-profile-border-dark rounded-xl p-5 flex items-center gap-4">
                <div className="size-12 rounded-full bg-profile-primary/20 flex items-center justify-center text-profile-primary">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">42</p>
                  <p className="text-sm text-slate-500 dark:text-profile-text-sec">{t('dashboard.lessonsCompleted')}</p>
                </div>
              </div>
              <div className="bg-orange-50 dark:bg-[#2d2215] border border-orange-100 dark:border-orange-900/30 rounded-xl p-5 flex items-center gap-4">
                <div className="size-12 rounded-full bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center text-orange-600 dark:text-orange-400">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">7 {t('dashboard.currentStreak').split(' ')[1]}</p>
                  <p className="text-sm text-slate-500 dark:text-profile-text-sec">{t('dashboard.currentStreak')}</p>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-[#15232d] border border-blue-100 dark:border-blue-900/30 rounded-xl p-5 flex items-center gap-4">
                <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">5</p>
                  <p className="text-sm text-slate-500 dark:text-profile-text-sec">Badges Earned</p>
                </div>
              </div>
            </div>

            {/* Settings & Info Sections Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Language Preferences */}
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 px-1">
                  <span className="material-symbols-outlined text-profile-primary">translate</span>
                  {t('common.language')} Preference
                </h3>
                <div className="bg-white dark:bg-profile-surface-dark rounded-xl p-6 shadow-sm border border-gray-100 dark:border-profile-border-dark flex flex-col gap-6">
                  <label className="flex flex-col gap-2">
                    <span className="text-slate-700 dark:text-white font-medium">Select Interface Language</span>
                    <div className="relative">
                      <select className="w-full appearance-none rounded-lg bg-gray-50 dark:bg-profile-bg-dark border border-gray-300 dark:border-profile-border-dark text-slate-900 dark:text-white p-4 pr-10 focus:outline-none focus:ring-2 focus:ring-profile-primary focus:border-transparent transition-all">
                        <option value="pa">{t('common.punjabi')} (ਪੰਜਾਬੀ)</option>
                        <option value="hi">{t('common.hindi')} (हिंदी)</option>
                        <option value="en">{t('common.english')}</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500 dark:text-profile-text-sec">
                        <span className="material-symbols-outlined">expand_more</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-profile-text-sec mt-1">This will change the language for menus and navigation.</p>
                  </label>
                  <div className="p-4 rounded-lg bg-profile-primary/10 border border-profile-primary/20 flex gap-3 items-start">
                    <span className="material-symbols-outlined text-profile-primary mt-0.5">info</span>
                    <p className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed">
                      Changes to language settings are saved automatically but may require a page refresh.
                    </p>
                  </div>
                </div>
              </div>

              {/* Personal Information (Read Only) */}
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 px-1">
                  <span className="material-symbols-outlined text-profile-primary">person</span>
                  Personal Information
                </h3>
                <div className="bg-white dark:bg-profile-surface-dark rounded-xl p-6 shadow-sm border border-gray-100 dark:border-profile-border-dark flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-gray-500">Father's Name</span>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-profile-bg-dark border border-gray-200 dark:border-profile-border-dark">
                      <span className="text-slate-900 dark:text-white font-medium">Mr. Gurpreet Singh</span>
                      <span className="material-symbols-outlined text-slate-300 dark:text-gray-600 text-lg">lock</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-gray-500">Date of Birth</span>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-profile-bg-dark border border-gray-200 dark:border-profile-border-dark">
                      <span className="text-slate-900 dark:text-white font-medium">12 August 2009</span>
                      <span className="material-symbols-outlined text-slate-300 dark:text-gray-600 text-lg">lock</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-gray-500">School Name</span>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-profile-bg-dark border border-gray-200 dark:border-profile-border-dark">
                      <span className="text-slate-900 dark:text-white font-medium">Govt High School, Nabha</span>
                      <span className="material-symbols-outlined text-slate-300 dark:text-gray-600 text-lg">domain</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Actions */}
            <div className="pt-6 border-t border-gray-200 dark:border-profile-border-dark flex flex-col md:flex-row gap-4 justify-between items-center">
              <p className="text-sm text-slate-500 dark:text-gray-500 order-2 md:order-1">GyaanSetu Nabha Initiative v2.4.1</p>
              <div className="flex flex-wrap justify-center gap-4 w-full md:w-auto order-1 md:order-2">
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 dark:border-profile-border-dark text-slate-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#20321b] font-medium transition-colors">
                  <span className="material-symbols-outlined text-lg">lock_reset</span>
                  Change Password
                </button>
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 border border-red-200 dark:border-red-900/30 font-medium transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">logout</span>
                  {t('common.logout')}
                </button>
              </div>
            </div>
            <div className="h-10"></div>
          </div>
        </main>
      </div>
    </div>
  );
};

