import React from 'react';

export const ParentDashboard: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-parent-bg-dark text-parent-text-main dark:text-white font-display min-h-screen flex flex-col transition-colors duration-200">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-parent-surface-light/95 dark:bg-parent-surface-dark/95 backdrop-blur-sm border-b border-parent-border dark:border-white/10 px-4 sm:px-8 py-3">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 text-parent-primary flex items-center justify-center bg-parent-primary/10 rounded-full">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-parent-text-main dark:text-white">GyaanSetu</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 bg-parent-bg-light dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 px-4 py-2 rounded-full transition-colors border border-parent-border dark:border-white/10">
              <span className="material-symbols-outlined text-lg">translate</span>
              <span className="text-sm font-medium">English / ਪੰਜਾਬੀ</span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-parent-border dark:border-white/10">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold leading-none dark:text-white">Harpreet Singh</p>
                <p className="text-xs text-parent-text-secondary dark:text-gray-400 mt-1">Parent</p>
              </div>
              <div 
                className="size-10 rounded-full bg-gray-200 bg-cover bg-center border-2 border-white dark:border-parent-surface-dark shadow-sm" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJsij6UMvpPzbHeJN3Z90TKS5fncHosyfOPhXX-4nN29qTVLRZc2loaWpWU8M_pLNOktXWTiIuivsmTDvu1oE7MbahrEWET725zj4NkRByo_NwJtISRzybyyIqDhl7rCoynun301FMpfB8TJCLO1CletQrbNnEiAJQX1ZdOaPVvvjSmoUo80S1PrMDOFLeHnFcI_MO2qwFT_vNWhyraLSEPETiYJRDxfr9y_WRh_YsT3hbIVofUCwWdJ_1tPumfAXJ5TokqAMcZEY')" }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 sm:px-8 py-8 space-y-8">
        {/* Welcome & Child Profile Header */}
        <section className="bg-parent-surface-light dark:bg-parent-surface-dark rounded-xl p-6 sm:p-8 shadow-sm border border-parent-border dark:border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-parent-primary/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          <div className="flex flex-col md:flex-row gap-6 md:items-center relative z-10">
            <div 
              className="size-24 sm:size-32 rounded-full border-4 border-white dark:border-parent-surface-dark shadow-md bg-cover bg-center shrink-0" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSz2gZv7LVmfBEjn3ecC5e_GZ4gsrMxSG4szLh9tAGMB6jYFuF1W9Hwc3WbMi0X42PMC-cBfIO0SpB6t258yEhnGfH7Q4TcA2_ovR3twCyNm4ZpeQF3W8EQJUSH3hyfhqg1sgg1olB0Y85f-qmoIeXOJVYqYw5JZSszyuNToYQocIJZG_dwMw6Q55sQcgE9Mwde2bxHV6y0m5SL9fbKQpFRJlwmKSvX9I7l-oOZVSLEOtGFiLJx5xiyoDjyW7ZJGnQIlVS9AeMvQg')" }}
            ></div>
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-parent-text-main dark:text-white">Sat Sri Akal, Harpreet Singh</h2>
              </div>
              <p className="text-lg text-parent-text-secondary dark:text-gray-300">Here is the progress update for <span className="font-bold text-parent-text-main dark:text-white">Jaskaran Singh</span> (Class 5).</p>
              <div className="flex items-center gap-2 text-sm text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 w-fit px-3 py-1.5 rounded-full mt-2">
                <span className="material-symbols-outlined text-base font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_done</span>
                <span>Last synced: Today, 10:30 AM</span>
              </div>
            </div>
            <div className="w-full md:w-auto mt-4 md:mt-0">
              <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-parent-primary hover:bg-parent-primary-dark text-white font-bold py-3 px-6 rounded-full transition-all shadow-lg shadow-parent-primary/30 transform active:scale-95">
                <span className="material-symbols-outlined">download</span>
                <span>Download Report Card</span>
              </button>
            </div>
          </div>
        </section>

        {/* Stats "At a Glance" */}
        <section>
          <h3 className="text-xl font-bold text-parent-text-main dark:text-white mb-4 px-1 flex items-center gap-2">
            <span className="material-symbols-outlined text-parent-primary">monitoring</span>
            At a Glance
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Streak Card */}
            <div className="bg-white dark:bg-parent-surface-dark p-6 rounded-xl border border-parent-border dark:border-white/5 flex flex-col justify-between h-full group hover:border-parent-primary/50 transition-colors shadow-sm">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-full">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-parent-text-secondary dark:text-gray-500 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded-md">Consistency</span>
              </div>
              <div className="mt-4">
                <p className="text-4xl font-bold text-parent-text-main dark:text-white">5 Days</p>
                <p className="text-parent-text-secondary dark:text-gray-400 font-medium">Current Learning Streak</p>
              </div>
            </div>
            {/* Lessons Card */}
            <div className="bg-white dark:bg-parent-surface-dark p-6 rounded-xl border border-parent-border dark:border-white/5 flex flex-col justify-between h-full group hover:border-parent-primary/50 transition-colors shadow-sm">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-parent-text-secondary dark:text-gray-500 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded-md">Volume</span>
              </div>
              <div className="mt-4">
                <p className="text-4xl font-bold text-parent-text-main dark:text-white">12</p>
                <p className="text-parent-text-secondary dark:text-gray-400 font-medium">Lessons Completed This Month</p>
              </div>
            </div>
            {/* Hours Card */}
            <div className="bg-white dark:bg-parent-surface-dark p-6 rounded-xl border border-parent-border dark:border-white/5 flex flex-col justify-between h-full group hover:border-parent-primary/50 transition-colors shadow-sm">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-parent-text-secondary dark:text-gray-500 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded-md">Engagement</span>
              </div>
              <div className="mt-4">
                <p className="text-4xl font-bold text-parent-text-main dark:text-white">8.5 hrs</p>
                <p className="text-parent-text-secondary dark:text-gray-400 font-medium">Total Learning Time</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Grid: Subject Performance & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Subject Performance (2/3 width) */}
          <section className="lg:col-span-2 space-y-4">
            <h3 className="text-xl font-bold text-parent-text-main dark:text-white px-1 flex items-center gap-2">
              <span className="material-symbols-outlined text-parent-primary">pie_chart</span>
              Subject Performance
            </h3>
            <div className="bg-white dark:bg-parent-surface-dark rounded-xl border border-parent-border dark:border-white/5 p-6 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Math Card */}
                <div className="flex flex-col p-4 rounded-lg bg-parent-bg-light dark:bg-white/5 border border-transparent hover:border-parent-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white dark:bg-parent-surface-dark p-2 rounded-full shadow-sm">
                      <span className="material-symbols-outlined text-parent-primary">calculate</span>
                    </div>
                    <h4 className="font-bold text-lg dark:text-white">Mathematics</h4>
                  </div>
                  <div className="space-y-2 mt-auto">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-parent-text-secondary dark:text-gray-400">Progress</span>
                      <span className="text-parent-primary font-bold">75%</span>
                    </div>
                    <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-parent-primary rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <p className="text-xs text-parent-text-secondary dark:text-gray-500 pt-1">Grade: A | 3 Modules pending</p>
                  </div>
                </div>
                {/* Punjabi Card */}
                <div className="flex flex-col p-4 rounded-lg bg-parent-bg-light dark:bg-white/5 border border-transparent hover:border-parent-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white dark:bg-parent-surface-dark p-2 rounded-full shadow-sm">
                      <span className="material-symbols-outlined text-parent-primary">book_2</span>
                    </div>
                    <h4 className="font-bold text-lg dark:text-white">Punjabi</h4>
                  </div>
                  <div className="space-y-2 mt-auto">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-parent-text-secondary dark:text-gray-400">Progress</span>
                      <span className="text-parent-primary font-bold">90%</span>
                    </div>
                    <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-parent-primary rounded-full" style={{ width: '90%' }}></div>
                    </div>
                    <p className="text-xs text-parent-text-secondary dark:text-gray-500 pt-1">Grade: A+ | Excellent work!</p>
                  </div>
                </div>
                {/* Digital Skills Card */}
                <div className="flex flex-col p-4 rounded-lg bg-parent-bg-light dark:bg-white/5 border border-transparent hover:border-parent-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white dark:bg-parent-surface-dark p-2 rounded-full shadow-sm">
                      <span className="material-symbols-outlined text-parent-primary">computer</span>
                    </div>
                    <h4 className="font-bold text-lg dark:text-white">Digital Skills</h4>
                  </div>
                  <div className="space-y-2 mt-auto">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-parent-text-secondary dark:text-gray-400">Progress</span>
                      <span className="text-yellow-500 font-bold">40%</span>
                    </div>
                    <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-400 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                    <p className="text-xs text-parent-text-secondary dark:text-gray-500 pt-1">Grade: B | Needs more practice</p>
                  </div>
                </div>
                {/* Science Card */}
                <div className="flex flex-col p-4 rounded-lg bg-parent-bg-light dark:bg-white/5 border border-transparent hover:border-parent-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white dark:bg-parent-surface-dark p-2 rounded-full shadow-sm">
                      <span className="material-symbols-outlined text-parent-primary">science</span>
                    </div>
                    <h4 className="font-bold text-lg dark:text-white">Science</h4>
                  </div>
                  <div className="space-y-2 mt-auto">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-parent-text-secondary dark:text-gray-400">Progress</span>
                      <span className="text-parent-primary font-bold">60%</span>
                    </div>
                    <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-parent-primary rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <p className="text-xs text-parent-text-secondary dark:text-gray-500 pt-1">Grade: B+ | Steady progress</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Teacher's Note */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-900/30 flex gap-4 items-start">
              <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-full text-blue-600 dark:text-blue-200 shrink-0">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              </div>
              <div>
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Teacher's Note</h4>
                <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
                  "Jaskaran is showing great improvement in Punjabi reading. Please encourage him to spend 15 more minutes on Digital Skills this week."
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400 mt-2 font-medium">- Mr. Sharma, Class Teacher</p>
              </div>
            </div>
          </section>

          {/* Recent Activity Timeline (1/3 width) */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold text-parent-text-main dark:text-white px-1 flex items-center gap-2">
              <span className="material-symbols-outlined text-parent-primary">history</span>
              Recent Activity
            </h3>
            <div className="bg-white dark:bg-parent-surface-dark rounded-xl border border-parent-border dark:border-white/5 p-6 shadow-sm h-full">
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:dark:via-gray-700 before:to-transparent">
                {/* Timeline Item 1 */}
                <div className="relative flex gap-4">
                  <div className="absolute left-[18px] mt-1 size-3 rounded-full border-2 border-parent-primary bg-parent-bg-light dark:bg-parent-surface-dark ring-4 ring-white dark:ring-parent-surface-dark z-10"></div>
                  <div className="flex-1 ml-8">
                    <p className="text-xs font-medium text-parent-text-secondary dark:text-gray-400 mb-0.5">Today, 9:45 AM</p>
                    <h4 className="text-base font-bold text-parent-text-main dark:text-white">Fractions: Introduction</h4>
                    <p className="text-sm text-parent-primary font-medium">Mathematics • Completed</p>
                  </div>
                </div>
                {/* Timeline Item 2 */}
                <div className="relative flex gap-4">
                  <div className="absolute left-[18px] mt-1 size-3 rounded-full border-2 border-parent-primary bg-parent-bg-light dark:bg-parent-surface-dark ring-4 ring-white dark:ring-parent-surface-dark z-10"></div>
                  <div className="flex-1 ml-8">
                    <p className="text-xs font-medium text-parent-text-secondary dark:text-gray-400 mb-0.5">Yesterday, 4:30 PM</p>
                    <h4 className="text-base font-bold text-parent-text-main dark:text-white">Gurmukhi Alphabet</h4>
                    <p className="text-sm text-parent-primary font-medium">Punjabi • Completed</p>
                  </div>
                </div>
                {/* Timeline Item 3 */}
                <div className="relative flex gap-4">
                  <div className="absolute left-[18px] mt-1 size-3 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-parent-bg-light dark:bg-parent-surface-dark ring-4 ring-white dark:ring-parent-surface-dark z-10"></div>
                  <div className="flex-1 ml-8">
                    <p className="text-xs font-medium text-parent-text-secondary dark:text-gray-400 mb-0.5">Yesterday, 4:00 PM</p>
                    <h4 className="text-base font-bold text-parent-text-main dark:text-white">Mouse & Keyboard Basics</h4>
                    <p className="text-sm text-yellow-600 dark:text-yellow-500 font-medium">Digital Skills • In Progress</p>
                  </div>
                </div>
                {/* Timeline Item 4 */}
                <div className="relative flex gap-4">
                  <div className="absolute left-[18px] mt-1 size-3 rounded-full border-2 border-parent-primary bg-parent-bg-light dark:bg-parent-surface-dark ring-4 ring-white dark:ring-parent-surface-dark z-10"></div>
                  <div className="flex-1 ml-8">
                    <p className="text-xs font-medium text-parent-text-secondary dark:text-gray-400 mb-0.5">2 Days Ago</p>
                    <h4 className="text-base font-bold text-parent-text-main dark:text-white">Plants & Environment</h4>
                    <p className="text-sm text-parent-primary font-medium">Science • Completed</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-8 py-2 text-sm text-parent-primary hover:text-parent-primary-dark font-bold border border-parent-primary/20 hover:border-parent-primary/50 rounded-full transition-colors">
                View Full History
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-parent-border dark:border-white/10 mt-auto bg-white dark:bg-parent-surface-dark py-6">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-parent-text-secondary dark:text-gray-500">
          <p>© 2023 GyaanSetu Foundation. Made with ❤️ for Punjab.</p>
          <div className="flex gap-6">
            <a className="hover:text-parent-primary transition-colors" href="#">Help</a>
            <a className="hover:text-parent-primary transition-colors" href="#">Privacy</a>
            <a className="hover:text-parent-primary transition-colors" href="#">Contact Teacher</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
