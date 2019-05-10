const db = require("../data/dbConfig")

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db("projects")
}

function findById(id) {
    return db("projects")
        .where({ id })
        .first()
}

function add(project) {
    // passing 'id' as the second Param is recommended to ensure the id is returned
    // when connecting to other DBMS like Postgres
    return db("projects").insert(project, "id")
}

function update(id, changes) {
    return db("projects")
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db("projects")
        .where({ id })
        .del()
}
