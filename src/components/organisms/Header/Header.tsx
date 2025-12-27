import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../../molecules/LanguageSwitcher/LanguageSwitcher';
import { useAuthStore } from '../../../store/useAuthStore';

export const Header: React.FC = () => {
    const { t } = useTranslation();
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="navbar bg-primary text-primary-content shadow-lg">
            <div className="flex-1">
                <Link to="/app/dashboard" className="btn btn-ghost text-xl">GyaanSetu</Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control hidden md:block">
                    <input type="text" placeholder={t('common.search')} aria-label="Search lessons" className="input input-bordered w-24 md:w-auto text-base-content" />
                </div>
                <LanguageSwitcher />
                <div className="dropdown dropdown-end">
                    <button tabIndex={0} className="btn btn-ghost btn-circle avatar" aria-label="User menu">
                        <div className="w-10 rounded-full">
                            <img alt="User profile" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </button>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-base-content">
                        <li><Link to="/app/profile">Profile</Link></li>
                        <li><Link to="/app/settings">Settings</Link></li>
                        <li><button onClick={handleLogout}>{t('common.logout')}</button></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

