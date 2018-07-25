
exports.up = function(knex, Promise) {
  return knex.schema.createTable('story', table => {
    table.increments()
    table.string('name').notNullable().defaultsTo('')
    table.string('body').notNullable().defaultsTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('story')
};
