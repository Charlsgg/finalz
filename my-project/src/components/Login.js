import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg('');

    try {
      const res = await axios.post('http://localhost:3001/login', { email, password });
      setMsg('✅ ' + res.data.message);
      setUserType(res.data.user_type);
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      setMsg('❌ ' + (err.response?.data?.message || 'Login failed'));
    }
  };

  useEffect(() => {
    if (userType === 'admin') navigate('/admin/dashboard');
    if (userType === 'teacher') navigate('/teacher/dashboard');
    if (userType === 'student') navigate('/student/dashboard');
  }, [userType, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-4 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Login
          </button>
        </form>
        {msg && <p className="mt-4 text-center text-sm">{msg}</p>}
      </div>
    </div>
  );
}

export default Login;
