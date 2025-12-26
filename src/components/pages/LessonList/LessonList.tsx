import React from 'react';
import { Link } from 'react-router-dom';

export const LessonList: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full bg-background-light dark:bg-lesson-bg-dark text-slate-900 dark:text-white font-lexend p-4 md:p-6 lg:p-8">
      <div className="layout-content-container flex flex-col max-w-[1200px] w-full mx-auto flex-1">
        
        {/* Page Heading & Greeting */}
        <div className="flex flex-col gap-1 py-6">
          <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white">Sat Sri Akal, Aman!</h1>
          <p className="text-slate-600 dark:text-lesson-text-sec text-base font-normal leading-normal">Ready to continue your learning journey today?</p>
        </div>

        {/* Continue Learning Section (Horizontal Card) */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Continue Learning</h3>
          </div>
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-6 rounded-xl bg-white dark:bg-lesson-surface-dark p-4 shadow-lg border border-slate-200 dark:border-lesson-border">
            <div className="flex flex-[2_2_0px] flex-col justify-center gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-xs font-bold bg-slate-100 dark:bg-lesson-border text-lesson-primary">Mathematics</span>
                  <span className="text-slate-400 dark:text-lesson-text-sec text-xs">•</span>
                  <span className="text-slate-500 dark:text-lesson-text-sec text-xs font-medium">15 min remaining</span>
                </div>
                <p className="text-xl font-bold leading-tight text-slate-900 dark:text-white">Introduction to Fractions</p>
                {/* Progress Bar */}
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex justify-between text-xs text-slate-500 dark:text-lesson-text-sec">
                    <span>Progress</span>
                    <span>50%</span>
                  </div>
                  <div className="rounded-full bg-slate-200 dark:bg-[#406336] h-2 w-full max-w-md">
                    <div className="h-2 rounded-full bg-lesson-primary" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <Link to="/view/1" className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-lesson-primary text-black hover:bg-[#3ec01a] transition-colors gap-2 text-sm font-bold w-fit shadow-[0_0_15px_rgba(76,223,32,0.3)]">
                  <span className="material-symbols-outlined text-[20px]">play_arrow</span>
                  <span>Resume Lesson</span>
                </Link>
              </div>
            </div>
            <div 
              className="w-full md:w-1/3 bg-center bg-no-repeat aspect-video bg-cover rounded-xl" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYOEv9_v6MUkMKhlQ053Dlp4vPCOPRLbgl5DqDtZxNWdFXGjfPmZBCJdoME7jF6ZuhpNOU20hUZ_gmfWzRwq3MjlTS5Js3OtZIxJRljoEAg_uboVz-145jvz7aS6JDUH1DjleIccX5E7x_tkK5V4gECpWS0i9K5Oy22BvtnqbeUKEiZzZV8Y6wgeCYWm8NH9wIpWS8wEkZXezuGkqUMq505BDe8eaTXcA8Gwb71Wz2r3G5AGmnfvLJDASBFw36gx_1um5VjWDv6Ew")' }}
            ></div>
          </div>
        </section>

        {/* Search & Filter Bar */}
        <section className="sticky top-[70px] z-40 bg-background-light/95 dark:bg-lesson-bg-dark/95 backdrop-blur py-4 -mx-4 px-4 md:mx-0 md:px-0 border-b border-slate-200 dark:border-lesson-border md:border-none md:bg-transparent md:static mb-8">
          <div className="flex flex-col gap-4">
            {/* Search Input */}
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <span className="material-symbols-outlined text-slate-400 dark:text-lesson-text-sec">search</span>
              </div>
              <input 
                className="block w-full p-4 pl-12 text-sm text-slate-900 dark:text-white border border-slate-200 dark:border-lesson-border rounded-full bg-white dark:bg-lesson-surface-dark placeholder-slate-400 dark:placeholder-lesson-text-sec focus:ring-lesson-primary focus:border-lesson-primary outline-none" 
                placeholder="Search for lessons, topics, or subjects..." 
                type="text"
              />
              <div className="absolute inset-y-0 right-2 flex items-center">
                <button className="p-2 text-slate-400 dark:text-lesson-text-sec hover:text-slate-900 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-lesson-border">
                  <span className="material-symbols-outlined">tune</span>
                </button>
              </div>
            </div>
            
            {/* Subject Filters & Sort */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1 max-w-full">
                <button className="whitespace-nowrap rounded-full bg-lesson-primary text-black px-4 py-2 text-sm font-bold">All</button>
                <button className="whitespace-nowrap rounded-full bg-white dark:bg-lesson-border text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-[#3e5f33] border border-slate-200 dark:border-transparent hover:border-lesson-primary/50 transition-all px-4 py-2 text-sm font-medium">Mathematics</button>
                <button className="whitespace-nowrap rounded-full bg-white dark:bg-lesson-border text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-[#3e5f33] border border-slate-200 dark:border-transparent hover:border-lesson-primary/50 transition-all px-4 py-2 text-sm font-medium">Science</button>
                <button className="whitespace-nowrap rounded-full bg-white dark:bg-lesson-border text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-[#3e5f33] border border-slate-200 dark:border-transparent hover:border-lesson-primary/50 transition-all px-4 py-2 text-sm font-medium">Social Studies</button>
                <button className="whitespace-nowrap rounded-full bg-white dark:bg-lesson-border text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-[#3e5f33] border border-slate-200 dark:border-transparent hover:border-lesson-primary/50 transition-all px-4 py-2 text-sm font-medium">Digital Literacy</button>
                <button className="whitespace-nowrap rounded-full bg-white dark:bg-lesson-border text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-[#3e5f33] border border-slate-200 dark:border-transparent hover:border-lesson-primary/50 transition-all px-4 py-2 text-sm font-medium">Languages</button>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <span className="text-slate-500 dark:text-lesson-text-sec text-sm">Sort by:</span>
                <select className="bg-white dark:bg-lesson-border text-slate-900 dark:text-white text-sm rounded-lg focus:ring-lesson-primary focus:border-lesson-primary block p-2 border-none outline-none">
                  <option>Recommended</option>
                  <option>Newest</option>
                  <option>Difficulty: Low to High</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Lesson Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          
          {/* Card 1: Science (New) */}
          <Link to="/view/2" className="group flex flex-col rounded-xl bg-white dark:bg-lesson-surface-dark overflow-hidden border border-slate-200 dark:border-lesson-border hover:border-lesson-primary/50 hover:shadow-[0_0_20px_rgba(76,223,32,0.1)] transition-all duration-300">
            <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAB7h9M1btmeTBc2KNRvAI2OnLwe-fUbON8xZpAkJQ1XF9Cfp6C46r9sezGeWrFV96sBfRbjlsqyXTiJimKgQv7ySFqPJem2GhA9wKI-e8pbggkg2F9PKMwxqUnT9Ez4i8qnMVf9RGuM7pNdKaAE1cz7211vZVC41w87bTlDxrfM5a1PWMEYL90ZaL9ftelwVC2bJMSykqfs2yZZtdGroojIbFo36c6tYqFm6wCc--FSdUTAsSjlHmPKFOmX-fFNTLeSxbL0aJotNA")' }}>
              <div className="absolute top-3 right-3">
                <span className="bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-lg border border-white/10">Beginner</span>
              </div>
              <div className="absolute bottom-3 left-3">
                <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded-lg border border-white/10">
                  <span className="material-symbols-outlined text-[14px] text-lesson-primary">download_done</span>
                  Available Offline
                </span>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-lesson-text-sec text-xs font-bold uppercase tracking-wider">Science</span>
                <div className="flex items-center gap-1 text-slate-500 dark:text-lesson-text-sec text-xs">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  <span>25 min</span>
                </div>
              </div>
              <h3 className="text-slate-900 dark:text-white font-bold text-lg leading-snug group-hover:text-lesson-primary transition-colors">The Water Cycle</h3>
              <p className="text-slate-600 dark:text-lesson-text-sec text-sm line-clamp-2">Understand evaporation, condensation, and precipitation in our ecosystem.</p>
              <div className="mt-auto pt-4 flex items-center justify-between">
                <button className="rounded-full bg-slate-100 dark:bg-lesson-border hover:bg-lesson-primary hover:text-black text-slate-500 dark:text-white p-2 transition-colors">
                  <span className="material-symbols-outlined block">bookmark_border</span>
                </button>
                <div className="flex items-center gap-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-bold hover:bg-slate-700 dark:hover:bg-gray-200 transition-colors">
                  Start
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 2: Digital Literacy (Completed) */}
          <Link to="/view/3" className="group flex flex-col rounded-xl bg-white dark:bg-lesson-surface-dark overflow-hidden border border-slate-200 dark:border-lesson-border hover:border-lesson-primary/50 transition-all duration-300 opacity-80 hover:opacity-100">
            <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmZerRvBldjzxVlkrNsT2HjA3vS9fLS1ulWyDs1WROIfmPU6WSNKIZHiypFX_uPiXWPYodrsFBIHp7uHc4cUpvKUW384I8KuuMvLGEy9EW7fh7QGkniKXbim7HjUWHeVzCdis_TUO84Jpbja2F46yo2nGr7R5wDT8QUccq8ibxlW2oBI07POB-sRr7RLsqxqaGEIl8vBV3v3fNeFTTx9WE_e1uV9RQlwPbBs93AzlGAeapm0F908jghnzVpMhoFA2mVqEeniHgACI")' }}>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="bg-lesson-primary text-black rounded-full p-2 shadow-lg">
                  <span className="material-symbols-outlined text-[32px] block">check</span>
                </div>
              </div>
              <div className="absolute top-3 right-3">
                <span className="bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-lg border border-white/10">Easy</span>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-lesson-text-sec text-xs font-bold uppercase tracking-wider">Digital Literacy</span>
                <div className="flex items-center gap-1 text-slate-500 dark:text-lesson-text-sec text-xs">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  <span>10 min</span>
                </div>
              </div>
              <h3 className="text-slate-900 dark:text-white font-bold text-lg leading-snug">Typing Basics</h3>
              <p className="text-slate-600 dark:text-lesson-text-sec text-sm line-clamp-2">Learn the home row keys and correct finger placement for faster typing.</p>
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-200 dark:border-lesson-border">
                <span className="text-lesson-primary text-sm font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">trophy</span>
                  Completed
                </span>
                <button className="text-slate-500 dark:text-lesson-text-sec hover:text-slate-900 dark:hover:text-white text-sm font-medium">Review</button>
              </div>
            </div>
          </Link>

          {/* Card 3: Social Studies (New) */}
          <Link to="/view/4" className="group flex flex-col rounded-xl bg-white dark:bg-lesson-surface-dark overflow-hidden border border-slate-200 dark:border-lesson-border hover:border-lesson-primary/50 hover:shadow-[0_0_20px_rgba(76,223,32,0.1)] transition-all duration-300">
            <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAtg-d_67eiEeUHQNyUXc-BCwgO-4f6umpGencWbHTYtH-NGnGYHs0Kcjz2XlTMKUVMyau9KZ34NtAq7jXhxsSt_QEvvLJXbGV5lkHywOhSUxGUi2rMaGk5QUClY5bEAbbvTlk0WpYmMZWSGYL9-DZ9x5zT_Meb3UiKw6-k23Hz-HQHKAMESPvlYAckivR48id4eGJ0GjK91gLhOZSnVas_p_ixKeXwC0SE-fH7tv6jLkVo-vRVak_a-pZwNSYVgbUeGpmYnBkjizU")' }}>
              <div className="absolute top-3 right-3">
                <span className="bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-lg border border-white/10">Intermediate</span>
              </div>
              <div className="absolute bottom-3 left-3">
                <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded-lg border border-white/10">
                  <span className="material-symbols-outlined text-[14px] text-lesson-text-sec">cloud_off</span>
                  Download
                </span>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-lesson-text-sec text-xs font-bold uppercase tracking-wider">Social Studies</span>
                <div className="flex items-center gap-1 text-slate-500 dark:text-lesson-text-sec text-xs">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  <span>40 min</span>
                </div>
              </div>
              <h3 className="text-slate-900 dark:text-white font-bold text-lg leading-snug group-hover:text-lesson-primary transition-colors">History of Punjab</h3>
              <p className="text-slate-600 dark:text-lesson-text-sec text-sm line-clamp-2">Explore the rich cultural and historical timeline of the Punjab region.</p>
              <div className="mt-auto pt-4 flex items-center justify-between">
                <button className="rounded-full bg-slate-100 dark:bg-lesson-border hover:bg-lesson-primary hover:text-black text-slate-500 dark:text-white p-2 transition-colors">
                  <span className="material-symbols-outlined block">bookmark_border</span>
                </button>
                <div className="flex items-center gap-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-bold hover:bg-slate-700 dark:hover:bg-gray-200 transition-colors">
                  Start
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 4: Punjabi (New) */}
          <Link to="/view/5" className="group flex flex-col rounded-xl bg-white dark:bg-lesson-surface-dark overflow-hidden border border-slate-200 dark:border-lesson-border hover:border-lesson-primary/50 hover:shadow-[0_0_20px_rgba(76,223,32,0.1)] transition-all duration-300">
            <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3kuqxBEBS_s3X2ody02pJ_VPx6yMqRo6Bb1GZC_zU-tOIUDVd_-QyLfyEHRR-bEDneLTb4So-4D_MOY5LT8DaMSOOeBD5RZDxDJ5Bv_11TgynB7FlLjToNT-cogx_i1VZhHU6rchIDHzy1TtY5B2I06o8J-tt-aDuWzaii7bg2lZWFDNn0f6KKKnOLYJvgtTyr5lCqXqYU-lhyfv3PvWnqlnqzdV85Bw-bJVghWAr2rPYXLhJ5nMgcaYysuu44FsAmxeabVjFrII")' }}>
              <div className="absolute top-3 right-3">
                <span className="bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-lg border border-white/10">Beginner</span>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-lesson-text-sec text-xs font-bold uppercase tracking-wider">Language</span>
                <div className="flex items-center gap-1 text-slate-500 dark:text-lesson-text-sec text-xs">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  <span>20 min</span>
                </div>
              </div>
              <h3 className="text-slate-900 dark:text-white font-bold text-lg leading-snug group-hover:text-lesson-primary transition-colors">Gurmukhi Alphabet</h3>
              <p className="text-slate-600 dark:text-lesson-text-sec text-sm line-clamp-2">Start your journey with the basics of reading and writing Gurmukhi.</p>
              <div className="mt-auto pt-4 flex items-center justify-between">
                <button className="rounded-full bg-slate-100 dark:bg-lesson-border hover:bg-lesson-primary hover:text-black text-slate-500 dark:text-white p-2 transition-colors">
                  <span className="material-symbols-outlined block">bookmark_border</span>
                </button>
                <div className="flex items-center gap-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-bold hover:bg-slate-700 dark:hover:bg-gray-200 transition-colors">
                  Start
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 5: Math (In Progress) */}
          <Link to="/view/6" className="group flex flex-col rounded-xl bg-white dark:bg-lesson-surface-dark overflow-hidden border border-slate-200 dark:border-lesson-border hover:border-lesson-primary/50 hover:shadow-[0_0_20px_rgba(76,223,32,0.1)] transition-all duration-300">
            <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLUv5hvxR48_1-04ao0v5hetNfjf2CDO9KfTMSDg5feJ9u-6y1BwcwurXi7eQCciS4OzV7l1dQQkzmNdVEMgbFn42KoDBRL_Lqr4cNWtqo4FpVdruGlNNWMwizEH2TV2XPzFfTuSEspRiq-aQyep6rgjKwx4hpNM0xiIXzXuuFhkVloKe6N7G3Xhmxev7IRtN4nWZjfCpz9WWBRt17E2fvcszoWAnD3n-Q3EYndDC_x9YgRuaTL2srds1SD_cwSr0pVvqiKi0nDT4")' }}>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200 dark:bg-[#406336]">
                <div className="h-full bg-lesson-primary" style={{ width: '30%' }}></div>
              </div>
              <div className="absolute top-3 right-3">
                <span className="bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-lg border border-white/10">Advanced</span>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-lesson-text-sec text-xs font-bold uppercase tracking-wider">Mathematics</span>
                <div className="flex items-center gap-1 text-slate-500 dark:text-lesson-text-sec text-xs">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  <span>45 min</span>
                </div>
              </div>
              <h3 className="text-slate-900 dark:text-white font-bold text-lg leading-snug group-hover:text-lesson-primary transition-colors">Geometry & Shapes</h3>
              <p className="text-slate-600 dark:text-lesson-text-sec text-sm line-clamp-2">Advanced concepts in Euclidean geometry and spatial reasoning.</p>
              <div className="mt-auto pt-4 flex items-center justify-between">
                <button className="rounded-full bg-slate-100 dark:bg-lesson-border hover:bg-lesson-primary hover:text-black text-slate-500 dark:text-white p-2 transition-colors">
                  <span className="material-symbols-outlined block">bookmark_border</span>
                </button>
                <div className="flex items-center gap-2 rounded-full bg-lesson-primary text-black px-4 py-2 text-sm font-bold hover:bg-[#3ec01a] transition-colors">
                  Resume
                  <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 6: Science (New) */}
          <Link to="/view/7" className="group flex flex-col rounded-xl bg-white dark:bg-lesson-surface-dark overflow-hidden border border-slate-200 dark:border-lesson-border hover:border-lesson-primary/50 hover:shadow-[0_0_20px_rgba(76,223,32,0.1)] transition-all duration-300">
            <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDyPhOkKlxgbpJskY9xHnbNnmhaapO9gMde721-a77FYNq5sLTfLWjMbMdQ5OTfUUpnUIDq-c_yCsir0SGlK_YsYBBn7lNMrecRt6jNJT-swwClVSwwCWGCi5ggWXc6QubjjykU60Y30R0G_boGZZxQgfgFsJyWbWXZeNiMfTJQrzYCoXi7AdrXQd3-jGJBa-OJs2ulCDFQwxYkYlOgHB5-vcSE9Qu2gkKzCF5XXfdR7vA5RcoP6qnFHq0gFdXS7YLD4C3EJZ-YGKg")' }}>
              <div className="absolute top-3 right-3">
                <span className="bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-lg border border-white/10">Intermediate</span>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-lesson-text-sec text-xs font-bold uppercase tracking-wider">Science</span>
                <div className="flex items-center gap-1 text-slate-500 dark:text-lesson-text-sec text-xs">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  <span>35 min</span>
                </div>
              </div>
              <h3 className="text-slate-900 dark:text-white font-bold text-lg leading-snug group-hover:text-lesson-primary transition-colors">Plant Biology</h3>
              <p className="text-slate-600 dark:text-lesson-text-sec text-sm line-clamp-2">Study the structure and function of plant cells and photosynthesis.</p>
              <div className="mt-auto pt-4 flex items-center justify-between">
                <button className="rounded-full bg-slate-100 dark:bg-lesson-border hover:bg-lesson-primary hover:text-black text-slate-500 dark:text-white p-2 transition-colors">
                  <span className="material-symbols-outlined block">bookmark_border</span>
                </button>
                <div className="flex items-center gap-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-bold hover:bg-slate-700 dark:hover:bg-gray-200 transition-colors">
                  Start
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>

      {/* Floating Action Button for Offline Sync */}
      <button className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-lesson-primary shadow-[0_0_20px_rgba(76,223,32,0.4)] flex items-center justify-center text-black z-50 hover:scale-110 transition-transform">
        <span className="material-symbols-outlined text-[28px]">sync</span>
      </button>
    </div>
  );
};
