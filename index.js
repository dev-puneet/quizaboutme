var readLineSync = require("readline-sync"); //package from npm
var chalk = require("chalk");

var userName = readLineSync.question("Enter ur name ");

console.log(
  chalk.blue("Hi " + userName) +
    " Welcome to how well u know " +
    chalk.red("Puneet")
);

var score = 0;

//create the processing unit
function play(question, answer) {
  var userAnswer = readLineSync.question(question);

  if (userAnswer.toLowerCase() === answer) {
    console.log("Correct");
    score++;
  } else {
    console.log("Wrong");
  }
}

//Array of Objects, each Object contains a question and a right answer
var questionList = [
  {
    question: "Which is my favorite Movie ",
    answer: "3 idiots",
  },

  {
    question: "Do i prefer beach or Hills ",
    answer: "beach",
  },
  {
    question: "Which is my dream destination to visit ",
    answer: "bali",
  },
  {
    question: "Do i like Summer or Winters? ",
    answer: "winters",
  },
  {
    question: "What do i like more? Golgappe or Noodles?",
    answer: "golgappe",
  },
];

//traversing through the array to pass the parameters to play function

for (var i = 0; i < questionList.length; i++) {
  play(questionList[i].question, questionList[i].answer);
}

console.log("Thanks for playing ur final score is: " + score);
