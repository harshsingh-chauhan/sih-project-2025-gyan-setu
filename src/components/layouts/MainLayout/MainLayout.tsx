import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../organisms/Header/Header';
import { SideBar } from '../../organisms/SideBar/SideBar';
import { Footer } from '../../organisms/Footer/Footer';

export const MainLayout: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-base-100">
            <Header />
            <div className="flex flex-1">
                <SideBar />
                <main className="flex-1 p-4">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
};
