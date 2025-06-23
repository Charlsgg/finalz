exports.seed = async function(knex) {
  await knex('attendances').del();

  await knex('attendances').insert([
    {
      student_id: 4,
      class_id: 1,
      scanned_at: knex.fn.now(),
      status: 'present',
      scanned_by: 'teacher@example.com'
    },
    {
      student_id: 5,
      class_id: 1,
      scanned_at: knex.fn.now(),
      status: 'late',
      scanned_by: 'teacher@example.com'
    }
  ]);
};
