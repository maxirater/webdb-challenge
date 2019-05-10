exports.up = function(knex, Promise) {
    return knex.schema
        .createTable("projects", tbl => {
            tbl.increments()

            tbl.string("name", 128)
                .notNullable()
                .unique()

            tbl.string("description", 1080)

            tbl.boolean("completed", false)
        })
        .createTable("actions", tbl => {
            tbl.increments()

            tbl.string('description',1080)
            .notNullable()

            tbl.string('notes',1080)

            tbl.boolean('completed',false)

            tbl.integer("project_id")
                .unsigned()
                .references("id")
                .inTable("projects")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
        })
}

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('actions')
    .dropTableIfExists('projects')
}
