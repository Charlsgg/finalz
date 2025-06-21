const bcrypt = require('bcryptjs');

exports.seed = async function(knex) {
  const hashedPassword = await bcrypt.hash('password123', 10);

  await knex('users').del();

  await knex('users').insert([
    {
      name: 'Admin',
      email: 'admin@example.com',
      password: hashedPassword,
      user_type: 'admin'
    },
    {
      name: 'Mr. Smith',
      email: 'teacher@example.com',
      password: hashedPassword,
      user_type: 'teacher'
    },
    {
      name: 'Ms. Johnson',
      email: 'teacher2@example.com',
      password: hashedPassword,
      user_type: 'teacher'
    },
    {
      name: 'John Doe',
      email: 'student@example.com',
      password: hashedPassword,
      user_type: 'student'
    },
    {
      name: 'Jane Roe',
      email: 'student2@example.com',
      password: hashedPassword,
      user_type: 'student'
    }
  ]);
};
