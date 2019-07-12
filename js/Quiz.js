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
    const correct = question.correctAnswer(answer);
    if (correct) {
      this.score++;
      this.showFeedBack(correct);
    } else {
      this.showFeedBack(correct);
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
