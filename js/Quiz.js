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
  formTemplate() {
    return `<div class="row">
    <form class="form" role="form">
      <h1 class="question" id="question">Question goes here</h1>
      <fieldset>
      <div class="input-group"> 
      <label class="answerOption choice0" for="choice0" aria-labelledby="question">
       <span></span> </label>
      <input
        type="radio"
        value="a"
        id="choice0"
        name="questions"
        required
      />
      </div>
      <div class="input-group"> 
      <label class="answerOption choice1" for="choice1"><span>what is my name</span>
      </label>
        <input
          type="radio"
          value="b"
          id="choice1"
          name="questions"
          required
        />
      </div>
      <div class="input-group"> 
      
      <label class="answerOption choice2" for="choice2"><span>what is my name</span>
      </label>
        <input
          type="radio"
          value="c"
          id="choice2"
          name="questions"
          required
        />
      </div>
      <div class="input-group"> 
      <label class="answerOption choice3" for="choice3"> <span>what is my name</span>
      </label>
        <input
          type="radio"
          value="d"
          id="choice3"
          name="questions"
          required
        />
      </div>
      <input type="submit" id="submit-button" class="button" required value="submit" />
      </fieldset>
      
       
      
    </form>
  </div>`;
  }
  resultsPage() {
    return `<div class="row">
  <section class="feedback">
  <div class="feedback-text">
    <h1  class="feedback-title" >Thanks For Playing!!</h1>
    <h2 class="feedback-title">${
      this.score > 3
        ? `Wow you're a true Beatles Fan!! Congrats`
        : `Ehh ya did ok mate Try Again`
    }</h2>
    <h3>you scored ${this.score}/5 (${(this.score / 5) * 100}%)</h3>
    ${
      this.score > 3
        ? `<div aria-hidden="true" class="icon icon--last"><i class="fas fa-glass-cheers"></i></div>`
        : ` <div aria-hidden="true" class="icon icon--last"><i class="fas fa-hand-point-up"></i></div>`
    }`;
  }
}
