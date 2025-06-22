// src/layouts/AuthLayout.jsx
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function AuthLayout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 px-4">
      <header className="py-4">
        <button
          onClick={() => navigate('/')}
          className="text-blue-600 hover:underline font-medium"
        >
          ← Go Back
        </button>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;
