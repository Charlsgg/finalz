const bcrypt = require('bcryptjs');

exports.seed = async function(knex) {
  const hashedPassword = await bcrypt.hash('password123', 10);

  // Clear tables in order of foreign key dependencies
  await knex('class_students').del();
  await knex('attendances').del();
  await knex('classes').del();
  await knex('users').del();

  // Insert users without qr_code_token
  await knex('users').insert([
    {
      id: 1,
      name: 'Admin',
      email: 'admin@example.com',
      password: hashedPassword,
      user_type: 'admin'
    },
    {
      id: 2,
      name: 'Mr. Smith',
      email: 'teacher@example.com',
      password: hashedPassword,
      user_type: 'teacher'
    },
    {
      id: 3,
      name: 'Ms. Johnson',
      email: 'teacher2@example.com',
      password: hashedPassword,
      user_type: 'teacher'
    },
    {
      id: 4,
      name: 'John Doe',
      email: 'student@example.com',
      password: hashedPassword,
      user_type: 'student'
    },
    {
      id: 5,
      name: 'Jane Roe',
      email: 'student2@example.com',
      password: hashedPassword,
      user_type: 'student'
    }
  ]);
};
