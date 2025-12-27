import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <aside>
                <p>Copyright © 2025 - {t('landing.footer.rights')} Gyan Setu Team</p>
            </aside>
        </footer>
    );
};

