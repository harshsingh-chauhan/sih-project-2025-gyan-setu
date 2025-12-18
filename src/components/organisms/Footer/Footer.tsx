export default function Footer() {
    return (
        <footer className="border-t border-[#2e4328]/30 bg-background-light dark:bg-background-dark py-12 px-4 sm:px-10">
            <div className="mx-auto max-w-[1280px]">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">school</span>
                        <h2 className="text-xl font-bold text-[#152012] dark:text-white">GyaanSetu</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-[#152012]/70 dark:text-white/70">
                        <a className="hover:text-primary transition-colors" href="#">
                            Privacy Policy
                        </a>
                        <a className="hover:text-primary transition-colors" href="#">
                            Terms of Service
                        </a>
                        <a className="hover:text-primary transition-colors" href="#">
                            Contact Support
                        </a>
                    </div>
                    <div className="text-sm text-[#152012]/50 dark:text-white/50">
                        © 2025 GyaanSetu. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}
