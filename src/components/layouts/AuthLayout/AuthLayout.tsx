import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../store/useAuthStore';

export const AuthLayout: React.FC = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/app/dashboard', { replace: true });
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="font-display bg-background-light dark:bg-login-bg-dark min-h-screen flex flex-col text-slate-900 dark:text-white overflow-x-hidden selection:bg-login-primary selection:text-black transition-colors duration-300">
            {/* Header */}
            <header className="flex items-center justify-between border-b border-solid border-login-border-dark px-6 py-4 lg:px-10 bg-login-bg-dark">
                <div className="flex items-center gap-3 text-white">
                    <div className="flex items-center justify-center size-8 md:size-10 bg-login-surface-dark border border-login-border-dark rounded-full text-login-primary">
                        <span className="material-symbols-outlined">school</span>
                    </div>
                    <h2 className="text-white text-lg md:text-xl font-bold leading-tight tracking-[-0.015em]">GyaanSetu</h2>
                </div>
                
                {/* Reusing LanguageSwitcher or adapting the button style? 
                    The HTML has a specific button style. I'll wrap LanguageSwitcher or just use the button style if LanguageSwitcher is simple.
                    Let's use a button that matches the design for now, or see if LanguageSwitcher can be styled.
                    For exact match, I'll hardcode the button structure but keep it functional if I had the logic, 
                    but here I'll just use the visual. 
                    Actually, I should use the LanguageSwitcher functionality if possible. 
                    Let's check LanguageSwitcher first.
                */}
                <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-login-surface-dark border border-login-border-dark hover:bg-login-border-dark transition-colors text-white gap-2 text-sm font-bold px-4">
                    <span className="material-symbols-outlined text-[20px]">translate</span>
                    <span className="hidden sm:inline">English / Punjabi</span>
                </button>
            </header>

            {/* Main Content Area where Login/Signup will be rendered */}
            <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-6 w-full">
                <Outlet />
            </main>
        </div>
    );
};