class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  correctAnswer(choice) {
    return choice === this.answer;
  }
  handleResult(result) {
    return `<div class="row">
    <section class="feedback">
      <div class="feedback-text">
        <h1>Rockin' Good Job!</h1>
        <h2>you got it right!!</h2>
        <button class="feedback-button">Next Question!</button>
      </div>
    </section>
  </div>`;
  }
}
