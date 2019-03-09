
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, title: 'Finish Todo List Project', completed: false},
        {id: 2, title: 'Create A Boilerplate', completed: false},
        {id: 3, title: 'Begin Todo List Project', completed: true}
      ]);
    });
};
