// src/layouts/StudentLayout.js
import React from 'react';
import { Menu, GraduationCap, LogOut } from 'lucide-react';

const StudentLayout = ({ children }) => (
  <div className="flex h-screen bg-gray-50">
    <aside className="w-64 bg-white border-r hidden md:flex flex-col">
      <div className="p-6 text-xl font-bold text-green-600 border-b">Student Portal</div>
      <nav className="flex flex-col p-4 space-y-4 text-gray-700">
        <a href="#" className="hover:text-green-600">Courses</a>
        <a href="#" className="hover:text-green-600">Assignments</a>
        <a href="#" className="hover:text-green-600">Grades</a>
        <a href="#" className="hover:text-red-500 flex items-center gap-1">
          <LogOut className="w-4 h-4" /> Logout
        </a>
      </nav>
    </aside>

    <div className="flex-1 flex flex-col">
      <header className="bg-white shadow-md h-16 flex items-center justify-between px-6 border-b">
        <Menu className="md:hidden w-6 h-6 text-gray-600" />
        <h1 className="text-xl font-semibold text-green-700">Student Dashboard</h1>
        <div className="text-sm text-gray-500">student@example.com</div>
      </header>

      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  </div>
);

export default StudentLayout;
