import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const TeacherReports: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-background-light dark:bg-reports-bg-dark text-slate-900 dark:text-white font-lexend overflow-hidden flex h-screen w-full transition-colors duration-200">
      
      {/* Side Navigation */}
      <aside className="hidden md:flex flex-col w-64 h-full border-r border-reports-surface-border bg-reports-bg-dark p-4 shrink-0">
        <div className="flex flex-col gap-6 h-full">
          {/* Brand */}
          <div className="flex items-center gap-3 px-2 py-4">
            <div className="size-10 bg-reports-primary rounded-xl flex items-center justify-center text-reports-bg-dark shadow-lg shadow-reports-primary/20">
              <span className="material-symbols-outlined text-3xl font-bold">query_stats</span>
            </div>
            <h1 className="text-white text-xl font-bold tracking-tight">GyaanSetu</h1>
          </div>
          {/* Nav */}
          <nav className="flex flex-col gap-2 flex-1">
            <Link to="/teacher/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-reports-surface-active text-reports-text-sec hover:text-white transition-colors">
              <span className="material-symbols-outlined">dashboard</span>
              <p className="text-sm font-medium">{t('common.home')}</p>
            </Link>
            <Link to="/teacher/reports" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-reports-primary text-reports-bg-dark shadow-md">
              <span className="material-symbols-outlined">assessment</span>
              <p className="text-sm font-bold">Reports</p>
            </Link>
            <Link to="/teacher/classes" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-reports-surface-active text-reports-text-sec hover:text-white transition-colors">
              <span className="material-symbols-outlined">groups</span>
              <p className="text-sm font-medium">Classes</p>
            </Link>
          </nav>
          {/* User */}
          <div className="p-4 bg-reports-surface-active rounded-2xl border border-reports-surface-border flex items-center gap-3">
            <div className="size-10 rounded-full bg-slate-600 border-2 border-reports-primary/30"></div>
            <div className="min-w-0">
              <p className="text-white text-sm font-bold truncate">Mrs. Kaur</p>
              <p className="text-reports-text-sec text-[10px] uppercase font-black tracking-wider">Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Header */}
        <header className="h-16 border-b border-reports-surface-border bg-reports-bg-dark flex items-center justify-between px-6 lg:px-10 shrink-0 z-20">
          <h2 className="text-white text-lg font-bold">Performance Analytics & Reports</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-reports-surface-active px-3 py-1.5 rounded-full text-xs font-bold text-reports-text-sec">
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
              <span>Oct 2023</span>
            </div>
            <button className="flex items-center justify-center size-9 rounded-full bg-reports-primary text-reports-bg-dark shadow-lg shadow-reports-primary/20">
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-10">
          <div className="max-w-6xl mx-auto flex flex-col gap-8 pb-10">
            
            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-6 rounded-2xl bg-reports-surface-active border border-reports-surface-border flex flex-col gap-2">
                <p className="text-reports-text-sec text-xs font-bold uppercase tracking-wider">Avg Class Score</p>
                <div className="flex items-end gap-2">
                  <span className="text-white text-3xl font-black">74.8%</span>
                  <span className="text-reports-primary text-xs font-bold mb-1">+4.2%</span>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-reports-surface-active border border-reports-surface-border flex flex-col gap-2">
                <p className="text-reports-text-sec text-xs font-bold uppercase tracking-wider">Quiz Completion</p>
                <div className="flex items-end gap-2">
                  <span className="text-white text-3xl font-black">92%</span>
                  <span className="text-reports-primary text-xs font-bold mb-1">On Track</span>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-reports-surface-active border border-reports-surface-border flex flex-col gap-2">
                <p className="text-reports-text-sec text-xs font-bold uppercase tracking-wider">Active Learners</p>
                <div className="flex items-end gap-2">
                  <span className="text-white text-3xl font-black">128</span>
                  <span className="text-reports-text-sec text-xs mb-1">/ 140 total</span>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-reports-surface-active border border-reports-surface-border flex flex-col gap-2">
                <p className="text-reports-text-sec text-xs font-bold uppercase tracking-wider">Content Coverage</p>
                <div className="flex items-end gap-2">
                  <span className="text-white text-3xl font-black">65%</span>
                  <div className="w-16 h-1.5 bg-black/40 rounded-full mb-3 ml-2 overflow-hidden">
                    <div className="bg-reports-primary h-full rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Visuals Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Performance Chart Placeholder */}
              <div className="lg:col-span-2 p-8 rounded-3xl bg-[#1a2916] border border-reports-surface-border flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-xl font-bold">Class Performance Trends</h3>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 rounded-md bg-reports-surface-active text-white text-[10px] font-bold border border-reports-primary/30 tracking-wider uppercase">Weekly</button>
                    <button className="px-3 py-1 rounded-md bg-transparent text-reports-text-sec text-[10px] font-bold hover:text-white transition-colors tracking-wider uppercase">Monthly</button>
                  </div>
                </div>
                {/* Visual Chart Placeholder */}
                <div className="relative h-[300px] w-full mt-4 flex items-end gap-4 px-2">
                  <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none opacity-20">
                    <div className="w-full h-px bg-white"></div>
                    <div className="w-full h-px bg-white"></div>
                    <div className="w-full h-px bg-white"></div>
                    <div className="w-full h-px bg-white"></div>
                    <div className="w-full h-px bg-white"></div>
                  </div>
                  {/* Chart Bars */}
                  {[45, 62, 58, 85, 74, 92, 78].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                      <div className="relative w-full bg-reports-primary/10 rounded-t-lg group-hover:bg-reports-primary/20 transition-all flex items-end justify-center" style={{ height: `${h}%` }}>
                        <div className="w-full bg-reports-primary rounded-t-lg transition-all" style={{ height: `${h-10}%` }}></div>
                        <div className="absolute -top-8 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
                          Score: {h}%
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-reports-text-sec uppercase">Unit {i+1}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subject Breakdown Card */}
              <div className="p-8 rounded-3xl bg-[#1a2916] border border-reports-surface-border flex flex-col gap-6">
                <h3 className="text-white text-xl font-bold">Subject Mastery</h3>
                <div className="flex flex-col gap-6">
                  {/* Subject 1 */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm font-bold">{t('dashboard.math')}</span>
                      <span className="text-reports-primary text-sm font-black">82%</span>
                    </div>
                    <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
                      <div className="bg-reports-primary h-full rounded-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                  {/* Subject 2 */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm font-bold">{t('dashboard.science')}</span>
                      <span className="text-reports-primary text-sm font-black">68%</span>
                    </div>
                    <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
                      <div className="bg-reports-primary h-full rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                  {/* Subject 3 */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm font-bold">Social Studies</span>
                      <span className="text-reports-primary text-sm font-black">75%</span>
                    </div>
                    <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
                      <div className="bg-reports-primary h-full rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  {/* Subject 4 */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm font-bold">{t('landing.features.digitalLiteracyTitle')}</span>
                      <span className="text-reports-primary text-sm font-black">94%</span>
                    </div>
                    <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
                      <div className="bg-reports-primary h-full rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                </div>
                <button className="mt-2 w-full py-3 rounded-xl border border-reports-primary/30 text-reports-primary text-xs font-bold hover:bg-reports-primary hover:text-black transition-all uppercase tracking-widest">
                  View Detailed Breakdown
                </button>
              </div>
            </div>

            {/* Reports List / Table Section */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between px-2">
                <h3 className="text-white text-xl font-bold">Available Report Generations</h3>
                <Link to="/teacher/reports/history" className="text-reports-primary text-sm font-bold hover:underline">Download History</Link>
              </div>
              <div className="bg-[#1a2916] rounded-2xl border border-reports-surface-border overflow-hidden">
                <div className="flex flex-col divide-y divide-reports-surface-border">
                  {/* Report Row 1 */}
                  <div className="flex flex-col sm:flex-row items-center justify-between p-6 gap-4 hover:bg-reports-surface-active/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center">
                        <span className="material-symbols-outlined">description</span>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-base">Monthly Class Summary</h4>
                        <p className="text-reports-text-sec text-xs">Aggregated scores, attendance, and risk alerts for Class 5A.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded bg-black/40 text-reports-text-sec text-[10px] font-black uppercase tracking-wider border border-white/10">PDF / CSV</span>
                      <button className="px-6 py-2 rounded-full bg-reports-primary text-reports-bg-dark text-xs font-black uppercase shadow-lg shadow-reports-primary/10 hover:shadow-reports-primary/30 transition-all active:scale-95">Generate</button>
                    </div>
                  </div>
                  {/* Report Row 2 */}
                  <div className="flex flex-col sm:flex-row items-center justify-between p-6 gap-4 hover:bg-reports-surface-active/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center">
                        <span className="material-symbols-outlined">warning</span>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-base">At-Risk Student Breakdown</h4>
                        <p className="text-reports-text-sec text-xs">Identifies 4 students falling behind curriculum milestones.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded bg-black/40 text-reports-text-sec text-[10px] font-black uppercase tracking-wider border border-white/10">Interactive</span>
                      <button className="px-6 py-2 rounded-full bg-reports-primary text-reports-bg-dark text-xs font-black uppercase shadow-lg shadow-reports-primary/10 hover:shadow-reports-primary/30 transition-all active:scale-95">Analyze</button>
                    </div>
                  </div>
                  {/* Report Row 3 */}
                  <div className="flex flex-col sm:flex-row items-center justify-between p-6 gap-4 hover:bg-reports-surface-active/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center">
                        <span className="material-symbols-outlined">history_edu</span>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-base">Quiz Analytics Pack</h4>
                        <p className="text-reports-text-sec text-xs">Deep dive into Unit 3 Quiz results across all students.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded bg-black/40 text-reports-text-sec text-[10px] font-black uppercase tracking-wider border border-white/10">XLSX</span>
                      <button className="px-6 py-2 rounded-full bg-reports-primary text-reports-bg-dark text-xs font-black uppercase shadow-lg shadow-reports-primary/10 hover:shadow-reports-primary/30 transition-all active:scale-95">Generate</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};