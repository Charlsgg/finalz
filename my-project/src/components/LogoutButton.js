import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any auth token/localStorage
    localStorage.removeItem('token');
    // Redirect to login page
    navigate('/');
  };

  return (
    <button
      onClick={handleLogout}
      className="hover:text-red-500 flex items-center gap-1 text-left"
    >
      <LogOut className="w-4 h-4" />
      Logout
    </button>
  );
};

export default LogoutButton;
