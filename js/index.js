function render(quiz) {
  if (quiz.quizOver()) {
    reset();
  } else {
    $("main").html(db.formTemplate);
    //set the header
    $(".score").html(`<span>Score: ${quiz.score}</span>`);
    $(".question-num").html(
      `<span>Question: ${quiz.questionIndex + 1}/5</span>`
    );
    //get current question
    const question = quiz.getQuestionIndex();
    //set question html
    $(".question").html(question.text);
    //set answers html
    question.choices.forEach((choice, index) => {
      $(`.choice${index}`).html(choice);
      $(`#choice${index}`).val(choice);
    });
    onSubmit(quiz);
  }
}

const onSubmit = quiz => {
  $("main").one("submit", ".form", e => {
    e.preventDefault();
    let selected = $("input:checked").val();
    const correct = quiz.getQuestionIndex().correctAnswer(selected)
      ? true
      : false;
    quiz.guess(selected);
    quiz.updateIndex();
    afterFeedback(correct);
  });
};
function reset() {
  $("main").html(db.resultsPage(quiz.score));
  $(".reset-button").css("display", "block");
  return $(".reset-button").one("click", () => {
    quiz.questionIndex = 0;
    quiz.score = 0;
    render(quiz);
    $(".reset-button").css("display", "none");
  });
}

function afterFeedback(correct) {
  $("main").html(db.feedbackPage(correct));
  $("main").one("click", ".feedback-button", () => render(quiz));
}

const quiz = new Quiz(db.questions);
function main() {
  $(".form-area").on("click", ".start-button", () => render(quiz));
}

$(main);
