import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LanguageSwitcher } from '../../molecules/LanguageSwitcher/LanguageSwitcher';
import { useAuthStore } from '../../../store/useAuthStore';

export const Header: React.FC = () => {
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="navbar bg-primary text-primary-content shadow-lg">
            <div className="flex-1">
                <Link to="/app/dashboard" className="btn btn-ghost text-xl">Gyan Setu</Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control hidden md:block">
                    <input type="text" placeholder="Search lessons..." aria-label="Search lessons" className="input input-bordered w-24 md:w-auto text-base-content" />
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
                        <li><a>Settings</a></li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};
