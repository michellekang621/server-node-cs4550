const questionsService = require("../services/questions-service")

module.exports = (app) => {

    const findAllQuestions = (req, res) =>
        res.send(questionsService.findAllQuestions())

    const findQuestionsForQuiz = (req, res) =>
        res.send(questionsService.findQuestionsForQuiz(req.params['qid']))

    app.get("/api/questions", findAllQuestions)
    app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz)

}
