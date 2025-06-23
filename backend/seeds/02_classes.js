exports.seed = async function(knex) {
  await knex('classes').del();

  await knex('classes').insert([
    {
      id: 1,
      name: 'Math 101',
      section: 'A',
      teacher_id: 2
    },
    {
      id: 2,
      name: 'Science 202',
      section: 'B',
      teacher_id: 3
    }
  ]);
};
