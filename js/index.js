function render(quiz) {
  if (quiz.quizOver()) {
    setHeaderHtml();
    displayResultsHtml();
  } else {
    const question = quiz.getQuestionIndex();
    createFormHtml();
    setHeaderHtml();
    setQuestionHtml(question);
    setAnswersHtml(question);
    handleSubmit(quiz, question);
  }
}

const quiz = new Quiz(db.questions);

const main = () =>
  $(".form-area").one("click", ".start-button", () => render(quiz));

$(main);
