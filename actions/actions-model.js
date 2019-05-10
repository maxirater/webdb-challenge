const db = require("../data/dbConfig")

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db("actions")
}

function findById(id) {
    return db("actions")
        .where({ id })
        .first()
}

function add(action) {
    // passing 'id' as the second Param is recommended to ensure the id is returned
    // when connecting to other DBMS like Postgres
    return db("actions").insert(action, "id")
}

function update(id, changes) {
    return db("actions")
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db("actions")
        .where({ id })
        .del()
}
