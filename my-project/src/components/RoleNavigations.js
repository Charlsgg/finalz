import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

const RoleNavigation = ({ role, colorClass = 'text-blue-600' }) => {
  const navLinks = {
    admin: [
      { to: '/admin/dashboard', label: 'Dashboard' },
      { to: '/admin/users', label: 'Users' },
      { to: '/admin/reports', label: 'Reports' },
    ],
    teacher: [
      { to: '/teacher/dashboard', label: 'My Classes' },
      { to: '/teacher/attendance', label: 'Attendance' },
      { to: '/teacher/grades', label: 'Grades' },
    ],
    student: [
      { to: '/student/dashboard', label: 'Courses' },
      { to: '/student/assignments', label: 'Assignments' },
      { to: '/student/grades', label: 'Grades' },
    ],
  };

  const links = navLinks[role] || [];

  return (
    <nav className="flex flex-col p-4 space-y-4 text-gray-700">
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          className={`hover:${colorClass}`}
        >
          {link.label}
        </Link>
      ))}
      <LogoutButton />
    </nav>
  );
};

export default RoleNavigation;
