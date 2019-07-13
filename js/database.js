const db = {
  questions: [
    new Question(
      "What is the best programming language",
      ["Java", "Javascript", "C++", "C#"],
      "Javascript"
    ),
    new Question(
      "What is the best part of Javascript",
      [
        "Prototypical Inheritance",
        "For in loops",
        "Teranaries",
        "This Keyword"
      ],
      "Prototypical Inheritance"
    ),
    new Question("wit da most ", ["yes", "no", "maybe", "so"], "yes"),
    new Question(
      "What is the best part of Javascript",
      [
        "Prototypical Inheritance",
        "For in loops",
        "Teranaries",
        "This Keyword"
      ],
      "Prototypical Inheritance"
    ),
    new Question("wit da most ", ["yes", "no", "maybe", "so"], "yes")
  ],
  formTemplate: `<div class="row">
  <form class="form">
    <h1 class="question">Question goes here</h1>
    <fieldset>
    <div class="input-group"> 
    <label class="answerOption choice0" for="choice0">
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
    <input type="submit" id="submit-button" required value="submit" />
    </fieldset>
    
     
    
  </form>
</div>`,
  resultsPage(score) {
    return `<div class="row">
<section class="feedback">
  <div class="feedback-text">
    <h1>Thanks For Playing!!</h1>
    <h2>${
      score > 3
        ? `Wow you're a true Beatles Fan!! Congrats`
        : "Ehh ya did ok mate Try Again"
    }</h2>
    <h3>you scored ${score}/5 (${(score / 5) * 100}%)</h3>
  </div>
</section>
</div>`;
  },
  feedbackPage(correct) {
    return `<div class="row">
    <section class="feedback">
      <div class="feedback-text">
        <h1>${correct ? "Rockin' Good Job!" : "Really Mate??"} </h1>
        <h2>${
          correct ? "you got it right!!" : "You'll have to do better than that"
        } </h2>
        <button class="feedback-button">Next Question!</button>
      </div>
    </section>
  </div>`;
  }
};
