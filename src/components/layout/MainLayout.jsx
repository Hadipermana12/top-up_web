import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Mesh grid overlay */}
      <div className="mesh-overlay" />
      <Navbar />
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
