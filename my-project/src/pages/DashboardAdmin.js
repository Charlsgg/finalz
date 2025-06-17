import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/'); // redirect to login if no token
        return;
      }

      try {
        const res = await axios.get('http://localhost:3001/admin/dashboard', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessage(res.data); // should be "Welcome Admin!" from your backend
      } catch (err) {
        console.error(err);
        setMessage('❌ Unauthorized or session expired.');
        navigate('/'); // Redirect to login on failure
      }
    };

    fetchDashboard();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <p className="mb-6">{message}</p>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
