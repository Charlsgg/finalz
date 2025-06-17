import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [message, setMessage] = useState('');

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
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p className="mt-4">{message}</p>
    </div>
  );
}

export default AdminDashboard;
