class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }
  updateQuiz(correct) {
    if (correct) {
      this.score++;
    }
    this.questionIndex += 1;
  }

  quizOver() {
    return this.questions.length === this.questionIndex;
  }
}
