import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LayoutDashboard, BookOpen, Download, GraduationCap, User } from 'lucide-react';

export const SideBar: React.FC = () => {
    const { t } = useTranslation();
    const location = useLocation();

    const menuItems = [
        { name: t('common.home'), path: '/app/dashboard', icon: LayoutDashboard },
        { name: t('common.lessons'), path: '/app/lessons', icon: BookOpen },
        { name: 'Downloads', path: '/app/downloads', icon: Download },
        { name: t('common.progress'), path: '/app/progress', icon: GraduationCap },
        { name: 'Profile', path: '/app/profile', icon: User },
    ];

    return (
        <aside className="w-64 bg-base-200 min-h-full">
            <ul className="menu p-4 w-64 text-base-content">
                {menuItems.map((item) => (
                    <li key={item.path}>
                        <Link 
                            to={item.path} 
                            className={location.pathname === item.path ? 'active' : ''}
                        >
                            <item.icon size={20} />
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

