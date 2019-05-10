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

// function findById(id) {
//     return db("projects")
//         .where({ id })
//         .first()
// }

function findById(id) {
    return db("projects")
        .join("actions", "actions.project_id", "projects.id")
        // .select("projects.id", "actions.description")
        .where("actions.project_id", id)
        // .first()
}

// function findById(id) {
//     db("projects")
//         .where({ id })
//         .first()
//         .then(proj => {
//             const theProj = proj
//         })
//         .catch(err => {console.log(err)})

//     db('actions')
    
    
//     const actionsArray = theActions.filter(x => {
//         return x.project_id == id
//     })

//     theProj.actions = actionsArray
//     return theProject
// }

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
