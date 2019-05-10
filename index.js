const express = require("express")

const projectsRouter = require("./projects/projects-router")
const actionsRouter = require("./actions/actions-router")

const server = express()

server.use(express.json())

server.use("/api/projects", projectsRouter)
server.use("/api/actions", actionsRouter)

server.get("/", (req, res) => {
    res.status(200).json({ hello: "Project/Action App" })
})

const port = 5000
server.listen(port, () => console.log(`\nAPI running on port ${port}\n`))