const quizzesService = require('../services/quizzes-service')
const questionsService = require('../services/questions-service')
module.exports = function (app) {
    app.get('/api/quizzes', (req, res) =>
        quizzesService.findAllQuizzes()
            .then(allQuizzes => {
                res.json(allQuizzes)
                console.log(allQuizzes)
            }))
    app.get('/api/quizzes/:qzid', (req, res) =>
        quizzesService.findQuizById(req.params['qzid'])
            .then(quiz => {
                res.json(quiz)
                console.log(quiz)
            }))
}
