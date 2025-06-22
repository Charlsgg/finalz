// src/layouts/PublicLayout.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-700">
          EduPortal
        </Link>
        <nav className="space-x-4">
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </nav>
      </header>

      {/* Page Content */}
      <main className="flex-grow">
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
