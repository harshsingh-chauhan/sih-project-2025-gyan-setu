import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const TeacherClassOverview: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-background-light dark:bg-overview-bg-dark font-lexend text-white overflow-x-hidden min-h-screen flex flex-col transition-colors duration-200">
      
      {/* Top Navigation */}
      <header className="w-full bg-overview-bg-dark border-b border-overview-surface-dark px-4 lg:px-10 py-3 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4">
            <div className="size-8 flex items-center justify-center text-overview-primary">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">GyaanSetu</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 bg-overview-surface-dark px-3 py-1.5 rounded-full">
              <span className="size-2 rounded-full bg-overview-primary animate-pulse"></span>
              <span className="text-xs font-medium text-overview-secondary">{t('common.online')}</span>
            </div>
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-overview-surface-dark" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvSJkbZOoi4HXziJxWhixISSuTNWU3CwS6tahukSw4HHm8OXcD1aRTRdrVnMGVm1vbw861b7kOYb25Ool2Pu5XW9T8LYO5vtfk8HYttyhOEvcuDd6kZH7elUQJP1O3Yf_iB-6gmsozFyvtANrLgebe73xwSRQM0Kowu3KBW2wBSy81ib4C_d-aOcwzGGQcuyrDUksB2BEe5mrAX-Kc9wIdhJYXlETDHzzTyi-E4Uk_yBw9g4_gwYIk6FjKzgnxZCzK0NSWpMgL6zo")' }}
            ></div>
          </div>
        </div>
      </header>

      <div className="layout-container flex h-full grow flex-col w-full max-w-[1440px] mx-auto px-4 lg:px-10 py-6">
        
        {/* Breadcrumbs */}
        <nav className="flex flex-wrap gap-2 items-center mb-6 text-sm">
          <Link className="text-overview-secondary hover:text-overview-primary transition-colors flex items-center gap-1" to="/teacher/dashboard">
            <span className="material-symbols-outlined text-[18px]">dashboard</span>
            {t('common.home')}
          </Link>
          <span className="material-symbols-outlined text-overview-secondary text-[16px]">chevron_right</span>
          <span className="text-white font-medium">Class 5A - Science</span>
        </nav>

        {/* Page Heading & Actions */}
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <h1 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">Class 5A - Science</h1>
            <p className="text-overview-secondary text-base font-normal">Manage student progress and performance</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex h-10 px-6 cursor-pointer items-center justify-center rounded-full bg-overview-surface-dark text-white text-sm font-bold hover:bg-overview-surface-dark-hover transition-colors gap-2">
              <span className="material-symbols-outlined text-[20px]">download</span>
              <span>{t('common.download')} Report</span>
            </button>
            <button className="flex h-10 px-6 cursor-pointer items-center justify-center rounded-full bg-overview-primary text-black text-sm font-bold hover:bg-overview-primary-dark transition-colors shadow-[0_0_15px_rgba(76,223,32,0.3)] gap-2">
              <span className="material-symbols-outlined text-[20px]">add</span>
              <span>Add Student</span>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* Stat Card 1 */}
          <div className="flex flex-col gap-2 rounded-xl p-6 bg-overview-surface-dark border border-[#36542c]/50">
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2 bg-overview-primary/10 rounded-full text-overview-primary">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <p className="text-overview-secondary text-sm font-medium uppercase tracking-wider">{t('progress.averageScore')}</p>
            </div>
            <div className="flex items-end gap-3">
              <p className="text-white text-3xl font-bold leading-none">78%</p>
              <div className="flex items-center text-overview-primary text-sm font-medium bg-overview-primary/10 px-2 py-0.5 rounded-full mb-1">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                <span>+2.5%</span>
              </div>
            </div>
          </div>
          {/* Stat Card 2 */}
          <div className="flex flex-col gap-2 rounded-xl p-6 bg-overview-surface-dark border border-[#36542c]/50">
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2 bg-overview-danger/10 rounded-full text-overview-danger">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <p className="text-overview-secondary text-sm font-medium uppercase tracking-wider">At Risk</p>
            </div>
            <div className="flex items-end gap-3">
              <p className="text-white text-3xl font-bold leading-none">4</p>
              <span className="text-overview-secondary text-sm mb-1">Students need help</span>
            </div>
          </div>
          {/* Stat Card 3 */}
          <div className="flex flex-col gap-2 rounded-xl p-6 bg-overview-surface-dark border border-[#36542c]/50">
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2 bg-blue-400/10 rounded-full text-blue-400">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <p className="text-overview-secondary text-sm font-medium uppercase tracking-wider">Attendance</p>
            </div>
            <div className="flex items-end gap-3">
              <p className="text-white text-3xl font-bold leading-none">92%</p>
              <div className="flex items-center text-overview-danger text-sm font-medium bg-overview-danger/10 px-2 py-0.5 rounded-full mb-1">
                <span className="material-symbols-outlined text-[16px]">trending_down</span>
                <span>-1.2%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search Toolbar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-6 bg-overview-surface-dark/30 p-2 rounded-xl lg:rounded-full border border-overview-surface-dark">
          {/* Search */}
          <div className="w-full lg:w-auto flex-1 max-w-[480px]">
            <div className="relative flex items-center w-full h-12 rounded-full bg-overview-surface-dark border border-transparent focus-within:border-overview-primary/50 transition-colors">
              <div className="pl-4 text-overview-secondary flex items-center justify-center">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input 
                className="w-full h-full bg-transparent border-none focus:ring-0 text-white placeholder:text-overview-secondary/70 px-3 text-base focus:outline-none" 
                placeholder="Search by name or roll number..." 
                type="text"
              />
            </div>
          </div>
          {/* Filter Controls */}
          <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 no-scrollbar px-1">
            <button className="whitespace-nowrap flex items-center gap-2 px-4 py-2.5 rounded-full bg-overview-primary text-black text-sm font-bold">
              All Students
            </button>
            <button className="whitespace-nowrap flex items-center gap-2 px-4 py-2.5 rounded-full bg-overview-surface-dark text-overview-secondary hover:text-white hover:bg-overview-surface-dark-hover transition-colors text-sm font-medium border border-transparent hover:border-surface-dark-hover">
              At Risk
              <span className="bg-overview-danger text-white text-[10px] px-1.5 py-0.5 rounded-full leading-none">4</span>
            </button>
            <button className="whitespace-nowrap flex items-center gap-2 px-4 py-2.5 rounded-full bg-overview-surface-dark text-overview-secondary hover:text-white hover:bg-overview-surface-dark-hover transition-colors text-sm font-medium border border-transparent hover:border-surface-dark-hover">
              Excelling
            </button>
            <div className="h-6 w-px bg-overview-surface-dark mx-1 hidden lg:block"></div>
            <button className="whitespace-nowrap flex items-center gap-2 px-4 py-2.5 rounded-full bg-overview-surface-dark text-overview-secondary hover:text-white hover:bg-overview-surface-dark-hover transition-colors text-sm font-medium">
              <span className="material-symbols-outlined text-[18px]">filter_list</span>
              More Filters
            </button>
          </div>
        </div>

        {/* Student Data Table */}
        <div className="w-full overflow-hidden rounded-xl border border-overview-surface-dark bg-[#1a2916]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-overview-surface-dark border-b border-[#36542c]">
                  <th className="py-4 px-6 text-sm font-semibold text-overview-secondary uppercase tracking-wider w-[250px]">Student</th>
                  <th className="py-4 px-6 text-sm font-semibold text-overview-secondary uppercase tracking-wider w-[120px]">Roll ID</th>
                  <th className="py-4 px-6 text-sm font-semibold text-overview-secondary uppercase tracking-wider w-[200px]">{t('common.progress')}</th>
                  <th className="py-4 px-6 text-sm font-semibold text-overview-secondary uppercase tracking-wider w-[150px]">{t('progress.averageScore')}</th>
                  <th className="py-4 px-6 text-sm font-semibold text-overview-secondary uppercase tracking-wider w-[150px]">Last Active</th>
                  <th className="py-4 px-6 text-sm font-semibold text-overview-secondary uppercase tracking-wider text-right w-[100px]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-overview-surface-dark">
                {/* Row 1: High Performer */}
                <tr className="group hover:bg-overview-surface-dark/40 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div 
                        className="bg-center bg-cover rounded-full size-10 bg-slate-700" 
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9mHqkmz5J-o1qNoNgKiwP_apcotUPaK5bzZgDivyx8fjFL1hSWdXMqENCrZeUV7WbFDuvzAviN77GXfBRT3nSpv_fEKA19p_LthqBQufVFCWTC8DjxqmSv8Q7puVVWg7BHz9mmPZpeOhNbByIvFjjJZz5oqhNrqfUiCHPhxIzfU7XiNLtYtbu8areLPZMbtm4axtbGZs1bCjM0_7tgNQ3-cnwK5HeRbtFpSMJ_moj51NG_HVhn0J395QU6rqGXPHZ-DlvTNTkwo0")' }}
                      ></div>
                      <div>
                        <p className="text-white font-medium text-base">Aman Singh</p>
                        <p className="text-overview-secondary text-xs">Class 5A</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-overview-secondary text-sm font-mono">2023-001</td>
                  <td className="py-4 px-6">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between text-xs mb-0.5">
                        <span className="text-white">18/20 Lessons</span>
                        <span className="text-overview-primary">90%</span>
                      </div>
                      <div className="w-full bg-overview-bg-dark rounded-full h-2">
                        <div className="bg-overview-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#143d14] text-overview-primary border border-overview-primary/20">
                      92%
                    </span>
                  </td>
                  <td className="py-4 px-6 text-overview-secondary text-sm">2 hours ago</td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-overview-secondary hover:text-white p-2 rounded-full hover:bg-overview-surface-dark transition-colors">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
                {/* Row 2: Average */}
                <tr className="group hover:bg-overview-surface-dark/40 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div 
                        className="bg-center bg-cover rounded-full size-10 bg-slate-700" 
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCyJozQK1iXpcUnjDO7Oj0tqRzlEgLxbH-hI809V1KCaZMMElunN-9WFgtbhdjOR4o0EwyDPLJ1UilfZPdMOqf6lcaV-ANCUMUn8GvpvymJ92o6etRYmpmTx7zDUruvs6tjXJRLCxYPC6kDyvHGMm0jgvvbJybMzbl4b9VprnWAFFNsZk3k0s06asK7Os9J_Ymm88fnvNZueqrFB-HWMYtvKaa-YePLwLUqlPLodG0GERvD072Fl9pYPPFNpTGVmp0UhPq1NJ1NVcw")' }}
                      ></div>
                      <div>
                        <p className="text-white font-medium text-base">Priya Kaur</p>
                        <p className="text-overview-secondary text-xs">Class 5A</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-overview-secondary text-sm font-mono">2023-012</td>
                  <td className="py-4 px-6">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between text-xs mb-0.5">
                        <span className="text-white">12/20 Lessons</span>
                        <span className="text-overview-secondary">60%</span>
                      </div>
                      <div className="w-full bg-overview-bg-dark rounded-full h-2">
                        <div className="bg-overview-secondary h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#2d4625] text-white border border-overview-secondary/20">
                      75%
                    </span>
                  </td>
                  <td className="py-4 px-6 text-overview-secondary text-sm">Yesterday</td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-overview-secondary hover:text-white p-2 rounded-full hover:bg-overview-surface-dark transition-colors">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
                {/* Row 3: At Risk */}
                <tr className="group hover:bg-overview-surface-dark/40 transition-colors bg-overview-danger/5">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div 
                          className="bg-center bg-cover rounded-full size-10 bg-slate-700" 
                          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKT4by1vmSONqsgCCI66Y7Y7mWN5npITT9mQ0cXVXQyg9bllAIomxiZputlyxSqHi_qQK-F9_i-BXWzbO0k1Lfh2t1yqU4gUEa-HcaRftviDtCEtBNeXYK1H3OzrF0miEkXb33RrkvJpPOEfbN88ZSO1XZ6GIc_zQszfkzwljcUNtHz9-HS8802MqggvbJLMmZED2SPXCBnxjOXgUSSetHzCY0--e1ZHrTcFk-mi0b8F7pXMBPhkEgKc4ky6FHwe2zGz9m0_JCd8I")' }}
                        ></div>
                        <div className="absolute -top-1 -right-1 size-3 bg-overview-danger rounded-full border-2 border-overview-bg-dark"></div>
                      </div>
                      <div>
                        <p className="text-white font-medium text-base">Rohan Kumar</p>
                        <p className="text-overview-danger text-xs font-medium">Action Needed</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-overview-secondary text-sm font-mono">2023-008</td>
                  <td className="py-4 px-6">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between text-xs mb-0.5">
                        <span className="text-white">4/20 Lessons</span>
                        <span className="text-overview-danger">20%</span>
                      </div>
                      <div className="w-full bg-overview-bg-dark rounded-full h-2">
                        <div className="bg-overview-danger h-2 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-overview-danger/10 text-overview-danger border border-overview-danger/20">
                      42%
                    </span>
                  </td>
                  <td className="py-4 px-6 text-overview-secondary text-sm">5 days ago</td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-overview-danger hover:text-overview-danger p-2 rounded-full hover:bg-overview-danger/10 transition-colors">
                      <span className="material-symbols-outlined">warning</span>
                    </button>
                  </td>
                </tr>
                {/* Row 4: Average */}
                <tr className="group hover:bg-overview-surface-dark/40 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div 
                        className="bg-center bg-cover rounded-full size-10 bg-slate-700" 
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKY-vN1Turrp13H5elTDQhL2eGo_iGM7WwXykfAMyusijGuFwNzM2DWoxiWKijoKB9Q8k50jV5nW9WJbixDEXMdk7z0-WIczxYwO8xFKdjRbGwAuuB_U4kqP5hFGhenS4edEeIfBLdQ2_IuKlrSZkyLyXjbQn0QzbE09xdzRI_Z8WLayS1bFKerB1HABmUrHXrR94OOLkP7eTtmgDR0mOuUEEMPWeir7IRqFqb39qRPeNKNb3zMo8CRp5ELrVzjooSyFpGy0PphNA")' }}
                      ></div>
                      <div>
                        <p className="text-white font-medium text-base">Gurpreet Singh</p>
                        <p className="text-overview-secondary text-xs">Class 5A</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-overview-secondary text-sm font-mono">2023-015</td>
                  <td className="py-4 px-6">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between text-xs mb-0.5">
                        <span className="text-white">15/20 Lessons</span>
                        <span className="text-overview-secondary">75%</span>
                      </div>
                      <div className="w-full bg-overview-bg-dark rounded-full h-2">
                        <div className="bg-overview-secondary h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#2d4625] text-white border border-overview-secondary/20">
                      81%
                    </span>
                  </td>
                  <td className="py-4 px-6 text-overview-secondary text-sm">3 hours ago</td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-overview-secondary hover:text-white p-2 rounded-full hover:bg-surface-dark transition-colors">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
                {/* Row 5: Needs Attention */}
                <tr className="group hover:bg-overview-surface-dark/40 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div 
                        className="bg-center bg-cover rounded-full size-10 bg-slate-700" 
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCF_hz4fQcUg4v6AqqTBo6xQUaX-CB3IM0dzfBFIufi9CAV_DyPxywNyQrlDAfTB3SlIa7rcL-8LlkUMkecXBEvpND46YTUBEIcBhF11SbyWERuJMGCke9xCnI1BPmOrot3sWqEIfwerIoERpeem8nW5skYDvHuyAJrV_Vuzy0O0_ILsuPX7NjvVklonrPF9ykm2mE6zFGgTDxoNt1OiMkrexkdA2XJ48TX6QKZFYJ7iIrCsnIZldqJiI43LweIL225ZHObJYGMyKM")' }}
                      ></div>
                      <div>
                        <p className="text-white font-medium text-base">Meera Bai</p>
                        <p className="text-overview-secondary text-xs">Class 5A</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-overview-secondary text-sm font-mono">2023-022</td>
                  <td className="py-4 px-6">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between text-xs mb-0.5">
                        <span className="text-white">8/20 Lessons</span>
                        <span className="text-overview-warning">{t('progress.inProgress')}</span>
                      </div>
                      <div className="w-full bg-overview-bg-dark rounded-full h-2">
                        <div className="bg-overview-warning h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-overview-warning/10 text-overview-warning border border-overview-warning/20">
                      55%
                    </span>
                  </td>
                  <td className="py-4 px-6 text-overview-secondary text-sm">1 week ago</td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-overview-secondary hover:text-white p-2 rounded-full hover:bg-overview-surface-dark transition-colors">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-overview-surface-dark bg-overview-bg-dark/30">
            <p className="text-sm text-overview-secondary">Showing 1-5 of 35 students</p>
            <div className="flex gap-2">
              <button className="flex items-center justify-center size-8 rounded-full border border-overview-surface-dark text-overview-secondary hover:text-white hover:bg-overview-surface-dark transition-colors disabled:opacity-50">
                <span className="material-symbols-outlined text-lg">chevron_left</span>
              </button>
              <button className="flex items-center justify-center size-8 rounded-full border border-overview-surface-dark text-overview-secondary hover:text-white hover:bg-overview-surface-dark transition-colors">
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};