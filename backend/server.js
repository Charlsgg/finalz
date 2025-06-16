require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Routes
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const hashInitializer = require('./utils/hashInitializer');
require('./config/db'); // Initializes DB connection

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Route Middleware
app.use('/auth', authRoutes);
app.use('/', dashboardRoutes);
app.use('/', hashInitializer);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
