const mysql = require('mysql2');
const bcrypt = require('bcryptjs');

// Configure your MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password', // Replace with your actual MySQL password if any
  database: 'login_db'
});

const users = [
  { email: 'admin@example.com', password: 'password123', user_type: 'admin' },
  { email: 'teacher@example.com', password: 'password123', user_type: 'teacher' },
  { email: 'student@example.com', password: 'password123', user_type: 'student' }
];

db.connect(async (err) => {
  if (err) {
    console.error('❌ Database connection failed:', err);
    return;
  }

  console.log('✅ Connected to MySQL');

  for (const user of users) {
    db.query('SELECT * FROM users WHERE email = ?', [user.email], async (err, results) => {
      if (err) return console.error(`Error checking ${user.email}:`, err);

      if (results.length > 0) {
        console.log(`⚠️ User already exists: ${user.email}`);
      } else {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        db.query(
          'INSERT INTO users (email, password, user_type) VALUES (?, ?, ?)',
          [user.email, hashedPassword, user.user_type],
          (err) => {
            if (err) return console.error(`❌ Failed to insert ${user.email}:`, err);
            console.log(`✅ Inserted: ${user.email}`);
          }
        );
      }
    });
  }
});
