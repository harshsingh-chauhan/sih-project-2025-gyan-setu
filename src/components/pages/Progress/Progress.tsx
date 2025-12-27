import React from 'react';
import { Link } from 'react-router-dom';

export const Progress: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-progress-bg-dark font-lexend text-slate-900 dark:text-white antialiased transition-colors duration-200 min-h-screen flex flex-col overflow-x-hidden">
      
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-progress-card-dark bg-background-light/95 dark:bg-progress-bg-dark/95 backdrop-blur-sm px-6 py-3 lg:px-10">
        <div className="flex items-center gap-4">
          <div className="size-8 text-progress-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">local_library</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">GyaanSetu</h2>
        </div>
        <div className="hidden md:flex flex-1 justify-center gap-8">
          <Link className="text-sm font-medium leading-normal opacity-70 hover:opacity-100 hover:text-progress-primary transition-colors" to="/app/dashboard">Dashboard</Link>
          <Link className="text-sm font-medium leading-normal opacity-70 hover:opacity-100 hover:text-progress-primary transition-colors" to="/app/lessons">Lessons</Link>
          <Link className="text-progress-primary text-sm font-bold leading-normal" to="/app/progress">Progress</Link>
          <Link className="text-sm font-medium leading-normal opacity-70 hover:opacity-100 hover:text-progress-primary transition-colors" to="/app/library">Library</Link>
        </div>
        <div className="flex items-center justify-end gap-4">
          <div className="hidden sm:flex gap-2">
            <button className="group flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-200 dark:bg-progress-card-dark hover:bg-progress-primary/20 transition-colors">
              <span className="material-symbols-outlined text-gray-600 dark:text-white group-hover:text-progress-primary">cloud_done</span>
            </button>
            <button className="group flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-200 dark:bg-progress-card-dark hover:bg-progress-primary/20 transition-colors">
              <span className="material-symbols-outlined text-gray-600 dark:text-white group-hover:text-progress-primary">notifications</span>
            </button>
          </div>
          <div 
            className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-progress-primary cursor-pointer" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCj3n1HeCz_vRyRjap8AaruDM9eOESdAr5MpALWNg5e8ofjdfYRYVQnRlpZmp7BIeFelYFqFdqnCMPtY4w2gRfJ-bInOlJF7UBUDoGMPAqQtwrNKL4UmQ4X7I_Attoe0tgDMXV1NEC4TUIIsT1oDIV7EaPuZL2BHo7y4GFxWuuW9Rs2OKTqAXGYfrE5YP7GEb7peOnhpkVLfM2XzN8-7Qu3tvpcb9taX-ghnSdbg4l-DPONAnEaMsJVkpZUphRTvaYZHgnSvUmuq8A")' }}
          ></div>
        </div>
      </header>

      <main className="layout-container flex h-full grow flex-col px-4 md:px-10 lg:px-40 py-8">
        <div className="layout-content-container flex flex-col max-w-[1200px] mx-auto w-full flex-1 gap-8">
          
          {/* Page Heading & Welcome */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Sat Sri Akal, Aman!</h1>
              <p className="text-gray-500 dark:text-progress-subtle-text text-base font-normal">Great job this week! Here is your learning summary.</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-progress-card-dark rounded-full border border-gray-300 dark:border-transparent">
              <span className="material-symbols-outlined text-orange-500">local_fire_department</span>
              <span className="text-sm font-bold tracking-wide">12 Day Streak</span>
            </div>
          </div>

          {/* Key Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Stat Card 1 */}
            <div className="flex flex-col gap-2 rounded-2xl p-6 bg-white dark:bg-progress-card-dark shadow-sm border border-gray-100 dark:border-transparent relative overflow-hidden group">
              <div className="absolute right-[-10px] top-[-10px] opacity-5 rotate-12 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-9xl">menu_book</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <span className="material-symbols-outlined">library_books</span>
                </div>
                <p className="text-base font-medium opacity-80">Total Lessons</p>
              </div>
              <p className="text-4xl font-bold tracking-tight">42</p>
              <p className="text-xs text-green-600 dark:text-progress-primary font-medium mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">trending_up</span> +4 this week
              </p>
            </div>
            {/* Stat Card 2 */}
            <div className="flex flex-col gap-2 rounded-2xl p-6 bg-white dark:bg-progress-card-dark shadow-sm border border-gray-100 dark:border-transparent relative overflow-hidden group">
              <div className="absolute right-[-10px] top-[-10px] opacity-5 rotate-12 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-9xl">quiz</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                  <span className="material-symbols-outlined">assignment_turned_in</span>
                </div>
                <p className="text-base font-medium opacity-80">Avg Quiz Score</p>
              </div>
              <p className="text-4xl font-bold tracking-tight">85%</p>
              <p className="text-xs text-green-600 dark:text-progress-primary font-medium mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">arrow_upward</span> Top 10% in class
              </p>
            </div>
            {/* Stat Card 3 */}
            <div className="flex flex-col gap-2 rounded-2xl p-6 bg-white dark:bg-progress-card-dark shadow-sm border border-gray-100 dark:border-transparent relative overflow-hidden group">
              <div className="absolute right-[-10px] top-[-10px] opacity-5 rotate-12 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-9xl">schedule</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400">
                  <span className="material-symbols-outlined">timer</span>
                </div>
                <p className="text-base font-medium opacity-80">Learning Hours</p>
              </div>
              <p className="text-4xl font-bold tracking-tight">12.5</p>
              <p className="text-xs text-gray-500 dark:text-progress-subtle-text font-medium mt-1">
                Just 2.5 hrs to next badge
              </p>
            </div>
          </div>

          {/* Main Content Split */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Progress & Charts (Takes up 2/3 space on large screens) */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Overall & Subject Performance Card */}
              <div className="rounded-2xl bg-white dark:bg-progress-card-dark p-6 md:p-8 shadow-sm border border-gray-100 dark:border-transparent">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Radial Progress */}
                  <div className="relative flex flex-col items-center justify-center min-w-[200px]">
                    <h3 className="text-lg font-bold mb-4">Overall Completion</h3>
                    <div className="relative size-48">
                      <svg className="size-full rotate-[-90deg]" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                        {/* Background Circle */}
                        <path className="text-gray-200 dark:text-[#152112]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
                        {/* Progress Circle (65%) */}
                        <path className="text-progress-primary drop-shadow-[0_0_10px_rgba(76,223,32,0.4)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="65, 100" strokeLinecap="round" strokeWidth="3"></path>
                      </svg>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                        <span className="text-4xl font-black block">65%</span>
                        <span className="text-xs uppercase tracking-wider opacity-70">Complete</span>
                      </div>
                    </div>
                  </div>
                  {/* Vertical Divider (Desktop) */}
                  <div className="hidden md:block w-px h-64 bg-gray-200 dark:bg-[#152112]"></div>
                  {/* Subject Bars */}
                  <div className="flex-1 w-full flex flex-col justify-center gap-6">
                    <h3 className="text-lg font-bold mb-1">Subject Performance</h3>
                    {/* Math */}
                    <div className="group">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium flex items-center gap-2"><span className="material-symbols-outlined text-sm">calculate</span> Mathematics</span>
                        <span className="font-bold">70%</span>
                      </div>
                      <div className="h-3 w-full bg-gray-200 dark:bg-[#152112] rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    {/* Science */}
                    <div className="group">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium flex items-center gap-2"><span className="material-symbols-outlined text-sm">science</span> Science</span>
                        <span className="font-bold">65%</span>
                      </div>
                      <div className="h-3 w-full bg-gray-200 dark:bg-[#152112] rounded-full overflow-hidden">
                        <div className="h-full bg-teal-500 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                    {/* English */}
                    <div className="group">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium flex items-center gap-2"><span className="material-symbols-outlined text-sm">translate</span> English</span>
                        <span className="font-bold">40%</span>
                      </div>
                      <div className="h-3 w-full bg-gray-200 dark:bg-[#152112] rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                    {/* Punjabi */}
                    <div className="group">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium flex items-center gap-2"><span className="material-symbols-outlined text-sm">language</span> Punjabi</span>
                        <span className="font-bold">90%</span>
                      </div>
                      <div className="h-3 w-full bg-gray-200 dark:bg-[#152112] rounded-full overflow-hidden">
                        <div className="h-full bg-progress-primary rounded-full shadow-[0_0_10px_rgba(76,223,32,0.3)]" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Achievements / Badges Section */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold px-1">Achievements</h3>
                  <a className="text-progress-primary text-sm font-bold hover:underline" href="#">View All</a>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {/* Badge 1 */}
                  <div className="bg-white dark:bg-progress-card-dark rounded-xl p-4 flex flex-col items-center gap-3 text-center border border-gray-100 dark:border-transparent hover:-translate-y-1 transition-transform cursor-pointer">
                    <div className="size-16 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 flex items-center justify-center text-white shadow-lg">
                      <span className="material-symbols-outlined text-3xl">emoji_events</span>
                    </div>
                    <div>
                      <p className="font-bold text-sm">Early Bird</p>
                      <p className="text-xs text-gray-500 dark:text-progress-subtle-text">7 Day Streak</p>
                    </div>
                  </div>
                  {/* Badge 2 */}
                  <div className="bg-white dark:bg-progress-card-dark rounded-xl p-4 flex flex-col items-center gap-3 text-center border border-gray-100 dark:border-transparent hover:-translate-y-1 transition-transform cursor-pointer">
                    <div className="size-16 rounded-full bg-gradient-to-br from-blue-300 to-blue-600 flex items-center justify-center text-white shadow-lg">
                      <span className="material-symbols-outlined text-3xl">functions</span>
                    </div>
                    <div>
                      <p className="font-bold text-sm">Math Wizard</p>
                      <p className="text-xs text-gray-500 dark:text-progress-subtle-text">Score 90%+</p>
                    </div>
                  </div>
                  {/* Badge 3 */}
                  <div className="bg-white dark:bg-progress-card-dark rounded-xl p-4 flex flex-col items-center gap-3 text-center border border-gray-100 dark:border-transparent hover:-translate-y-1 transition-transform cursor-pointer">
                    <div className="size-16 rounded-full bg-gradient-to-br from-progress-primary to-green-700 flex items-center justify-center text-white shadow-lg">
                      <span className="material-symbols-outlined text-3xl">eco</span>
                    </div>
                    <div>
                      <p className="font-bold text-sm">Nature Lover</p>
                      <p className="text-xs text-gray-500 dark:text-progress-subtle-text">Science Pro</p>
                    </div>
                  </div>
                  {/* Badge 4 (Locked) */}
                  <div className="bg-white dark:bg-progress-card-dark rounded-xl p-4 flex flex-col items-center gap-3 text-center border border-gray-100 dark:border-transparent opacity-60 relative">
                    <div className="absolute top-2 right-2 text-gray-400">
                      <span className="material-symbols-outlined text-lg">lock</span>
                    </div>
                    <div className="size-16 rounded-full bg-gray-200 dark:bg-[#152112] flex items-center justify-center text-gray-400 dark:text-gray-600">
                      <span className="material-symbols-outlined text-3xl">psychology</span>
                    </div>
                    <div>
                      <p className="font-bold text-sm">Super Reader</p>
                      <p className="text-xs text-gray-500 dark:text-progress-subtle-text">Read 5 Books</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Goals & Activity (1/3 space) */}
            <div className="flex flex-col gap-6">
              {/* Goals Panel */}
              <div className="bg-white dark:bg-progress-card-dark rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-transparent flex flex-col h-fit">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">Current Goals</h3>
                  <button className="size-8 rounded-full hover:bg-black/10 dark:hover:bg-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <div className="space-y-3">
                  {/* Goal 1 */}
                  <label className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-[#152112] cursor-pointer hover:bg-gray-100 dark:hover:bg-[#1a2b16] transition-colors">
                    <input defaultChecked className="mt-1 size-5 rounded border-gray-300 text-progress-primary focus:ring-progress-primary bg-transparent" type="checkbox"/>
                    <div className="flex-1">
                      <p className="text-sm font-medium line-through opacity-60">Read "Solar System" Chapter</p>
                      <p className="text-xs text-progress-primary font-semibold mt-1">Completed today</p>
                    </div>
                  </label>
                  {/* Goal 2 */}
                  <label className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-[#152112] cursor-pointer hover:bg-gray-100 dark:hover:bg-[#1a2b16] transition-colors">
                    <input className="mt-1 size-5 rounded border-gray-300 text-progress-primary focus:ring-progress-primary bg-transparent" type="checkbox"/>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Take the "Fractions" Quiz</p>
                      <p className="text-xs text-gray-500 dark:text-progress-subtle-text mt-1">Due tomorrow</p>
                    </div>
                  </label>
                  {/* Goal 3 */}
                  <label className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-[#152112] cursor-pointer hover:bg-gray-100 dark:hover:bg-[#1a2b16] transition-colors">
                    <input className="mt-1 size-5 rounded border-gray-300 text-progress-primary focus:ring-progress-primary bg-transparent" type="checkbox"/>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Watch "Photosynthesis" Video</p>
                      <p className="text-xs text-gray-500 dark:text-progress-subtle-text mt-1">Science Module</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Recent Activity Log */}
              <div className="bg-white dark:bg-progress-card-dark rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-transparent flex flex-col h-fit">
                <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
                <div className="relative pl-2">
                  {/* Vertical Line */}
                  <div className="absolute left-2 top-2 bottom-4 w-px bg-gray-200 dark:bg-[#152112]"></div>
                  <div className="space-y-6">
                    {/* Activity 1 */}
                    <div className="relative flex gap-4 items-start pl-6">
                      <div className="absolute left-0 top-1 size-4 rounded-full border-2 border-white dark:border-progress-card-dark bg-progress-primary z-10"></div>
                      <div className="flex-1">
                        <p className="text-sm font-bold">Solar System Quiz</p>
                        <p className="text-xs text-gray-500 dark:text-progress-subtle-text">Scored 9/10 • 2 hours ago</p>
                      </div>
                    </div>
                    {/* Activity 2 */}
                    <div className="relative flex gap-4 items-start pl-6">
                      <div className="absolute left-0 top-1 size-4 rounded-full border-2 border-white dark:border-progress-card-dark bg-blue-500 z-10"></div>
                      <div className="flex-1">
                        <p className="text-sm font-bold">Completed Chapter 4</p>
                        <p className="text-xs text-gray-500 dark:text-progress-subtle-text">Math: Basic Geometry • Yesterday</p>
                      </div>
                    </div>
                    {/* Activity 3 */}
                    <div className="relative flex gap-4 items-start pl-6">
                      <div className="absolute left-0 top-1 size-4 rounded-full border-2 border-white dark:border-progress-card-dark bg-yellow-500 z-10"></div>
                      <div className="flex-1">
                        <p className="text-sm font-bold">Badge Earned: Scholar</p>
                        <p className="text-xs text-gray-500 dark:text-progress-subtle-text">Achievement • 2 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Offline Indicator */}
              <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white dark:bg-progress-card-dark/50 border border-dashed border-gray-300 dark:border-gray-600">
                <span className="material-symbols-outlined text-sm text-gray-500 dark:text-progress-subtle-text">cloud_sync</span>
                <span className="text-xs font-medium text-gray-500 dark:text-progress-subtle-text">Last synced: Today, 10:30 AM</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
