// src/pages/TeacherDashboard.js
import React from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import TeacherLayout from '../../layouts/TeacherLayout';

function TeacherDashboard() {
  return (
    <ProtectedRoute endpoint="http://localhost:3001/dashboard/teacher/dashboard">
      <TeacherLayout>
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-xl font-semibold text-gray-800">Welcome, Teacher!</h1>
        </div>
      </TeacherLayout>
    </ProtectedRoute>
  );
}

export default TeacherDashboard;
