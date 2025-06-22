// src/layouts/PublicLayout.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <header className="bg-white shadow-md p-4 flex flex-wrap justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-700 hover:text-blue-800 transition-colors"
        >
          EduPortal
        </Link>
        <nav className="space-x-4 mt-2 sm:mt-0">
          <Link
            to="/login"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Sign Up
          </Link>
        </nav>
      </header>

      {/* Page Content */}
      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white p-4 text-center text-gray-500 text-sm border-t">
        &copy; {new Date().getFullYear()} EduPortal. All rights reserved.
      </footer>
    </div>
  );
}

export default PublicLayout;
