const express = require("express")
const app = express()

require("./services/quizzes-service")(app)
require("./services/questions-service")(app)

app.listen(3000)
