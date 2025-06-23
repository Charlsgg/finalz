exports.up = function(knex) {
  return knex.schema

    // USERS table
    .createTable('users', table => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').unique().notNullable();
      table.string('password').notNullable();
      table.enu('user_type', ['admin', 'teacher', 'student']).defaultTo('student');
      table.string('qr_code_token').unique().nullable(); // For QR scanning
      table.timestamps(true, true);
    })

    // CLASSES table
    .createTable('classes', table => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('section').nullable();
      table.integer('teacher_id').unsigned().references('id').inTable('users').onDelete('SET NULL');
      table.timestamps(true, true);
    })

    // CLASS_STUDENTS table
    .createTable('class_students', table => {
      table.increments('id').primary();
      table.integer('class_id').unsigned().references('id').inTable('classes').onDelete('CASCADE');
      table.integer('student_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.unique(['class_id', 'student_id']);
    })

    // ATTENDANCES table
    .createTable('attendances', table => {
      table.increments('id').primary();
      table.integer('student_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.integer('class_id').unsigned().references('id').inTable('classes').onDelete('CASCADE');
      table.timestamp('scanned_at').defaultTo(knex.fn.now());
      table.enum('status', ['present', 'late', 'absent']).defaultTo('present');
      table.string('scanned_by').nullable();
    })

    // Optional CLASS_SESSIONS table
    .createTable('class_sessions', table => {
      table.increments('id').primary();
      table.integer('class_id').unsigned().references('id').inTable('classes').onDelete('CASCADE');
      table.timestamp('start_time').notNullable();
      table.timestamp('end_time').notNullable();
      table.string('room').nullable();
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('class_sessions')
    .dropTableIfExists('attendances')
    .dropTableIfExists('class_students')
    .dropTableIfExists('classes')
    .dropTableIfExists('users');
};
