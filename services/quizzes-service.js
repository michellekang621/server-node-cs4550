let quizzes = require("./quizzes.json")

const findAllQuizzes = () =>
    quizzes

const findQuizById = (quizId) =>
    quizzes.find(quiz => quiz._id === quizId)

const deleteQuiz = (quizId) =>
    quizzes = quizzes.filter(quiz => quiz._id !== quizId)

const createQuiz = () => {
    const newQuiz = {_id: (new Date()).getTime() + "", title: "New Quiz"}
    quizzes.push(newQuiz)
    return newQuiz
}

const updateQuiz = (quizId, newQuiz) => {
}

module.exports = {
    findAllQuizzes: findAllQuizzes,
    findQuizById: findQuizById,
    deleteQuiz: deleteQuiz,
    createQuiz: createQuiz,
}
