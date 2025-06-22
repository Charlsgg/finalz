// src/components/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="text-center max-w-xl p-8 bg-white shadow-2xl rounded-2xl">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Welcome to EduPortal</h1>
        <p className="text-gray-700 mb-6">
          A smart platform for managing users in an educational system.
        </p>
        <div className="space-x-4">
          <Link to="/login">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-6 py-2 bg-gray-200 text-blue-700 border border-blue-500 rounded-xl hover:bg-gray-300 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
