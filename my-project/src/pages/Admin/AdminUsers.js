import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import ProtectedRoute from '../../components/ProtectedRoute';

function AdminDashboard() {
  return (
    <ProtectedRoute endpoint="http://localhost:3001/dashboard/admin/dashboard">
      <AdminLayout>
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-xl font-semibold text-gray-800">Welcome, Admin!</h1>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}

export default AdminDashboard;
