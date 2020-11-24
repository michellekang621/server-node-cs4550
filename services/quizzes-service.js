
module.exports = (app) => {

    let quizzes = require("./quizzes")

    const findAllQuizzes = (req, res) => res.send(quizzes)
    const findQuizById = (req, res) =>
        res.send(quizzes.find(q => q._id === req.params['qid']))

    app.get("/api/quizzes", findAllQuizzes)

    app.get("/api/quizzes/:qid", findQuizById)
}
