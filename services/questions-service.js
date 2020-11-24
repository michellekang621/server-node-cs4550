let questions = require("./questions")


const findAllQuestions = () => questions
const findQuestionsForQuiz = (quizId) => questions.filter(question => question.quizId === quizId)

module.exports = {
    findAllQuestions: findAllQuestions,
    findQuestionsForQuiz: findQuestionsForQuiz
}
