exports.seed = async function(knex) {
  await knex('class_students').del();

  await knex('class_students').insert([
    { class_id: 1, student_id: 4 }, // John in Math
    { class_id: 2, student_id: 4 }, // John in Science
    { class_id: 1, student_id: 5 }, // Jane in Math
  ]);
};
