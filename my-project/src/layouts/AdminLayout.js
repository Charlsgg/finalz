// src/layouts/AdminLayout.js
import React from 'react';
import { Menu } from 'lucide-react';
import LogoutButton from '../components/LogoutButton'; // ← import it

const AdminLayout = ({ children }) => (
  <div className="flex h-screen bg-gray-100">
    <aside className="w-64 bg-white border-r hidden md:flex flex-col">
      <div className="p-6 text-xl font-bold text-blue-600 border-b">Admin Panel</div>
      <nav className="flex flex-col p-4 space-y-4 text-gray-700">
        <a href="#" className="hover:text-blue-600">Dashboard</a>
        <a href="#" className="hover:text-blue-600">Users</a>
        <a href="#" className="hover:text-blue-600">Reports</a>
        
        {/* Use LogoutButton instead of <a> tag */}
        <LogoutButton />
      </nav>
    </aside>

    <div className="flex-1 flex flex-col">
      <header className="bg-white shadow-md h-16 flex items-center justify-between px-6 border-b">
        <Menu className="md:hidden w-6 h-6 text-gray-600" />
        <h1 className="text-xl font-semibold text-blue-700">Admin Dashboard</h1>
        <div className="text-sm text-gray-500">admin@example.com</div>
      </header>

      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  </div>
);

export default AdminLayout;
