module.exports = (app) => {
    let questions = require("./questions")


    const findAllQuestions = (req, res) => res.send(questions)
    const findQuestionById = (req, res) => res.send(questions.filter(q => q.quizId === req.params['qid']))


    app.get("/api/questions", findAllQuestions)

    app.get("/api/quizzes/:qid/questions", findQuestionById)

}
