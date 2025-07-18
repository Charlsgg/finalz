const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Login Route
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (results.length === 0) return res.status(401).json({ message: 'User not found' });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid password' });

    const token = jwt.sign(
      { id: user.id, email: user.email, user_type: user.user_type },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ message: 'Login successful', token, user_type: user.user_type });
  });
});

// Signup Route
// Signup Route
router.post('/signup', async (req, res) => {
  const { name, email, password, user_type } = req.body;

  if (!name || !email || !password || !user_type) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Email format validation using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });

    if (results.length > 0) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      'INSERT INTO users (name, email, password, user_type) VALUES (?, ?, ?, ?)',
      [name, email, hashedPassword, user_type],
      (insertErr, insertResult) => {
        if (insertErr) return res.status(500).json({ message: 'Signup failed' });

        res.status(201).json({ message: 'Signup successful' });
      }
    );
  });
});

module.exports = router;
