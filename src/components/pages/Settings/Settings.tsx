import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../../../store/useAuthStore';

export const Settings: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="bg-background-light dark:bg-settings-bg-dark font-lexend text-white overflow-hidden transition-colors duration-200 h-screen w-full flex flex-col md:flex-row">
      
      {/* Side Navigation */}
      <aside className="w-full md:w-[280px] bg-settings-bg-dark border-r border-settings-border-dark flex-col hidden md:flex h-full overflow-y-auto shrink-0">
        <div className="p-6 flex flex-col h-full justify-between">
          <div className="flex flex-col gap-6">
            {/* Brand Logo Area */}
            <div className="flex items-center gap-3 px-2">
              <div className="size-8 text-settings-primary">
                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
                </svg>
              </div>
              <h2 className="text-white text-xl font-bold tracking-tight">GyaanSetu</h2>
            </div>
            {/* User Profile Summary */}
            <div className="flex gap-3 items-center bg-settings-surface-dark p-3 rounded-xl border border-settings-border-dark">
              <div 
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-gray-700" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxPbOITg8F5PNgvWoPgdCelAcJLaeCg8ZHF2TKhZj1uKwkfw1MXyuoTzZpS336UNnGOmgAEzOJ6xPNiL2Ad7D1y311QQwHOFKPH3vHQP46udHv6emX59wGyjN3UYKw4aJx0z7sgyLNrK0RxKhfZ-QEN4jDqSCj04IBRT8mllvTfZlS6aeXESq1GPp-oleHUsGgVdrAmHwc5m-iFTZ_VBYuphPxqN9lcq222iT_QYkh8LdqxGVFjvwmqmaFJmP65ZqBBL9DqkF2buo")' }}
              ></div>
              <div className="flex flex-col overflow-hidden">
                <h1 className="text-white text-sm font-medium truncate">{user?.name || 'Simran Kaur'}</h1>
                <p className="text-settings-text-muted text-xs truncate">Class 10 - Nabha</p>
              </div>
            </div>
            {/* Nav Links */}
            <nav className="flex flex-col gap-2">
              <Link to="/app/dashboard" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-settings-surface-dark transition-colors group">
                <span className="material-symbols-outlined text-settings-text-muted group-hover:text-white">dashboard</span>
                <p className="text-settings-text-muted group-hover:text-white text-sm font-medium">{t('common.home')}</p>
              </Link>
              <Link to="/app/lessons" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-settings-surface-dark transition-colors group">
                <span className="material-symbols-outlined text-settings-text-muted group-hover:text-white">book_2</span>
                <p className="text-settings-text-muted group-hover:text-white text-sm font-medium">{t('common.lessons')}</p>
              </Link>
              <Link to="/app/progress" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-settings-surface-dark transition-colors group">
                <span className="material-symbols-outlined text-settings-text-muted group-hover:text-white">bar_chart</span>
                <p className="text-settings-text-muted group-hover:text-white text-sm font-medium">{t('common.progress')}</p>
              </Link>
              <Link to="/app/settings" className="flex items-center gap-3 px-3 py-3 rounded-lg bg-settings-surface-dark border border-settings-border-dark">
                <span className="material-symbols-outlined text-settings-primary" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
                <p className="text-white text-sm font-medium">Settings</p>
              </Link>
            </nav>
          </div>
          {/* Offline Indicator & Logout */}
          <div className="mt-auto flex flex-col gap-4">
            <div className="px-2">
              <div className="flex items-center gap-2 text-xs text-settings-text-muted bg-[#1a2b16] py-2 px-3 rounded-lg">
                <span className="material-symbols-outlined text-[16px] text-settings-primary">wifi</span>
                <span>{t('common.online')} • Last synced 2m ago</span>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full h-10 px-4 bg-settings-surface-dark hover:bg-settings-border-dark transition-colors text-white text-sm font-bold"
            >
              <span className="material-symbols-outlined text-[18px]">logout</span>
              <span>{t('common.logout')}</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full relative overflow-hidden bg-settings-bg-dark">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between border-b border-settings-border-dark px-4 py-3 bg-settings-bg-dark">
          <div className="flex items-center gap-3 text-white">
            <div className="size-6 text-settings-primary">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold">GyaanSetu</h2>
          </div>
          <button className="text-white p-2">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>

        {/* Scrollable Settings Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 scroll-smooth">
          <div className="max-w-4xl mx-auto space-y-8 pb-20">
            {/* Page Heading */}
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-3xl md:text-4xl font-black tracking-[-0.033em]">Settings</h1>
              <p className="text-settings-text-muted text-base">Manage your account preferences, notifications, and privacy options.</p>
            </div>

            {/* Section 1: Account Settings */}
            <section className="flex flex-col gap-4">
              <div className="border-b border-settings-border-dark pb-2">
                <h2 className="text-white text-xl font-bold tracking-tight flex items-center gap-2">
                  <span className="material-symbols-outlined text-settings-primary">manage_accounts</span>
                  Account Settings
                </h2>
              </div>
              <div className="bg-settings-surface-dark rounded-xl border border-settings-border-dark p-6 space-y-6">
                {/* Language & Visibility */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <label className="flex flex-col w-full sm:w-1/2 gap-2">
                    <span className="text-white text-sm font-medium">{t('common.language')} Preference</span>
                    <div className="relative">
                      <select className="appearance-none w-full bg-settings-bg-dark border border-settings-border-dark text-white rounded-lg h-12 px-4 focus:outline-none focus:border-settings-primary focus:ring-1 focus:ring-settings-primary cursor-pointer transition-all">
                        <option value="en">{t('common.english')}</option>
                        <option value="pa">{t('common.punjabi')} (ਪੰਜਾਬੀ)</option>
                        <option value="hi">{t('common.hindi')} (हिंदी)</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-settings-text-muted">
                        <span className="material-symbols-outlined">expand_more</span>
                      </div>
                    </div>
                    <p className="text-xs text-settings-text-muted">Select the language for interface and lessons.</p>
                  </label>
                  <label className="flex flex-col w-full sm:w-1/2 gap-2">
                    <span className="text-white text-sm font-medium">Profile Visibility</span>
                    <div className="relative">
                      <select className="appearance-none w-full bg-settings-bg-dark border border-settings-border-dark text-white rounded-lg h-12 px-4 focus:outline-none focus:border-settings-primary focus:ring-1 focus:ring-settings-primary cursor-pointer transition-all">
                        <option value="public">Everyone</option>
                        <option value="classmates">Classmates Only</option>
                        <option value="private">Private</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-settings-text-muted">
                        <span className="material-symbols-outlined">expand_more</span>
                      </div>
                    </div>
                  </label>
                </div>
                {/* Change Password */}
                <div className="pt-4 border-t border-settings-border-dark space-y-4">
                  <h3 className="text-white text-base font-semibold">Change Password</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex flex-col gap-2">
                      <span className="text-white text-sm font-medium">New Password</span>
                      <input className="bg-settings-bg-dark border border-settings-border-dark text-white rounded-lg h-12 px-4 focus:outline-none focus:border-settings-primary focus:ring-1 focus:ring-settings-primary placeholder:text-settings-text-muted/50 transition-all" placeholder="Min. 8 characters" type="password"/>
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-white text-sm font-medium">Confirm Password</span>
                      <input className="bg-settings-bg-dark border border-settings-border-dark text-white rounded-lg h-12 px-4 focus:outline-none focus:border-settings-primary focus:ring-1 focus:ring-settings-primary placeholder:text-settings-text-muted/50 transition-all" placeholder="Re-enter password" type="password"/>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Notification Preferences */}
            <section className="flex flex-col gap-4">
              <div className="border-b border-settings-border-dark pb-2">
                <h2 className="text-white text-xl font-bold tracking-tight flex items-center gap-2">
                  <span className="material-symbols-outlined text-settings-primary">notifications</span>
                  Notification Preferences
                </h2>
              </div>
              <div className="bg-settings-surface-dark rounded-xl border border-settings-border-dark p-6 space-y-6">
                {/* Channels */}
                <div className="space-y-4">
                  <h3 className="text-settings-text-muted text-xs font-bold uppercase tracking-wider">Channels</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-white text-sm font-medium">SMS Notifications</span>
                      <span className="text-settings-text-muted text-xs">Receive critical updates via text message (works offline).</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input defaultChecked className="sr-only peer" type="checkbox"/>
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-settings-primary/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-settings-primary"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-white text-sm font-medium">Email Notifications</span>
                      <span className="text-settings-text-muted text-xs">Weekly summaries and performance reports.</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input className="sr-only peer" type="checkbox"/>
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-settings-primary/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-settings-primary"></div>
                    </label>
                  </div>
                </div>
                {/* Alerts */}
                <div className="pt-4 border-t border-settings-border-dark space-y-4">
                  <h3 className="text-settings-text-muted text-xs font-bold uppercase tracking-wider">Alerts</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-white text-sm font-medium">Lesson Reminders</span>
                      <span className="text-settings-text-muted text-xs">Daily nudges to keep your streak alive.</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input defaultChecked className="sr-only peer" type="checkbox"/>
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-settings-primary/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-settings-primary"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-white text-sm font-medium">Quiz Results</span>
                      <span className="text-settings-text-muted text-xs">Immediate feedback when a quiz is graded.</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input defaultChecked className="sr-only peer" type="checkbox"/>
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-settings-primary/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-settings-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Privacy & Data */}
            <section className="flex flex-col gap-4">
              <div className="border-b border-settings-border-dark pb-2">
                <h2 className="text-white text-xl font-bold tracking-tight flex items-center gap-2">
                  <span className="material-symbols-outlined text-settings-primary">security</span>
                  Privacy & Data
                </h2>
              </div>
              <div className="bg-settings-surface-dark rounded-xl border border-settings-border-dark p-6 space-y-6">
                <div className="bg-settings-primary/10 rounded-lg p-4 border border-settings-primary/20">
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-settings-primary shrink-0">info</span>
                    <div className="space-y-1">
                      <p className="text-white text-sm font-medium">How we use your data</p>
                      <p className="text-settings-text-muted text-xs leading-relaxed">
                        We collect your lesson progress and quiz scores to recommend better study materials. Your data is stored locally on your device and only syncs to our servers when you have an internet connection. We never share your personal information with third parties.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-white text-sm font-medium">Sync on Wi-Fi Only</span>
                    <span className="text-settings-text-muted text-xs">Save mobile data by only syncing large files over Wi-Fi.</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input className="sr-only peer" type="checkbox"/>
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-settings-primary/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-settings-primary"></div>
                  </label>
                </div>
                <div className="pt-4 border-t border-settings-border-dark">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-col">
                      <span className="text-white text-sm font-medium">Your Data Copy</span>
                      <span className="text-settings-text-muted text-xs">Download a copy of your progress and certificates.</span>
                    </div>
                    <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#2d4625] hover:bg-[#3a5a30] text-white text-sm font-bold transition-colors border border-transparent hover:border-settings-primary/30">
                      <span className="material-symbols-outlined text-[20px]">download</span>
                      {t('common.download')} My Data
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Action Buttons */}
            <div className="flex flex-col-reverse sm:flex-row justify-end gap-4 pt-4 pb-8">
              <button className="px-6 py-3 rounded-lg border border-settings-border-dark text-white text-sm font-bold hover:bg-surface-dark transition-colors">
                Discard Changes
              </button>
              <button className="px-6 py-3 rounded-lg bg-settings-primary hover:bg-[#3ec01a] text-black text-sm font-bold shadow-lg shadow-settings-primary/20 transition-all flex items-center justify-center gap-2 active:scale-95">
                <span className="material-symbols-outlined text-[20px]">save</span>
                {t('common.save')} Preferences
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

