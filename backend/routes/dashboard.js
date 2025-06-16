const express = require('express');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.get('/admin/dashboard', verifyToken, (req, res) => {
  if (req.user.user_type !== 'admin') return res.sendStatus(403);
  res.send('Welcome Admin!');
});

router.get('/teacher/dashboard', verifyToken, (req, res) => {
  if (req.user.user_type !== 'teacher') return res.sendStatus(403);
  res.send('Welcome Teacher!');
});

router.get('/student/dashboard', verifyToken, (req, res) => {
  if (req.user.user_type !== 'student') return res.sendStatus(403);
  res.send('Welcome Student!');
});

module.exports = router;
