// src/layouts/TeacherLayout.js
import React from 'react';
import { Menu } from 'lucide-react';
import RoleNavigation from '../components/RoleNavigations';

const TeacherLayout = ({ children }) => (
  <div className="flex h-screen bg-gray-50">
    <aside className="w-64 bg-white border-r hidden md:flex flex-col">
      <div className="p-6 text-xl font-bold text-purple-600 border-b">Teacher Portal</div>
      <RoleNavigation role="teacher" colorClass="text-purple-600" />
    </aside>

    <div className="flex-1 flex flex-col">
      <header className="bg-white shadow-md h-16 flex items-center justify-between px-6 border-b">
        <Menu className="md:hidden w-6 h-6 text-gray-600" />
        <h1 className="text-xl font-semibold text-purple-700">Teacher Dashboard</h1>
        <div className="text-sm text-gray-500">teacher@example.com</div>
      </header>

      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  </div>
);

export default TeacherLayout;
