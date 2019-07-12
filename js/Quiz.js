class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }
  showFeedBack(result) {
    return this.getQuestionIndex().handleResult(result);
  }
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }
  guess(answer) {
    const question = this.getQuestionIndex();
    if (question.correctAnswer(answer)) {
      this.score++;
    }
  }
  updateIndex() {
    console.log("fired");
    return (this.questionIndex += 1);
  }
  quizOver() {
    return this.questions.length === this.questionIndex;
  }
}
