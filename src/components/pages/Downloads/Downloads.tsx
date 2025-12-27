import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Downloads: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-background-light dark:bg-downloads-bg-dark text-slate-900 dark:text-white font-lexend overflow-x-hidden min-h-screen flex flex-col">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">
        <div className="layout-container flex h-full grow flex-col">
          {/* Top Navigation */}
          <div className="flex flex-1 justify-center w-full bg-downloads-bg-dark border-b border-downloads-surface-light sticky top-0 z-50">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
              <header className="flex items-center justify-between whitespace-nowrap px-4 md:px-10 py-4">
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-3 text-white">
                    <div className="size-8 text-downloads-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-3xl">school</span>
                    </div>
                    <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">GyaanSetu</h2>
                  </div>
                  <div className="hidden md:flex items-center gap-9">
                    <Link className="text-white hover:text-downloads-primary transition-colors text-sm font-medium leading-normal" to="/app/dashboard">{t('common.home')}</Link>
                    <Link className="text-white hover:text-downloads-primary transition-colors text-sm font-medium leading-normal" to="/app/lessons">{t('common.lessons')}</Link>
                    <Link className="text-downloads-primary text-sm font-medium leading-normal" to="/app/downloads">My Downloads</Link>
                    <Link className="text-white hover:text-downloads-primary transition-colors text-sm font-medium leading-normal" to="/app/profile">{t('auth.signup').split(' ')[1]}</Link>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {/* Search Bar (Desktop) */}
                  <label className="hidden md:flex flex-col min-w-40 h-10 max-w-64">
                    <div className="flex w-full flex-1 items-stretch rounded-full h-full bg-downloads-surface-light overflow-hidden">
                      <div className="text-downloads-text-sec flex border-none items-center justify-center pl-4 pr-2">
                        <span className="material-symbols-outlined text-[20px]">search</span>
                      </div>
                      <input className="flex w-full min-w-0 flex-1 resize-none bg-transparent text-white focus:outline-none placeholder:text-downloads-text-sec px-2 text-sm font-normal leading-normal" placeholder={t('common.search')}/>
                    </div>
                  </label>
                  {/* Profile Button */}
                  <button className="flex items-center justify-center overflow-hidden rounded-full h-10 w-10 md:w-auto md:px-4 bg-downloads-primary text-downloads-bg-dark hover:bg-opacity-90 transition-opacity">
                    <span className="hidden md:block text-sm font-bold leading-normal tracking-[0.015em] mr-2">Profile</span>
                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-6 bg-slate-800" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAo6WjBy-2v7IlPFoFEDNWjV-4dHUnAp0eM4RsTvr6FzyZYiP8OMfEilr2QxuaWfbrXU4r1T_WszmONbD_36qE4kvmWM0RPeUzlJyh0di3ba-vYvL5bbDgFviDaHcQVIYSC1qtJwWpJKbl2PCGfFFwc81OWQetrm4KIiouVglowXWYD5iL3sBmLjPAJ7SYLjKvJzizwu5my8zAkqliA_owffCHLYFFq8vHoO9Q55stBoiUkl8YVAz_Ap1_8SXvf3bIOSnx5Gk-C0pA")' }}></div>
                  </button>
                </div>
              </header>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-1 justify-center py-5 px-4 md:px-10">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1 gap-8">
              
              {/* Header & Storage Section */}
              <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-end p-4 pb-0">
                <div className="flex min-w-72 flex-col gap-3">
                  <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">My Downloads</h1>
                  <p className="text-slate-600 dark:text-downloads-text-sec text-base font-normal leading-normal">Manage your offline content and storage space</p>
                </div>
                {/* Storage Card */}
                <div className="w-full md:w-[400px] bg-white dark:bg-downloads-surface-dark p-5 rounded-2xl border border-slate-200 dark:border-downloads-surface-light shadow-sm">
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-6 justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-500 dark:text-downloads-text-sec">hard_drive</span>
                        <p className="text-slate-900 dark:text-white text-sm font-bold leading-normal">Storage Used</p>
                      </div>
                      <p className="text-slate-900 dark:text-white text-sm font-bold leading-normal">13.6 GB <span className="text-slate-500 dark:text-downloads-text-sec font-normal">/ 16 GB</span></p>
                    </div>
                    <div className="relative w-full h-3 rounded-full bg-slate-200 dark:bg-downloads-surface-light overflow-hidden">
                      <div className="absolute top-0 left-0 h-full bg-downloads-primary rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-slate-500 dark:text-downloads-text-sec text-xs font-normal leading-normal">85% Used</p>
                      <p className="text-downloads-primary text-xs font-bold leading-normal">2.4 GB Free</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filter Chips */}
              <div className="px-4">
                <div className="flex gap-3 flex-wrap">
                  <button className="flex h-9 items-center justify-center px-4 rounded-full bg-downloads-primary text-downloads-bg-dark font-bold text-sm transition-transform hover:scale-105">
                    All
                  </button>
                  <button className="flex h-9 items-center justify-center px-4 rounded-full bg-white dark:bg-downloads-surface-light text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-[#3d5e32] border border-slate-200 dark:border-transparent text-sm font-medium transition-colors">
                    {t('progress.inProgress')}
                    <span className="ml-2 bg-slate-200 dark:bg-downloads-bg-dark text-downloads-primary text-[10px] px-1.5 py-0.5 rounded-full">2</span>
                  </button>
                  <button className="flex h-9 items-center justify-center px-4 rounded-full bg-white dark:bg-downloads-surface-light text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-[#3d5e32] border border-slate-200 dark:border-transparent text-sm font-medium transition-colors">
                    {t('progress.completed')}
                  </button>
                  <button className="flex h-9 items-center justify-center px-4 rounded-full bg-white dark:bg-downloads-surface-light text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-[#3d5e32] border border-slate-200 dark:border-transparent text-sm font-medium transition-colors">
                    Failed
                    <span className="ml-2 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 text-[10px] px-1.5 py-0.5 rounded-full">1</span>
                  </button>
                </div>
              </div>

              {/* Active Downloads Section */}
              <div className="px-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-slate-900 dark:text-white tracking-light text-xl font-bold leading-tight">Active Downloads</h2>
                  <button className="text-slate-500 dark:text-downloads-text-sec hover:text-downloads-primary text-sm font-medium flex items-center gap-1 transition-colors">
                    <span className="material-symbols-outlined text-lg">pause_circle</span> Pause All
                  </button>
                </div>
                <div className="flex flex-col gap-4">
                  {/* Active Item 1: Downloading */}
                  <div className="group bg-white dark:bg-downloads-surface-dark hover:bg-slate-50 dark:hover:bg-[#263823] transition-colors rounded-2xl p-4 flex flex-col md:flex-row gap-4 items-center border border-slate-200 dark:border-downloads-surface-light shadow-sm">
                    <div className="relative w-full md:w-24 h-32 md:h-24 shrink-0 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700">
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                        <div className="w-8 h-8 rounded-full border-2 border-white/30 border-t-downloads-primary animate-spin"></div>
                      </div>
                      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3UxQHeiSBUAKteIwz3qsbwJbclEVkx4VcuJRzc-NPEsZtfGaPREh8PMhinLzTAKxYPMOP0IO4nVY0J--GmKMtAnc-5-ANJSKdZbSCJUnXDXJ8AjM2CHCAQsWC7buLJPplalX782NBzG4fqBfMtXbZYBWidfnSDWMaYpQ9W4JuaDwjO5zf39peENWEwI_87BAdLXOLaFb11Nqd0c6MOBo16cIWFjjl9YHOm1btO8kns2qURC5PubsLJpRt1z8fbwM1Hjb4rZj60_A")' }}></div>
                    </div>
                    <div className="flex flex-col flex-1 w-full gap-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-slate-900 dark:text-white font-bold text-lg">Introduction to Algebra</h3>
                          <p className="text-slate-500 dark:text-downloads-text-sec text-sm">Mathematics • Module 4</p>
                        </div>
                        <span className="md:hidden px-2 py-1 rounded-md bg-downloads-primary/10 text-downloads-primary text-xs font-bold">45%</span>
                      </div>
                      {/* Progress Bar */}
                      <div className="w-full bg-slate-200 dark:bg-downloads-bg-dark rounded-full h-2 mt-1">
                        <div className="bg-downloads-primary h-2 rounded-full relative transition-all duration-500" style={{ width: '45%' }}>
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(76,223,32,0.6)]"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-xs text-slate-500 dark:text-downloads-text-sec mt-1">
                        <span>145 MB of 320 MB</span>
                        <span className="text-slate-700 dark:text-white">1.2 MB/s • 3 min left</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 w-full md:w-auto justify-end md:justify-start border-t md:border-t-0 border-slate-200 dark:border-downloads-surface-light pt-3 md:pt-0 mt-2 md:mt-0">
                      <button aria-label="Pause" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-downloads-surface-light hover:bg-slate-200 dark:hover:bg-[#3d5e32] text-slate-700 dark:text-white flex items-center justify-center transition-colors">
                        <span className="material-symbols-outlined">pause</span>
                      </button>
                      <button aria-label="Cancel" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-downloads-surface-light hover:bg-red-100 dark:hover:bg-red-900/30 text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 flex items-center justify-center transition-colors">
                        <span className="material-symbols-outlined">close</span>
                      </button>
                    </div>
                  </div>

                  {/* Active Item 2: Paused */}
                  <div className="group bg-white dark:bg-downloads-surface-dark hover:bg-slate-50 dark:hover:bg-[#263823] transition-colors rounded-2xl p-4 flex flex-col md:flex-row gap-4 items-center border border-slate-200 dark:border-downloads-surface-light shadow-sm opacity-80">
                    <div className="relative w-full md:w-24 h-32 md:h-24 shrink-0 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700">
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
                        <span className="material-symbols-outlined text-white text-3xl">pause</span>
                      </div>
                      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAN6xsTQzHQ-aBe_DQCrLWwvt4kwL-UMjp2N0OKwzVg7x6ZgmcZjMWhaUKpcf8WtDhMI5zIcIzCqb-5c9rQrcgV3pyk8taFgvWi_0H6xoH2ZSdj_72tTzxqaBR58fAtiiz8RlQEZEmXojNlTJDTgrtLbEd88KEypD605atu7vz1JztiuBqxFGg_sJK2L5bnBsPQ2oUmo8crhcQ3Ea9TQdx04m1BRCa4LnCXZmaQ6CU4eObLeBorgQb8Qm8OsxA51GMHJ7I5Xem0uaU")' }}></div>
                    </div>
                    <div className="flex flex-col flex-1 w-full gap-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-slate-900 dark:text-white font-bold text-lg">Punjabi Literacy Module 3</h3>
                          <p className="text-slate-500 dark:text-downloads-text-sec text-sm">Language • Gurmukhi Script</p>
                        </div>
                        <span className="px-2 py-1 rounded-md bg-yellow-100 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 text-xs font-bold">Paused</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-downloads-bg-dark rounded-full h-2 mt-1">
                        <div className="bg-yellow-500 h-2 rounded-full transition-all duration-500" style={{ width: '12%' }}></div>
                      </div>
                      <div className="flex justify-between items-center text-xs text-slate-500 dark:text-downloads-text-sec mt-1">
                        <span>Waiting for network...</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 w-full md:w-auto justify-end md:justify-start border-t md:border-t-0 border-slate-200 dark:border-downloads-surface-light pt-3 md:pt-0 mt-2 md:mt-0">
                      <button aria-label="Resume" className="w-10 h-10 rounded-full bg-downloads-primary hover:bg-[#3dcc18] text-downloads-bg-dark flex items-center justify-center transition-colors shadow-lg shadow-downloads-primary/20">
                        <span className="material-symbols-outlined font-bold">play_arrow</span>
                      </button>
                      <button aria-label="Cancel" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-downloads-surface-light hover:bg-red-100 dark:hover:bg-red-900/30 text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 flex items-center justify-center transition-colors">
                        <span className="material-symbols-outlined">close</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Library Section */}
              <div className="px-4 pb-10">
                <div className="flex items-center justify-between mb-4 mt-4">
                  <h2 className="text-slate-900 dark:text-white tracking-light text-xl font-bold leading-tight">Downloaded Library</h2>
                  <button className="text-slate-500 dark:text-downloads-text-sec hover:text-red-500 dark:hover:text-red-400 text-sm font-medium flex items-center gap-1 transition-colors">
                    <span className="material-symbols-outlined text-lg">delete_sweep</span> Clear Space
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {/* Failed Item */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 p-3 pr-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30">
                    <div className="w-full sm:w-16 h-16 rounded-lg bg-gray-200 dark:bg-gray-800 shrink-0 overflow-hidden">
                      <div className="w-full h-full bg-cover bg-center grayscale opacity-60" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYmY07U1sYVoAsUovsuYWceV5YgyfWoda85Lli0sepv92Qsyix1sIMs3yn7ytEUF0kHphiOO4aH8dvFW97ixT_aUaC3JJUq_Hswcu2GZ6U4Dqr7k3Y5PFxDxWDxYhiMkHwiI45GdRA_K9Kmy6ggjfgESqMSKvG3pm-Kf39sbYMyCxKkLGGJ7Jl7Y8hrv8i2n4KgAqVUzs-BbctsJ4Suq2BbxUZBMASoAuvi-AHvUcuRbVFoGHYP9cosvRaPufJopc2BRIf5FAtNAk")' }}></div>
                    </div>
                    <div className="flex-1 w-full text-center sm:text-left">
                      <h4 className="text-slate-900 dark:text-white font-medium">Solar System Basics</h4>
                      <p className="text-red-500 dark:text-red-400 text-xs flex items-center justify-center sm:justify-start gap-1 mt-1">
                        <span className="material-symbols-outlined text-sm">error</span>
                        Download Failed - Insufficient Storage
                      </p>
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto justify-center">
                      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-downloads-surface-light text-slate-700 dark:text-white text-xs font-bold hover:bg-slate-50 dark:hover:bg-white/10 transition-colors border border-slate-200 dark:border-transparent">
                        <span className="material-symbols-outlined text-sm">refresh</span> Retry
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-slate-500 dark:text-downloads-text-sec hover:text-red-500 dark:hover:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors">
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </div>
                  </div>

                  {/* Completed Item 1 */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 p-3 pr-4 rounded-xl bg-white dark:bg-downloads-surface-dark hover:bg-slate-50 dark:hover:bg-[#263823] border border-slate-200 dark:border-transparent hover:border-downloads-surface-light dark:hover:border-[#2d4625] transition-all group shadow-sm">
                    <div className="w-full sm:w-16 h-16 rounded-lg bg-gray-200 dark:bg-gray-800 shrink-0 overflow-hidden">
                      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnSV0pKKglWjaoHFpqIaHCP5IHv5VgzzPLL50NC0FAG1eURk-Wdl1NTeX-e2tFJeERQxOf-fLczr-8Xmp-6th_yHjvqiCNxyKdeLxxOZ5R6PKV3rQJxOoF4c5MsoNJ-otUvuu7_FqSkf1Ar5has94kDobpcpI8V6l2zK1LkOeaDJ-vNVMRiBNdj18jf960yORGI2wxbl9O_pdmTwFsQAo8aJNBtk_We_1RkzlrTty0r-bTrDwl1YLXzVnSDki877vnS0pqX-HBwT0")' }}></div>
                    </div>
                    <div className="flex-1 w-full text-center sm:text-left">
                      <h4 className="text-slate-900 dark:text-white font-medium">English Grammar: Nouns</h4>
                      <p className="text-slate-500 dark:text-downloads-text-sec text-xs mt-1">125 MB • Downloaded 2 days ago</p>
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto justify-center">
                      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-downloads-primary text-downloads-bg-dark text-xs font-bold hover:bg-[#3dcc18] transition-colors shadow-lg shadow-downloads-primary/10">
                        <span className="material-symbols-outlined text-lg">play_circle</span> Play
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-slate-500 dark:text-downloads-text-sec hover:text-red-500 dark:hover:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors">
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </div>
                  </div>

                  {/* Completed Item 2 */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 p-3 pr-4 rounded-xl bg-white dark:bg-downloads-surface-dark hover:bg-slate-50 dark:hover:bg-[#263823] border border-slate-200 dark:border-transparent hover:border-downloads-surface-light dark:hover:border-[#2d4625] transition-all group shadow-sm">
                    <div className="w-full sm:w-16 h-16 rounded-lg bg-gray-200 dark:bg-gray-800 shrink-0 overflow-hidden">
                      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC6Ui3RpdRKpyrIjHCITB7qd6ZZtX5XYjAAV2f-vwEwbRKcx8_G3dMN8NMy7EX0pyoLblh6NLcp-wJKu6hWpCz77lCRVoS29KJlwgHwvhexAyub2anEVdb_5PP8EoRZ8fiQQgVIqbCYkS_t8LC6dcwNd0ujDgNFKv2fFQYpZK3ZeKeUUmmf21rl3R0OABa2SlI0PHRLDWxMuXguFmM33FVcz7vlPkBufY4haZfUvEq3cbJ8pcK-2rzQfNslLux_blI5VUviElodx6s")' }}></div>
                    </div>
                    <div className="flex-1 w-full text-center sm:text-left">
                      <h4 className="text-slate-900 dark:text-white font-medium">History: The Mughal Empire</h4>
                      <p className="text-slate-500 dark:text-downloads-text-sec text-xs mt-1">450 MB • Downloaded 1 week ago</p>
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto justify-center">
                      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-downloads-primary text-downloads-bg-dark text-xs font-bold hover:bg-[#3dcc18] transition-colors shadow-lg shadow-downloads-primary/10">
                        <span className="material-symbols-outlined text-lg">play_circle</span> Play
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-slate-500 dark:text-downloads-text-sec hover:text-red-500 dark:hover:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors">
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </div>
                  </div>

                  {/* Completed Item 3 */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 p-3 pr-4 rounded-xl bg-white dark:bg-downloads-surface-dark hover:bg-slate-50 dark:hover:bg-[#263823] border border-slate-200 dark:border-transparent hover:border-downloads-surface-light dark:hover:border-[#2d4625] transition-all group shadow-sm">
                    <div className="w-full sm:w-16 h-16 rounded-lg bg-gray-200 dark:bg-gray-800 shrink-0 overflow-hidden">
                      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAq1qgtkVZdTrXFyJrDqkwfq9V7jTZMN6U2m1PBYOO7oHsMjQCeZ9p7Q-nEkxJz9-jf60CXeo6CgECFad5j-AkzIHdNZEhvxWtpj7IH6VmOBnhvSRt847xoFUW0vDyPw0WfWiu4vSzgHc53M6qHKU6JF6uLapEH201sWygUGIhmcFNBXh2vEBNbK7EcT1pxIbFwUXjSva40RvT19QLmfJM_6tyttS5nhMawEBbtzokrsaFGN5xslT6lRlwGoBoSmOdSQf4EuCQ5otw")' }}></div>
                    </div>
                    <div className="flex-1 w-full text-center sm:text-left">
                      <h4 className="text-slate-900 dark:text-white font-medium">Science: Plant Biology</h4>
                      <p className="text-slate-500 dark:text-downloads-text-sec text-xs mt-1">210 MB • Downloaded 2 weeks ago</p>
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto justify-center">
                      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-downloads-primary text-downloads-bg-dark text-xs font-bold hover:bg-[#3dcc18] transition-colors shadow-lg shadow-downloads-primary/10">
                        <span className="material-symbols-outlined text-lg">play_circle</span> Play
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-slate-500 dark:text-downloads-text-sec hover:text-red-500 dark:hover:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors">
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

