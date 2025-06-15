const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');

const app = express();
const PORT = 3001;
const JWT_SECRET = 'your_secret_key';

// DB connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password', // update if you set one
  database: 'login_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('✅ Connected to MySQL');
});

// Middleware
app.use(cors());
app.use(express.json());

// Hash existing plain passwords once (run only ONCE, then comment out)
app.get('/init-hash', async (req, res) => {
  db.query('SELECT * FROM users', async (err, results) => {
    for (let user of results) {
      const hashed = await bcrypt.hash(user.password, 10);
      db.query('UPDATE users SET password = ? WHERE id = ?', [hashed, user.id]);
    }
    res.send('Hashed all user passwords.');
  });
});

// Login
app.post('/login', (req, res) => {
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

// JWT middleware
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (!bearerHeader) return res.sendStatus(403);

  const token = bearerHeader.split(' ')[1];
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.user = decoded;
    next();
  });
}

// Role-based routes
app.get('/admin/dashboard', verifyToken, (req, res) => {
  if (req.user.user_type !== 'admin') return res.sendStatus(403);
  res.send('Welcome Admin!');
});

app.get('/teacher/dashboard', verifyToken, (req, res) => {
  if (req.user.user_type !== 'teacher') return res.sendStatus(403);
  res.send('Welcome Teacher!');
});

app.get('/student/dashboard', verifyToken, (req, res) => {
  if (req.user.user_type !== 'student') return res.sendStatus(403);
  res.send('Welcome Student!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
