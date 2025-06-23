const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

exports.seed = async function(knex) {
  const hashedPassword = await bcrypt.hash('password123', 10);

  await knex('class_students').del();
  await knex('attendances').del();
  await knex('classes').del();
  await knex('users').del();

  await knex('users').insert([
    {
      id: 1,
      name: 'Admin',
      email: 'admin@example.com',
      password: hashedPassword,
      user_type: 'admin',
      qr_code_token: uuidv4()
    },
    {
      id: 2,
      name: 'Mr. Smith',
      email: 'teacher@example.com',
      password: hashedPassword,
      user_type: 'teacher',
      qr_code_token: uuidv4()
    },
    {
      id: 3,
      name: 'Ms. Johnson',
      email: 'teacher2@example.com',
      password: hashedPassword,
      user_type: 'teacher',
      qr_code_token: uuidv4()
    },
    {
      id: 4,
      name: 'John Doe',
      email: 'student@example.com',
      password: hashedPassword,
      user_type: 'student',
      qr_code_token: uuidv4()
    },
    {
      id: 5,
      name: 'Jane Roe',
      email: 'student2@example.com',
      password: hashedPassword,
      user_type: 'student',
      qr_code_token: uuidv4()
    }
  ]);
};
