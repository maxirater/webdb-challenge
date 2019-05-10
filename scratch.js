router.get("/:id", (req, res) => {
    db("projects")
        .join("actions", "actions.project_id", "projects.id")
        .select("actions.id", "actions.name")
        .where("project_id", req.params.id)
        .first()
})

router.get("/:id/students", (req, res) => {
    const id = req.params.id

    cohortDb("cohorts")
        .join("students", "students.cohort_id", "cohorts.id")
        .select("students.id", "students.name")
        .where("cohort_id", id)
        .first()
        .then(id => {
            if (id) {
                res.status(200).json(id)
            } else {
                res.status(404).json({
                    message:
                        "The student associated with this id cannot be found"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: "There was an error retrieving the data"
            })
        })
})
