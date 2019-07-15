const db = {
  questions: [
    new Question(
      "Who was the only non-member of the Beatles to receive a performance credit on a record??",
      ["Eric Clapton", "Billy Preston", "Ravi Shanker", "Mick Jagger"],
      "Billy Preston"
    ),
    new Question(
      "Who was the oldest Beatle?",
      [
        "John",
        "Paul",
        "George",
        "Ringo"
      ],
      "Ringo"
    ),
    new Question("Which of the following songs was not banned by the BBC?", 
    ["I Am The Walrus",
     "With A Little Help From My Friends",
      "A Day In The Life",
      "Lucky In The Sky With Diamonds"],
       "A Day In The Life",
    ),
    new Question(
      "Which was the first Beatles song to feature backwards vocals?",
      [
        "I'm Only Sleeping",
        "Rain", 
        "Tomorrow Never Knows",
        "Strawberry Fields Forever"
      ],
      "Rain"
    ),
    new Question("Which of these is a Beatles middle name? ",
    ["John",
    "Paul",
    "George",
    "Ringo"], "George")
  ]
};
