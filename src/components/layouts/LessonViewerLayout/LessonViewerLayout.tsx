import React from 'react';
import { Outlet, Link } from 'react-router-dom';

/**
 * LessonViewerLayout provides a focused viewing environment for lessons.
 * It matches the "GyaanSetu - Lesson Viewer" design.
 */
export const LessonViewerLayout: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white min-h-screen flex flex-col overflow-x-hidden transition-colors duration-300">
            {/* Top Navigation */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-[#2e4328] px-6 lg:px-10 py-3 bg-white dark:bg-[#162013]">
                <div className="flex items-center gap-4">
                    <div className="size-8 text-primary">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">GyaanSetu</h2>
                    <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-[#2e4328]/50 text-green-700 dark:text-primary text-xs font-bold uppercase tracking-wider">
                        <span className="size-2 rounded-full bg-green-600 dark:bg-primary animate-pulse"></span>
                        Online
                    </div>
                </div>
                <div className="flex flex-1 justify-end gap-4 md:gap-8 items-center">
                    <div className="hidden md:flex items-center gap-6 lg:gap-9">
                        <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" to="/app/dashboard">Dashboard</Link>
                        <Link className="text-primary text-sm font-bold leading-normal" to="/app/lessons">My Courses</Link>
                        <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" to="/app/library">Library</Link>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="md:hidden text-inherit">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                        <div 
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 md:size-10 ring-2 ring-primary/20" 
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCK9WwaIXytUPKqhDDjltoFWL80Rbkrsv3zhMfFKF00fX9GIFe7khK5ovI54dyUhKqBrwZdUU50qZIw5-BYkdfbMJZa2Kn6Bdc6Uk28kI8531VpkLbq_S-UGRTGansUxqMwbRnj2ErXs1wgHyeMdK-nxRlbhOGYuu6flLBsnpst5Uqq4B4IhnjQlws9sgEJWd6Fm0iY0PwG2KqopHJ2nlyakIlZN_ZvwyU-bP8BVHC6i2J6D_0YU5OmZy42frnKUWP4OtniX1w8cBs")' }}
                        ></div>
                    </div>
                </div>
            </header>

            {/* Breadcrumbs & Status Bar */}
            <div className="px-6 lg:px-40 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 dark:border-[#2e4328]/30 bg-background-light dark:bg-background-dark">
                <div className="flex flex-wrap gap-2 items-center text-sm md:text-base">
                    <Link className="text-gray-500 dark:text-[#a2c398] font-medium hover:underline" to="/app/lessons">Science</Link>
                    <span className="text-gray-400 dark:text-[#a2c398] material-symbols-outlined text-[16px]">chevron_right</span>
                    <Link className="text-gray-500 dark:text-[#a2c398] font-medium hover:underline" to="/app/lessons">Grade 6</Link>
                    <span className="text-gray-400 dark:text-[#a2c398] material-symbols-outlined text-[16px]">chevron_right</span>
                    <span className="font-bold text-primary">Chapter 4: Photosynthesis</span>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto md:min-w-[200px]">
                    <span className="text-xs font-bold uppercase text-gray-500 dark:text-[#a2c398] whitespace-nowrap">Chapter Progress</span>
                    <div className="h-2 flex-1 rounded-full bg-gray-200 dark:bg-[#426039] overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: '60%' }}></div>
                    </div>
                    <span className="text-xs font-bold text-primary">60%</span>
                </div>
            </div>

            {/* Main Content Layout */}
            <main className="flex-1 flex flex-col lg:flex-row px-4 md:px-6 lg:px-40 py-6 lg:py-8 gap-8">
                <Outlet />
            </main>
        </div>
    );
};
