class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  correctAnswer(choice) {
    return choice === this.answer;
  }
  handleResult(correct) {
    return `<div class="row">
    <section class="feedback">
      <div class="feedback-text">
        <h1>${correct ? "Rockin' Good Job!" : "Really Mate??"} </h1>
        <h2>${
          correct
            ? "you got it right!!"
            : `You'll have to do better than that the correct answer was  "${
                this.answer
              }"`
        } </h2>
        <button class="feedback-button">Next!</button>
      </div>
    </section>
  </div>`;
  }
}
