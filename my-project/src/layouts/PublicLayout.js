// src/layouts/PublicLayout.jsx
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'; // ✅ Add 'Outlet' here
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function PublicLayout() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">EduPortal</Link>

          {/* Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/login" className="text-white hover:text-blue-200 transition">Login</Link>
            <Link to="/signup" className="text-white hover:text-blue-200 transition">Sign Up</Link>
          </nav>

          {/* Mobile menu icon */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setNavOpen(prev => !prev)}
          >
            {navOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {navOpen && (
          <nav className="md:hidden bg-blue-700 px-6 py-4 space-y-4">
            <Link to="/login" onClick={() => setNavOpen(false)} className="block text-white hover:text-blue-200 transition">Login</Link>
            <Link to="/signup" onClick={() => setNavOpen(false)} className="block text-white hover:text-blue-200 transition">Sign Up</Link>
          </nav>
        )}
      </header>

      {/* Layout outlet for child pages */}
      <main className="flex-grow">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold">EduPortal</h4>
            <p className="text-sm text-blue-200">Smart education management.</p>
          </div>
          <div>
            <h4 className="font-semibold">Navigate</h4>
            <Link to="/login" className="block text-sm hover:underline">Login</Link>
            <Link to="/signup" className="block text-sm hover:underline">Sign Up</Link>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <Link to="#" className="block text-sm hover:underline">Privacy Policy</Link>
            <Link to="#" className="block text-sm hover:underline">Terms of Use</Link>
          </div>
        </div>
        <div className="border-t border-blue-800 py-4 text-center text-sm">
          &copy; {new Date().getFullYear()} EduPortal. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default PublicLayout;
