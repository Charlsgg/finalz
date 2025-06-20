// src/pages/StudentDashboard.js
import React from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import StudentLayout from '../../layouts/StudentLayout';

function StudentDashboard() {
  return (
    <ProtectedRoute endpoint="http://localhost:3001/dashboard/student/dashboard">
      <StudentLayout>
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-xl font-semibold text-gray-800">Welcome, Student!</h1>
        </div>
      </StudentLayout>
    </ProtectedRoute>
  );
}

export default StudentDashboard;
