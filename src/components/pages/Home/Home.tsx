import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { School, WifiOff, Monitor, Rocket, Menu, X, Languages } from 'lucide-react';
import { LanguageSwitcher } from '../../molecules/LanguageSwitcher/LanguageSwitcher';
import { useAuthStore } from '../../../store/useAuthStore';

export const Home: React.FC = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/app/dashboard', { replace: true });
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="min-h-screen flex flex-col font-display bg-background-light dark:bg-background-dark text-background-dark dark:text-white overflow-x-hidden">
            {/* Navbar */}
            <header className="sticky top-0 z-50 w-full border-b border-accent-dark/30 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md">
                <div className="mx-auto max-w-7xl px-4 sm:px-10 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-green/20 text-primary-green">
                                <School size={24} />
                            </div>
                            <h2 className="text-xl font-bold tracking-tight">GyaanSetu</h2>
                        </div>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8">
                            <a className="text-sm font-semibold transition-colors hover:text-primary-green" href="#about">About</a>
                            <a className="text-sm font-semibold transition-colors hover:text-primary-green" href="#features">Features</a>
                            <a className="text-sm font-semibold transition-colors hover:text-primary-green" href="#contact">Contact</a>
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center gap-3">
                            <div className="hidden sm:block">
                                <LanguageSwitcher />
                            </div>
                            <button 
                                onClick={() => navigate('/login')}
                                className="flex h-10 cursor-pointer items-center justify-center rounded-full bg-primary-green px-6 text-background-dark text-sm font-bold transition-transform active:scale-95 hover:bg-primary-green-hover"
                            >
                                Login
                            </button>
                            <button 
                                className="md:hidden text-background-dark dark:text-white"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-background-light dark:bg-background-dark border-b border-accent-dark/30 px-4 py-4 space-y-4">
                        <a className="block text-sm font-semibold" href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                        <a className="block text-sm font-semibold" href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
                        <a className="block text-sm font-semibold" href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
                    </div>
                )}
            </header>

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative overflow-hidden py-12 md:py-24 px-4 sm:px-10">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center md:gap-16">
                            {/* Text Content */}
                            <div className="flex flex-1 flex-col gap-6 text-center md:text-left">
                                <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-background-dark dark:text-white">
                                    Bridge the Gap to <span className="text-primary-green">Knowledge</span>, Anywhere.
                                </h1>
                                <p className="text-lg font-medium text-background-dark/70 dark:text-white/70 max-w-2xl mx-auto md:mx-0">
                                    Empowering students in Nabha with offline-first digital learning. Access world-class education without needing an active internet connection.
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
                                    <button 
                                        onClick={() => navigate('/signup')}
                                        className="h-12 min-w-[160px] cursor-pointer rounded-full bg-primary-green px-6 text-base font-bold text-background-dark transition-all hover:bg-primary-green-hover active:scale-95"
                                    >
                                        Start Learning
                                    </button>
                                    <button className="h-12 min-w-[160px] cursor-pointer rounded-full border border-accent-dark dark:border-white/20 bg-transparent px-6 text-base font-bold text-background-dark dark:text-white transition-all hover:bg-accent-dark/10 dark:hover:bg-white/10 active:scale-95">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                            {/* Hero Image */}
                            <div className="flex-1 w-full">
                                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-accent-dark shadow-2xl">
                                    <img 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdD-_THApMmRMU9pfBabL_3R_Npu2KX7s3cc6MlxIPUTIVPrX1IDL062uauaVz6HbCPY8G2qN9GwCpwhLJSxx_zl6PAjiB7eDQ152Xp0vo2GPTqaUQt8vo_NRRK1YFQqXpUAcBuIwrwBED3QMiu9jz5cft6w_0qvQ_UplY00LZbMbL_lctdvO0i906YhIQXiCBTNiPFsa9lVn2bp76ARtInT6qWHv9Z9F4dWAadFB9BHGeuvHeYyycz7Y7-vsfv-VUAO-w3yFHPy8" 
                                        alt="Indian students studying together"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-8 px-4 sm:px-10">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-accent-dark/10 dark:bg-accent-dark p-8 text-center transition-transform hover:scale-[1.02]">
                                <p className="text-4xl font-black tracking-tight text-primary-green">500+</p>
                                <p className="text-base font-medium text-background-dark/80 dark:text-white/80">Students Reached</p>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-accent-dark/10 dark:bg-accent-dark p-8 text-center transition-transform hover:scale-[1.02]">
                                <p className="text-4xl font-black tracking-tight text-primary-green">12</p>
                                <p className="text-base font-medium text-background-dark/80 dark:text-white/80">Villages Covered</p>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-accent-dark/10 dark:bg-accent-dark p-8 text-center transition-transform hover:scale-[1.02]">
                                <p className="text-4xl font-black tracking-tight text-primary-green">5,000+</p>
                                <p className="text-base font-medium text-background-dark/80 dark:text-white/80">Lessons Completed</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Section */}
                <section className="py-16 md:py-24 px-4 sm:px-10" id="features">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 flex flex-col gap-4 text-center md:text-left">
                            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                                Key Differentiators
                            </h2>
                            <p className="max-w-2xl text-lg text-background-dark/70 dark:text-white/70">
                                Built for resilience and accessibility in low-connectivity areas, ensuring no student is left behind.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {/* Feature 1 */}
                            <div className="group flex flex-col gap-4 rounded-2xl border border-accent-dark/20 dark:border-accent-dark bg-white dark:bg-accent-dark/50 p-6 transition-all hover:border-primary-green/50">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-green/10 dark:bg-primary-green/20 text-primary-green group-hover:bg-primary-green group-hover:text-background-dark transition-colors">
                                    <WifiOff size={32} />
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-bold">Offline-First</h3>
                                    <p className="text-sm leading-relaxed text-background-dark/70 dark:text-white/60">
                                        Download content once and learn forever without needing continuous data access.
                                    </p>
                                </div>
                            </div>
                            {/* Feature 2 */}
                            <div className="group flex flex-col gap-4 rounded-2xl border border-accent-dark/20 dark:border-accent-dark bg-white dark:bg-accent-dark/50 p-6 transition-all hover:border-primary-green/50">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-green/10 dark:bg-primary-green/20 text-primary-green group-hover:bg-primary-green group-hover:text-background-dark transition-colors">
                                    <Languages size={32} />
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-bold">Multilingual Content</h3>
                                    <p className="text-sm leading-relaxed text-background-dark/70 dark:text-white/60">
                                        Interactive lessons available in Punjabi and English to bridge language barriers.
                                    </p>
                                </div>
                            </div>
                            {/* Feature 3 */}
                            <div className="group flex flex-col gap-4 rounded-2xl border border-accent-dark/20 dark:border-accent-dark bg-white dark:bg-accent-dark/50 p-6 transition-all hover:border-primary-green/50">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-green/10 dark:bg-primary-green/20 text-primary-green group-hover:bg-primary-green group-hover:text-background-dark transition-colors">
                                    <Monitor size={32} />
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-bold">Digital Literacy</h3>
                                    <p className="text-sm leading-relaxed text-background-dark/70 dark:text-white/60">
                                        Curriculum designed to help students master the basics of the digital world seamlessly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 md:py-24 px-4 sm:px-10">
                    <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-accent-dark px-6 py-16 text-center shadow-2xl sm:px-16">
                        <div className="flex flex-col items-center gap-6">
                            <Rocket size={64} className="text-primary-green mb-2" />
                            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                                Join GyaanSetu Today
                            </h2>
                            <p className="max-w-xl text-lg text-white/80">
                                Start your learning journey or support our mission to bring digital education to every village in Nabha.
                            </p>
                            <div className="mt-4 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                                <button 
                                    onClick={() => navigate('/signup')}
                                    className="h-12 min-w-[160px] cursor-pointer rounded-full bg-primary-green px-8 text-base font-bold text-background-dark transition-transform hover:bg-primary-green-hover hover:scale-105 active:scale-95"
                                >
                                    Sign Up Now
                                </button>
                                <button className="h-12 min-w-[160px] cursor-pointer rounded-full border border-white/20 bg-white/5 px-8 text-base font-bold text-white transition-all hover:bg-white/10 hover:border-white/40 active:scale-95">
                                    Partner with Us
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-accent-dark/30 bg-background-light dark:bg-background-dark py-12 px-4 sm:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                        <div className="flex items-center gap-3">
                            <School className="text-primary-green" />
                            <h2 className="text-xl font-bold">GyaanSetu</h2>
                        </div>
                        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-background-dark/70 dark:text-white/70">
                            <a className="hover:text-primary-green transition-colors" href="#">Privacy Policy</a>
                            <a className="hover:text-primary-green transition-colors" href="#">Terms of Service</a>
                            <a className="hover:text-primary-green transition-colors" href="#">Contact Support</a>
                        </div>
                        <div className="text-sm text-background-dark/50 dark:text-white/50">
                            © 2024 GyaanSetu. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};