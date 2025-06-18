import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader } from 'lucide-react';

function AdminDashboard() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await axios.get('http://localhost:3001/dashboard/admin/dashboard', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setMessage(res.data);
      } catch (err) {
        setMessage('❌ Unauthorized or session expired');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-xl p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Admin Dashboard</h1>

        {loading ? (
          <div className="flex justify-center items-center gap-2 text-gray-500">
            <Loader className="animate-spin" />
            <span>Loading...</span>
          </div>
        ) : (
          <div
            className={`p-4 rounded-md text-center font-medium ${
              message.startsWith('❌')
                ? 'bg-red-100 text-red-700 border border-red-300'
                : 'bg-green-100 text-green-700 border border-green-300'
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
