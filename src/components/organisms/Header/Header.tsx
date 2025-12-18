export const Header = () => {
    return (
        <header
            className="sticky top-0 z-50 w-full border-b border-[#2e4328]/30 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md">
            <div className="mx-auto max-w-[1280px] px-4 sm:px-10 py-4">
                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">
                        <div
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                            <span className="material-symbols-outlined">school</span>
                        </div>
                        <h2 className="text-xl font-bold tracking-tight text-[#152012] dark:text-white">GyaanSetu</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <a className="text-sm font-semibold transition-colors hover:text-primary"
                           href="#about">About</a>
                        <a className="text-sm font-semibold transition-colors hover:text-primary"
                           href="#features">Features</a>
                        <a className="text-sm font-semibold transition-colors hover:text-primary"
                           href="#contact">Contact</a>
                    </nav>

                    <div className="flex items-center gap-3">
                        <button aria-label="Change Language"
                                className="hidden sm:flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2e4328] text-white hover:bg-[#3d5835] transition-colors">
                            <span className="material-symbols-outlined">translate</span>
                        </button>
                        <button
                            className="flex h-10 cursor-pointer items-center justify-center rounded-full bg-primary px-6 text-[#152012] text-sm font-bold transition-transform active:scale-95 hover:bg-[#45b025]">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

