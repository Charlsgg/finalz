require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const hashInitializer = require('./utils/hashInitializer');
require('./config/db'); // Initializes MySQL connection

const app = express();
const PORT = process.env.PORT || 3001;

// === Middleware ===
app.use(cors());
app.use(express.json());

// === Route Middleware ===
app.use('/auth', authRoutes);
app.use('/dashboard', dashboardRoutes);      // clearer route base
app.use('/utils', hashInitializer);          // utils route for init-hash

// === Catch-All for 404s ===
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// === Start Server ===
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
