import React from 'react';
import { Link } from 'react-router-dom';

export const AdminDashboard: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-admin-bg-dark text-slate-900 dark:text-white font-display overflow-hidden antialiased h-screen flex selection:bg-admin-primary selection:text-admin-bg-dark transition-colors duration-300">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 flex-shrink-0 flex flex-col justify-between border-r border-admin-border-light dark:border-admin-border-dark bg-surface-light dark:bg-admin-bg-dark z-20 transition-all duration-300">
        <div className="flex flex-col gap-4 p-4 h-full">
          {/* Brand */}
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="bg-admin-primary/20 flex items-center justify-center rounded-lg size-10 text-admin-primary">
              <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-base font-bold leading-none dark:text-white">GyaanSetu</h1>
              <p className="text-xs font-normal text-admin-text-sec-light dark:text-admin-text-sec-dark mt-1">Admin Portal</p>
            </div>
          </div>
          {/* Nav Links */}
          <nav className="flex flex-col gap-2 mt-4 flex-1">
            <Link to="/admin/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-admin-primary/10 text-admin-primary-dark dark:text-admin-primary dark:bg-[#2d4625]">
              <span className="material-symbols-outlined text-[24px]">dashboard</span>
              <p className="text-sm font-medium leading-normal">Dashboard</p>
            </Link>
            <Link to="/admin/teachers" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-admin-text-sec-dark dark:hover:bg-admin-surface-dark transition-colors">
              <span className="material-symbols-outlined text-[24px]">group</span>
              <p className="text-sm font-medium leading-normal">Teachers</p>
            </Link>
            <Link to="/admin/students" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-admin-text-sec-dark dark:hover:bg-admin-surface-dark transition-colors">
              <span className="material-symbols-outlined text-[24px]">school</span>
              <p className="text-sm font-medium leading-normal">Students</p>
            </Link>
            <Link to="/admin/content" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-admin-text-sec-dark dark:hover:bg-admin-surface-dark transition-colors">
              <span className="material-symbols-outlined text-[24px]">library_books</span>
              <p className="text-sm font-medium leading-normal">Content Library</p>
            </Link>
            <Link to="/admin/health" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-admin-text-sec-dark dark:hover:bg-admin-surface-dark transition-colors">
              <span className="material-symbols-outlined text-[24px]">monitoring</span>
              <p className="text-sm font-medium leading-normal">System Health</p>
            </Link>
            <Link to="/admin/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-admin-text-sec-dark dark:hover:bg-admin-surface-dark transition-colors">
              <span className="material-symbols-outlined text-[24px]">settings</span>
              <p className="text-sm font-medium leading-normal">Settings</p>
            </Link>
          </nav>
          {/* User Profile & Logout */}
          <div className="mt-auto flex flex-col gap-4 border-t border-admin-border-light dark:border-admin-border-dark pt-4">
            <div className="flex items-center gap-3 px-2">
              <div 
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-admin-primary" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFPtxRRE62Rol3nyBZ7HPdi5a2I6xYU5ltxyafLYOgoCmhlUHvNK-ThnvbJfXBp9nfV9TuxUyyLuSxo6nrmcOoGNQMUJFkde_boIAC5uMa8xG_hFQmfk9BvIaBU-XfaQoM_O0fYvy0kFXLCmWHUO7Y52yk-Mz5qWJOoKzx3k5bd9X47yM0TGjwfdNylEwZexQeQulJDS5SHjHuu_xZHQCdYB-DYEIMqHhPhipvJxwR7bV0n2b4VO89fIiOd7T-GLzmAPpi_KldR1s")' }}
              ></div>
              <div className="flex flex-col">
                <p className="text-sm font-medium leading-none dark:text-white">Admin User</p>
                <p className="text-xs text-admin-text-sec-light dark:text-admin-text-sec-dark mt-1">Nabha District</p>
              </div>
            </div>
            <button className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-red-50 text-red-600 hover:bg-red-100 dark:bg-admin-surface-dark dark:text-red-400 dark:hover:bg-red-900/20 text-sm font-bold leading-normal transition-colors">
              <span className="material-symbols-outlined text-[20px]">logout</span>
              <span className="truncate">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Header */}
        <header className="flex-shrink-0 flex items-center justify-between px-8 py-5 bg-background-light dark:bg-background-dark z-10">
          <div>
            <h2 className="text-3xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white">School Overview</h2>
            <p className="text-admin-text-sec-light dark:text-admin-text-sec-dark text-sm font-normal mt-1">Welcome back. Here's what's happening in Nabha today.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 dark:bg-admin-primary/20 dark:text-admin-primary border border-green-200 dark:border-admin-primary/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 dark:bg-admin-primary"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider">System Online</span>
            </div>
            <button className="relative p-2 text-slate-500 hover:text-slate-700 dark:text-admin-text-sec-dark dark:hover:text-white transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full border-2 border-background-light dark:border-background-dark"></span>
            </button>
          </div>
        </header>

        {/* Scrollable Dashboard Content */}
        <div className="flex-1 overflow-y-auto px-8 pb-8">
          {/* KPI Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-surface-light dark:bg-admin-surface-dark border border-admin-border-light dark:border-admin-border-dark shadow-sm">
              <div className="flex justify-between items-start">
                <p className="text-slate-500 dark:text-admin-text-sec-dark text-sm font-medium">Total Students</p>
                <span className="material-symbols-outlined text-admin-primary text-[24px]">school</span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <p className="text-slate-900 dark:text-white text-3xl font-bold">1,240</p>
                <span className="flex items-center text-xs font-medium text-admin-primary bg-admin-primary/10 px-1.5 py-0.5 rounded">
                  +12%
                  <span className="material-symbols-outlined text-[12px] ml-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-surface-light dark:bg-admin-surface-dark border border-admin-border-light dark:border-admin-border-dark shadow-sm">
              <div className="flex justify-between items-start">
                <p className="text-slate-500 dark:text-admin-text-sec-dark text-sm font-medium">Active Teachers</p>
                <span className="material-symbols-outlined text-admin-primary text-[24px]">person_check</span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <p className="text-slate-900 dark:text-white text-3xl font-bold">45</p>
                <span className="flex items-center text-xs font-medium text-admin-primary bg-admin-primary/10 px-1.5 py-0.5 rounded">
                  +5%
                  <span className="material-symbols-outlined text-[12px] ml-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-surface-light dark:bg-admin-surface-dark border border-admin-border-light dark:border-admin-border-dark shadow-sm">
              <div className="flex justify-between items-start">
                <p className="text-slate-500 dark:text-admin-text-sec-dark text-sm font-medium">Avg. Lesson Comp.</p>
                <span className="material-symbols-outlined text-admin-primary text-[24px]">timelapse</span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <p className="text-slate-900 dark:text-white text-3xl font-bold">78%</p>
                <span className="flex items-center text-xs font-medium text-admin-primary bg-admin-primary/10 px-1.5 py-0.5 rounded">
                  +2.4%
                  <span className="material-symbols-outlined text-[12px] ml-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-surface-light dark:bg-admin-surface-dark border border-admin-border-light dark:border-admin-border-dark shadow-sm">
              <div className="flex justify-between items-start">
                <p className="text-slate-500 dark:text-admin-text-sec-dark text-sm font-medium">Avg. Quiz Score</p>
                <span className="material-symbols-outlined text-admin-primary text-[24px]">quiz</span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <p className="text-slate-900 dark:text-white text-3xl font-bold">82%</p>
                <span className="text-xs font-medium text-slate-400 dark:text-admin-text-sec-dark">Last 30 days</span>
              </div>
            </div>
          </div>

          {/* Main Grid: Charts & Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Chart Section */}
            <div className="lg:col-span-2 flex flex-col rounded-xl bg-surface-light dark:bg-admin-surface-dark border border-admin-border-light dark:border-admin-border-dark p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Platform Usage Trends</h3>
                  <p className="text-sm text-slate-500 dark:text-admin-text-sec-dark">Daily active sessions over the last 30 days</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 text-xs font-medium rounded bg-admin-primary/10 text-admin-primary-dark dark:text-admin-primary">Monthly</span>
                  <span className="px-2 py-1 text-xs font-medium rounded text-slate-500 hover:bg-slate-100 dark:text-admin-text-sec-dark dark:hover:bg-white/5 cursor-pointer transition-colors">Weekly</span>
                </div>
              </div>
              <div className="w-full h-[240px] relative">
                <svg className="overflow-visible" fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 478 150" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="chartGradient" x1="236" x2="236" y1="21" y2="149">
                      <stop stopColor="#4cdf20" stopOpacity="0.3"></stop>
                      <stop offset="1" stopColor="#4cdf20" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <line className="dark:stroke-white dark:stroke-opacity-10" stroke="#e5e7eb" strokeOpacity="0.2" strokeWidth="1" x1="0" x2="478" y1="149" y2="149"></line>
                  <line className="dark:stroke-white dark:stroke-opacity-10" stroke="#e5e7eb" strokeDasharray="4 4" strokeOpacity="0.2" strokeWidth="1" x1="0" x2="478" y1="100" y2="100"></line>
                  <line className="dark:stroke-white dark:stroke-opacity-10" stroke="#e5e7eb" strokeDasharray="4 4" strokeOpacity="0.2" strokeWidth="1" x1="0" x2="478" y1="50" y2="50"></line>
                  <path d="M0 109C18.15 109 18.15 21 36.3 21C54.46 21 54.46 41 72.61 41C90.76 41 90.76 93 108.92 93C127.07 93 127.07 33 145.23 33C163.38 33 163.38 101 181.53 101C199.69 101 199.69 61 217.84 61C236 61 236 45 254.15 45C272.3 45 272.3 121 290.46 121C308.61 121 308.61 149 326.76 149C344.92 149 344.92 1 363.07 1C381.23 1 381.23 81 399.38 81C417.53 81 417.53 129 435.69 129C453.84 129 453.84 25 472 25V149H0V109Z" fill="url(#chartGradient)"></path>
                  <path d="M0 109C18.15 109 18.15 21 36.3 21C54.46 21 54.46 41 72.61 41C90.76 41 90.76 93 108.92 93C127.07 93 127.07 33 145.23 33C163.38 33 163.38 101 181.53 101C199.69 101 199.69 61 217.84 61C236 61 236 45 254.15 45C272.3 45 272.3 121 290.46 121C308.61 121 308.61 149 326.76 149C344.92 149 344.92 1 363.07 1C381.23 1 381.23 81 399.38 81C417.53 81 417.53 129 435.69 129C453.84 129 453.84 25 472 25" stroke="#4cdf20" strokeLinecap="round" strokeWidth="3"></path>
                </svg>
              </div>
              <div className="flex justify-between mt-4 px-2">
                <span className="text-xs font-medium text-slate-400 dark:text-admin-text-sec-dark">Week 1</span>
                <span className="text-xs font-medium text-slate-400 dark:text-admin-text-sec-dark">Week 2</span>
                <span className="text-xs font-medium text-slate-400 dark:text-admin-text-sec-dark">Week 3</span>
                <span className="text-xs font-medium text-slate-400 dark:text-admin-text-sec-dark">Week 4</span>
              </div>
            </div>
            {/* Side Panel: Health & Quick Actions */}
            <div className="flex flex-col gap-6">
              {/* System Health Card */}
              <div className="flex flex-col rounded-xl bg-surface-light dark:bg-admin-surface-dark border border-admin-border-light dark:border-admin-border-dark p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-600 dark:bg-[#253620] dark:text-admin-primary">
                    <span className="material-symbols-outlined">hard_drive</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">Local Storage</h3>
                    <p className="text-xs text-slate-500 dark:text-admin-text-sec-dark">Device Capacity</p>
                  </div>
                </div>
                <div className="flex items-center justify-center py-2 relative">
                  <svg className="transform -rotate-90" height="120" viewBox="0 0 120 120" width="120">
                    <circle className="text-slate-100 dark:text-white/10" cx="60" cy="60" fill="transparent" r="50" stroke="currentColor" strokeWidth="12"></circle>
                    <circle className="text-admin-primary" cx="60" cy="60" fill="transparent" r="50" stroke="currentColor" strokeDasharray="314" strokeDashoffset="78.5" strokeLinecap="round" strokeWidth="12"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">75%</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 dark:text-admin-text-sec-dark">Used Space</span>
                    <span className="text-slate-900 dark:text-white font-medium">48 GB</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 dark:text-admin-text-sec-dark">Free Space</span>
                    <span className="text-slate-900 dark:text-white font-medium">16 GB</span>
                  </div>
                  <div className="h-px w-full bg-admin-border-light dark:bg-admin-border-dark my-2"></div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 dark:text-admin-text-sec-dark">Last Sync</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-white">12 mins ago</span>
                  </div>
                </div>
              </div>
              {/* Quick Actions Card */}
              <div className="flex flex-col rounded-xl bg-surface-light dark:bg-admin-surface-dark border border-admin-border-light dark:border-admin-border-dark p-6 shadow-sm flex-1">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Quick Actions</h3>
                <div className="flex flex-col gap-3">
                  <button className="flex items-center gap-3 w-full p-3 rounded-lg border border-admin-border-light dark:border-admin-border-dark hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group text-left">
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-admin-primary transition-colors">upload_file</span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Bulk Import Students</p>
                      <p className="text-xs text-slate-500 dark:text-admin-text-sec-dark">Upload CSV roster</p>
                    </div>
                  </button>
                  <button className="flex items-center gap-3 w-full p-3 rounded-lg border border-admin-border-light dark:border-admin-border-dark hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group text-left">
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-admin-primary transition-colors">sync</span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Force Sync Content</p>
                      <p className="text-xs text-slate-500 dark:text-admin-text-sec-dark">Push local changes</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Teacher Approvals Table */}
          <div className="w-full flex flex-col rounded-xl bg-surface-light dark:bg-admin-surface-dark border border-admin-border-light dark:border-admin-border-dark shadow-sm overflow-hidden">
            <div className="p-6 border-b border-admin-border-light dark:border-admin-border-dark flex justify-between items-center flex-wrap gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Pending Teacher Approvals</h3>
                <p className="text-sm text-slate-500 dark:text-admin-text-sec-dark">Review new account requests needing access.</p>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <input className="h-10 pl-10 pr-4 rounded-lg bg-slate-50 dark:bg-admin-bg-dark border border-admin-border-light dark:border-admin-border-dark text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-admin-primary focus:outline-none w-64 placeholder-slate-400 dark:placeholder-admin-text-sec-dark" placeholder="Search requests..." type="text"/>
                  <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 dark:text-admin-text-sec-dark text-[20px]">search</span>
                </div>
                <button className="flex items-center justify-center h-10 px-4 rounded-lg border border-admin-border-light dark:border-admin-border-dark text-slate-600 dark:text-admin-text-sec-dark hover:bg-slate-50 dark:hover:bg-white/5 text-sm font-medium transition-colors">
                  Filter
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-admin-text-sec-dark font-medium border-b border-admin-border-light dark:border-admin-border-dark">
                  <tr>
                    <th className="px-6 py-4">Teacher Name</th>
                    <th className="px-6 py-4">Subject</th>
                    <th className="px-6 py-4">Request Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-admin-border-light dark:divide-admin-border-dark">
                  <tr className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-white">RK</div>
                        <span className="font-medium text-slate-900 dark:text-white">Rajesh Kumar</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-admin-text-sec-dark">Mathematics (Grade 6-8)</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-admin-text-sec-dark">Oct 24, 2023</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                        <span className="size-1.5 rounded-full bg-yellow-500"></span>
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors" title="Reject">
                          <span className="material-symbols-outlined text-[20px]">close</span>
                        </button>
                        <button className="px-4 py-2 rounded-lg bg-admin-primary text-admin-bg-dark font-bold text-sm hover:bg-admin-primary/90 transition-colors" title="Approve">
                          Approve
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-white">SK</div>
                        <span className="font-medium text-slate-900 dark:text-white">Sunita Kaur</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-admin-text-sec-dark">Science (Grade 9-10)</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-admin-text-sec-dark">Oct 23, 2023</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                        <span className="size-1.5 rounded-full bg-yellow-500"></span>
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors" title="Reject">
                          <span className="material-symbols-outlined text-[20px]">close</span>
                        </button>
                        <button className="px-4 py-2 rounded-lg bg-admin-primary text-admin-bg-dark font-bold text-sm hover:bg-admin-primary/90 transition-colors" title="Approve">
                          Approve
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-white">AS</div>
                        <span className="font-medium text-slate-900 dark:text-white">Amit Singh</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-admin-text-sec-dark">English (Grade 5-10)</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-admin-text-sec-dark">Oct 21, 2023</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                        <span className="size-1.5 rounded-full bg-red-500"></span>
                        Review
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors" title="Reject">
                          <span className="material-symbols-outlined text-[20px]">close</span>
                        </button>
                        <button className="px-4 py-2 rounded-lg bg-admin-primary text-admin-bg-dark font-bold text-sm hover:bg-admin-primary/90 transition-colors" title="Approve">
                          Approve
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-admin-border-light dark:border-admin-border-dark flex justify-center">
              <button className="text-sm font-medium text-admin-primary hover:text-admin-primary-dark transition-colors">View All Requests</button>
            </div>
          </div>
          <footer className="mt-8 text-center text-xs text-slate-400 dark:text-admin-text-sec-dark pb-4">
            <p>© 2023 GyaanSetu Platform. Version 2.4.1 (Offline-Capable Build)</p>
          </footer>
        </div>
      </main>
    </div>
  );
};
