import React from 'react';
import { useTranslation } from 'react-i18next';

export const TeacherDashboard: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="p-6 md:p-10 flex flex-col gap-8 max-w-[1600px] mx-auto w-full">
      {/* Overview Stats Grid */}
      <section aria-label="Overview Statistics" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Stat 1 */}
        <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-[#2e4328] hover:border-primary/30 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined">groups</span>
            </div>
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">+2 {t('progress.completed').toLowerCase()}</span>
          </div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Students</p>
          <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">42</p>
        </div>
        {/* Stat 2 */}
        <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-[#2e4328] hover:border-primary/30 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl text-green-600 dark:text-primary group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-300">90% Rate</span>
          </div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Active This Week</p>
          <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">38</p>
        </div>
        {/* Stat 3 */}
        <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-[#2e4328] hover:border-primary/30 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined">menu_book</span>
            </div>
          </div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('dashboard.lessonsCompleted')}</p>
          <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">156</p>
        </div>
        {/* Stat 4 */}
        <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-[#2e4328] hover:border-primary/30 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined">analytics</span>
            </div>
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">High</span>
          </div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('progress.averageScore')}</p>
          <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">85%</p>
        </div>
      </section>

      {/* At Risk Section */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-500">warning</span>
            At-Risk Students Alert
          </h3>
          <button className="text-sm font-bold text-primary hover:text-primary-dark hover:underline">{t('common.viewAll')}</button>
        </div>
        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-[#2e4328] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 dark:border-[#2e4328] text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  <th className="px-6 py-4">Student</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Risk Factor</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-[#2e4328]">
                <tr className="group hover:bg-gray-50 dark:hover:bg-[#2e4328]/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="h-10 w-10 rounded-full bg-cover bg-center" 
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAX3u1c4OFgYyCFALHVlNNOB-_n5r7aVwKIZw0Noy5ZLzfxZYEAQOLSEAX2xFc4d2bm082fmyl8h_hKkhBDbNxLvJnMKTps_89tUMDjSyhiEgzOd__vg9AmoxLw-zV5QYrabiRoeqJnMpHzcef2hAg_K_BatpO2B7URjiz_D-hFp1iCji3578Yd35BUQFR_zxYAkcuz0IO37-CTRhpINHywrudvvDSUqAAVOJUitzuh77-NBLHy5m1obzB3QbUeyn85v2C6wWzx0ks")' }}
                      ></div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">Amit Singh</p>
                        <p className="text-xs text-gray-500">Class 5B</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Inactive
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300">Absent for &gt; 5 days</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-600 text-xs font-bold text-slate-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                      {t('common.contact')}
                    </button>
                  </td>
                </tr>
                <tr className="group hover:bg-gray-50 dark:hover:bg-[#2e4328]/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="h-10 w-10 rounded-full bg-cover bg-center" 
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2MvZShy1p-mkKfF0QPc9Onx8OFjD6dZidMmQ43fTpTUDDyeSfgYLUIu5x1ej0Cs-uUI-sF6rsA0wkC3-up1bZ8R_kIGh3d5ghkinHIBREAVChDiO4QLV0tgQLzrlMbHp-vUC6O36onsvYtaLvwFdsPosf2FO1_M63pT7TMrNFvIOh336IibeJVAH2pX5hkUAYmQtAsW1Dqgw-TaNhDesGnUQSY0x_nel8c9D_PUAqT2U762741fk8f_fdgS04a66ljLeYlnv3WrY")' }}
                      ></div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">Priya Kaur</p>
                        <p className="text-xs text-gray-500">Class 5B</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Needs Help
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300">Score &lt; 40% in Math</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-600 text-xs font-bold text-slate-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                      Assign Practice
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom Grid: Quick Actions & Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <section className="lg:col-span-2 flex flex-col gap-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white px-2">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button className="bg-primary hover:bg-primary-dark transition-colors p-6 rounded-2xl flex flex-col items-center justify-center gap-3 text-center group shadow-lg shadow-primary/20">
              <div className="p-3 bg-white/20 rounded-full text-white group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">cloud_upload</span>
              </div>
              <span className="text-slate-900 font-bold text-sm">Upload Lesson</span>
            </button>
            <button className="bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-[#2e4328]/50 transition-colors p-6 rounded-2xl flex flex-col items-center justify-center gap-3 text-center border border-gray-100 dark:border-[#2e4328] group">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">quiz</span>
              </div>
              <span className="text-slate-900 dark:text-white font-bold text-sm">Create Quiz</span>
            </button>
            <button className="bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-[#2e4328]/50 transition-colors p-6 rounded-2xl flex flex-col items-center justify-center gap-3 text-center border border-gray-100 dark:border-[#2e4328] group">
              <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-full text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">assessment</span>
              </div>
              <span className="text-slate-900 dark:text-white font-bold text-sm">Generate Report</span>
            </button>
          </div>
          {/* Marketing/Info Card */}
          <div className="mt-4 p-6 rounded-2xl bg-gradient-to-r from-[#2e4328] to-[#152012] border border-gray-800 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="z-10 text-center sm:text-left">
              <h4 className="text-white font-bold text-lg mb-1">New Punjabi Literacy Module</h4>
              <p className="text-[#a2c398] text-sm max-w-md">Version 2.0 is now available for download. Includes offline-compatible video lessons.</p>
            </div>
            <button className="z-10 px-5 py-2.5 bg-white text-slate-900 text-sm font-bold rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap">
              {t('common.download')} Now
            </button>
          </div>
        </section>

        {/* Recent Activity Timeline */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t('progress.recentActivity')}</h3>
            <button className="text-primary hover:text-primary-dark transition-colors">
              <span className="material-symbols-outlined">refresh</span>
            </button>
          </div>
          <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-[#2e4328] h-full">
            <div className="relative pl-2">
              {/* Vertical Line */}
              <div className="absolute left-2.5 top-2 bottom-4 w-0.5 bg-gray-100 dark:bg-[#2e4328]"></div>
              {/* Item 1 */}
              <div className="relative pl-8 pb-8 group">
                <div className="absolute left-0 top-1.5 h-5 w-5 rounded-full border-4 border-white dark:border-surface-dark bg-primary z-10"></div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Quiz Results Uploaded</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Class 5B Math Test results synced successfully.</p>
                  <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-wider">10 min ago</p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="relative pl-8 pb-8 group">
                <div className="absolute left-0 top-1.5 h-5 w-5 rounded-full border-4 border-white dark:border-surface-dark bg-blue-500 z-10"></div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Riya started "Basic Shapes"</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Student activity detected on tablet #4.</p>
                  <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-wider">45 min ago</p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="relative pl-8 pb-8 group">
                <div className="absolute left-0 top-1.5 h-5 w-5 rounded-full border-4 border-white dark:border-surface-dark bg-amber-500 z-10"></div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">System Update</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Offline cache cleared automatically.</p>
                  <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-wider">2 hrs ago</p>
                </div>
              </div>
              {/* Item 4 */}
              <div className="relative pl-8 group">
                <div className="absolute left-0 top-1.5 h-5 w-5 rounded-full border-4 border-white dark:border-surface-dark bg-gray-400 z-10"></div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Rohan completed Module 1</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Score: 8/10. Great progress!</p>
                  <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Yesterday</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-4 py-2 text-xs font-bold text-center text-gray-500 hover:text-primary transition-colors">
              View All Activity
            </button>
          </div>
        </section>
      </div>

      <footer className="mt-8 text-center text-xs text-gray-500 dark:text-[#a2c398]/60 pb-8">
        © 2023 GyaanSetu Platform. {t('landing.footer.rights')} <br/>
        <span className="opacity-70">Designed for Nabha, Punjab. Version 1.4.2 ({t('sync.offline')} Mode Enabled)</span>
      </footer>
    </div>
  );
};
