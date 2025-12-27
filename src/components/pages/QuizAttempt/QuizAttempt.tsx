import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const QuizAttempt: React.FC = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>('b'); // Default to 'b' as per design simulation

  return (
    <div className="bg-background-light dark:bg-quiz-bg-dark font-lexend text-slate-900 dark:text-white flex flex-col h-screen overflow-hidden selection:bg-quiz-primary selection:text-quiz-bg-dark transition-colors duration-300">
      
      {/* Top Navigation Bar */}
      <header className="flex-none w-full border-b border-quiz-border-dark bg-quiz-bg-dark/95 backdrop-blur-sm z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Back/Info */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate(-1)}
                className="text-white/80 hover:text-quiz-primary transition-colors p-2 rounded-full hover:bg-white/5"
              >
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <div>
                <h1 className="text-base sm:text-lg font-bold leading-tight tracking-tight text-white">Basic Mathematics</h1>
                <p className="text-xs text-white/60">Chapter 3: Fractions</p>
              </div>
            </div>
            {/* Right: Timer & Exit */}
            <div className="flex items-center gap-3 sm:gap-6">
              {/* Timer Pill */}
              <div className="hidden sm:flex items-center gap-2 bg-quiz-surface-dark px-4 py-1.5 rounded-full border border-quiz-border-dark/50">
                <span className="material-symbols-outlined text-quiz-primary text-lg">timer</span>
                <span className="text-white font-mono font-medium tracking-wide">14:20</span>
              </div>
              {/* Mobile Timer Icon Only */}
              <button className="sm:hidden text-white/80 hover:text-quiz-primary">
                <span className="material-symbols-outlined">timer</span>
              </button>
              <button 
                onClick={() => navigate('/app/lessons')}
                className="group flex items-center justify-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold text-white/60 hover:text-red-400 hover:bg-red-400/10 transition-all border border-transparent hover:border-red-400/20"
              >
                <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">close</span>
                <span className="hidden sm:inline">Quit</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto w-full relative">
        <div className="max-w-3xl mx-auto px-4 py-6 sm:px-6 sm:py-8 flex flex-col gap-6">
          
          {/* Progress Section */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-end px-1">
              <p className="text-quiz-primary font-medium text-sm tracking-wide uppercase">Question 4 of 10</p>
              <p className="text-white/40 text-xs">40% Complete</p>
            </div>
            <div className="h-2 w-full bg-quiz-surface-dark rounded-full overflow-hidden">
              <div className="h-full bg-quiz-primary rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(76,223,32,0.5)]" style={{ width: '40%' }}></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-quiz-surface-dark rounded-2xl shadow-xl border border-quiz-border-dark overflow-hidden">
            {/* Question Image Area */}
            <div className="relative w-full aspect-video sm:aspect-[21/9] bg-[#0f180d] flex items-center justify-center group overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwBZuEE4V2YQiUauo32lUKMFcgitbGiSTsjGozKd9J3chMPylHNgE09L9c_1eFMV2NcUP6RBizDkjiQLoQ21WAFeB5kphcQqJiaoxV20lqtu5E9fU3g0KMS8HcULNHZXwk0nUY1ZnG5OoBGLuXzv-Yg3U-2lsJhNCoakAkCcFKXikHr5xXtYs4sEk1oIVZSecB-_5nzq5tK47T4MuQ1HY4ituOYYQKDaYIdwz59vexv43sjoFia3WDT_9vn2Q6idXFS7l5r6oeSaE")' }}
              ></div>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-quiz-surface-dark via-transparent to-transparent"></div>
              <div className="absolute bottom-3 right-3">
                <button aria-label="Zoom Image" className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-lg backdrop-blur-md transition-all">
                  <span className="material-symbols-outlined text-xl">zoom_in</span>
                </button>
              </div>
            </div>
            {/* Question Text */}
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-relaxed">
                Identify the shaded fraction in the diagram above.
              </h2>
              <p className="mt-2 text-white/60 text-sm">Select the option that best represents the green area relative to the total area.</p>
            </div>
          </div>

          {/* Answer Options */}
          <div aria-labelledby="question-label" className="flex flex-col gap-3" role="radiogroup">
            {/* Option 1 */}
            <label className="group relative cursor-pointer">
              <input 
                className="sr-only peer" 
                name="quiz-option" 
                type="radio" 
                value="a"
                checked={selectedOption === 'a'}
                onChange={() => setSelectedOption('a')}
              />
              <div className={`flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${selectedOption === 'a' ? 'border-quiz-primary bg-quiz-primary/10' : 'border-quiz-border-dark bg-quiz-bg-dark/50 hover:bg-quiz-surface-dark hover:border-quiz-primary/50'}`}>
                <div className={`flex-none flex items-center justify-center w-6 h-6 rounded-full border-2 mr-4 transition-colors ${selectedOption === 'a' ? 'border-quiz-primary bg-quiz-primary' : 'border-white/30'}`}>
                  {selectedOption === 'a' && <div className="w-2 h-2 bg-quiz-bg-dark rounded-full"></div>}
                </div>
                <div className="flex-grow">
                  <span className={`text-lg font-medium transition-colors ${selectedOption === 'a' ? 'text-quiz-primary' : 'text-white group-hover:text-quiz-primary'}`}>1/2</span>
                </div>
                <div className="text-white/20 font-bold text-sm tracking-widest px-2">A</div>
              </div>
            </label>

            {/* Option 2 */}
            <label className="group relative cursor-pointer">
              <input 
                className="sr-only peer" 
                name="quiz-option" 
                type="radio" 
                value="b"
                checked={selectedOption === 'b'}
                onChange={() => setSelectedOption('b')}
              />
              <div className={`flex items-center p-4 rounded-xl border-2 transition-all duration-200 shadow-sm ${selectedOption === 'b' ? 'border-quiz-primary bg-quiz-primary/10 shadow-[0_0_15px_rgba(76,223,32,0.1)]' : 'border-quiz-border-dark bg-quiz-bg-dark/50 hover:bg-quiz-surface-dark hover:border-quiz-primary/50'}`}>
                <div className={`flex-none flex items-center justify-center w-6 h-6 rounded-full border-2 mr-4 transition-colors ${selectedOption === 'b' ? 'border-quiz-primary bg-quiz-primary' : 'border-white/30'}`}>
                  {selectedOption === 'b' && <div className="w-2 h-2 bg-quiz-bg-dark rounded-full"></div>}
                </div>
                <div className="flex-grow">
                  <span className={`text-lg font-medium transition-colors ${selectedOption === 'b' ? 'text-quiz-primary' : 'text-white group-hover:text-quiz-primary'}`}>1/4</span>
                </div>
                <div className="text-white/20 font-bold text-sm tracking-widest px-2">B</div>
              </div>
            </label>

            {/* Option 3 */}
            <label className="group relative cursor-pointer">
              <input 
                className="sr-only peer" 
                name="quiz-option" 
                type="radio" 
                value="c"
                checked={selectedOption === 'c'}
                onChange={() => setSelectedOption('c')}
              />
              <div className={`flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${selectedOption === 'c' ? 'border-quiz-primary bg-quiz-primary/10' : 'border-quiz-border-dark bg-quiz-bg-dark/50 hover:bg-quiz-surface-dark hover:border-quiz-primary/50'}`}>
                <div className={`flex-none flex items-center justify-center w-6 h-6 rounded-full border-2 mr-4 transition-colors ${selectedOption === 'c' ? 'border-quiz-primary bg-quiz-primary' : 'border-white/30'}`}>
                  {selectedOption === 'c' && <div className="w-2 h-2 bg-quiz-bg-dark rounded-full"></div>}
                </div>
                <div className="flex-grow">
                  <span className={`text-lg font-medium transition-colors ${selectedOption === 'c' ? 'text-quiz-primary' : 'text-white group-hover:text-quiz-primary'}`}>3/4</span>
                </div>
                <div className="text-white/20 font-bold text-sm tracking-widest px-2">C</div>
              </div>
            </label>

            {/* Option 4 */}
            <label className="group relative cursor-pointer">
              <input 
                className="sr-only peer" 
                name="quiz-option" 
                type="radio" 
                value="d"
                checked={selectedOption === 'd'}
                onChange={() => setSelectedOption('d')}
              />
              <div className={`flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${selectedOption === 'd' ? 'border-quiz-primary bg-quiz-primary/10' : 'border-quiz-border-dark bg-quiz-bg-dark/50 hover:bg-quiz-surface-dark hover:border-quiz-primary/50'}`}>
                <div className={`flex-none flex items-center justify-center w-6 h-6 rounded-full border-2 mr-4 transition-colors ${selectedOption === 'd' ? 'border-quiz-primary bg-quiz-primary' : 'border-white/30'}`}>
                  {selectedOption === 'd' && <div className="w-2 h-2 bg-quiz-bg-dark rounded-full"></div>}
                </div>
                <div className="flex-grow">
                  <span className={`text-lg font-medium transition-colors ${selectedOption === 'd' ? 'text-quiz-primary' : 'text-white group-hover:text-quiz-primary'}`}>2/3</span>
                </div>
                <div className="text-white/20 font-bold text-sm tracking-widest px-2">D</div>
              </div>
            </label>
          </div>

          {/* Spacer for bottom nav visibility */}
          <div className="h-20"></div>
        </div>
      </main>

      {/* Bottom Navigation Dock */}
      <footer className="flex-none w-full bg-quiz-surface-dark border-t border-quiz-border-dark p-4 sm:px-8 z-30">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-quiz-border-dark text-white/70 font-bold hover:bg-white/5 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed">
            <span className="material-symbols-outlined text-xl">arrow_back</span>
            <span className="hidden sm:inline">Previous</span>
          </button>
          
          {/* Dots Indicator */}
          <div className="hidden md:flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-quiz-primary/40"></div>
            <div className="w-2 h-2 rounded-full bg-quiz-primary/40"></div>
            <div className="w-2 h-2 rounded-full bg-quiz-primary/40"></div>
            <div className="w-6 h-2 rounded-full bg-quiz-primary"></div> {/* Active */}
            <div className="w-2 h-2 rounded-full bg-white/10"></div>
            <div className="w-2 h-2 rounded-full bg-white/10"></div>
          </div>

          <button className="flex-1 sm:flex-none sm:w-auto bg-quiz-primary hover:bg-quiz-primary-dark text-quiz-bg-dark px-8 py-3 rounded-full font-bold text-base shadow-[0_0_20px_rgba(76,223,32,0.3)] hover:shadow-[0_0_30px_rgba(76,223,32,0.5)] transition-all flex items-center justify-center gap-2 group">
            <span>Next Question</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </footer>
    </div>
  );
};
