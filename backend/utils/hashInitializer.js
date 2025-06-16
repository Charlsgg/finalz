const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../config/db');

const router = express.Router();

router.get('/init-hash', async (req, res) => {
  db.query('SELECT * FROM users', async (err, results) => {
    if (err) return res.status(500).send('Error fetching users.');

    for (let user of results) {
      const hashed = await bcrypt.hash(user.password, 10);
      db.query('UPDATE users SET password = ? WHERE id = ?', [hashed, user.id]);
    }

    res.send('Hashed all user passwords.');
  });
});

module.exports = router;
