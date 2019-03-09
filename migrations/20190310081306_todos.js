
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todos', table => {
    table.increments('id')
    table.string('title')
    table.boolean('completed')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('todos')
};
