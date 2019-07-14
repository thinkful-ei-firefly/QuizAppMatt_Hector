//SET HTML UTILS
const createFormHtml = () => $("main").html(db.formTemplate());

const setHeaderHtml = () => {
  $(".score").html(`<span>Score: ${quiz.score}</span>`);
  $(".question-num").html(
    `<span>Question: ${
      quiz.quizOver() ? quiz.questionIndex : quiz.questionIndex + 1
    }/5</span>`
  );
};

const setQuestionHtml = question => {
  $(".question").html(
    `<span>${
      question.text
    }</span> <span class="icon--question"><i class="fas fa-guitar"></i></span>`
  );
};

const setAnswersHtml = question => {
  question.choices.forEach((choice, index) => {
    $(`.choice${index}`).html(choice);
    $(`#choice${index}`).val(choice);
  });
};

const setFeedbackResponseHtml = (correct, question) => {
  $("main").html(question.handleResult(correct));
};

const displayResultsHtml = () => {
  $("main").html(db.resultsPage(quiz.score));
  $(".reset-button").css("display", "block");
  handleReset();
};

//EVENT HANDLING UTILS

const handleStartup = () =>
  $(".form-area").one("click", ".start-button", () => render(quiz));

const handleSubmit = (quiz, question) => {
  $("main").one("submit", ".form", e => {
    e.preventDefault();
    let selected = $("input:checked").val();
    const correct = question.correctAnswer(selected);
    setFeedbackResponseHtml(correct, question);
    //add score if applicable and change question index
    quiz.updateQuiz(correct);
    handleFeedbackButton();
  });
};

const handleFeedbackButton = () =>
  $("main").one("click", ".feedback-button", () => render(quiz));

const handleReset = () => {
  $(".reset-button").one("click", () => {
    quiz.questionIndex = 0;
    quiz.score = 0;
    render(quiz);
    $(".reset-button").css("display", "none");
  });
};
