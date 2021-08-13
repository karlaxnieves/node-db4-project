
exports.up = async function(knex) {
    await knex.schema
      .createTable('recipe')
      .createTable('ingredients')
      .createTable('steps')
      .createTable('step_ingredients')
  };
  
  exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe')
  };
  