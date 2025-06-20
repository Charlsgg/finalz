// src/components/ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children, endpoint }) => {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(endpoint, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (res.status === 401 || res.status === 403) {
          navigate('/');
        } else {
          setAuthorized(true);
        }
      } catch (error) {
        navigate('');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [endpoint, navigate]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Checking session...
      </div>
    );
  }

  return authorized ? children : null;
};

export default ProtectedRoute;
