import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
// Import your dashboards here

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Add your dashboard routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
