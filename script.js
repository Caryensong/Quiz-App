let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robby Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Wie definiert man in JavaScript eine Variable",
    answer_1: "let 100 = rate;",
    answer_2: "100 = let rate;",
    answer_3: "rate = 100;",
    answer_4: "let rate = 100;",
    right_answer: 4,
  },
  {
    question: "Was bedeutet CRUD",
    answer_1: "Computer Rolling Update Down",
    answer_2: "Create Read Update Delete",
    answer_3: "Careful Ref Unique Display",
    answer_4: "Computer Row Uni Discord",
    right_answer: 2,
  },
  {
    question: "Wie definiert man in JavaScript eine Variable",
    answer_1: "let 100 = rate;",
    answer_2: "100 = let rate;",
    answer_3: "rate = 100;",
    answer_4: "let rate = 100;",
    right_answer: 4,
  },
  {
    question: "Was bedeutet CRUD",
    answer_1: "Computer Rolling Update Down",
    answer_2: "Create Read Update Delete",
    answer_3: "Careful Ref Unique Display",
    answer_4: "Computer Row Uni Discord",
    right_answer: 2,
  },
];

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio("audio/success.mp3");
let AUDIO_WRONG = new Audio("audio/wrong.mp3");

function init() {
  document.getElementById("allQuestions").innerHTML = questions.length; //wie viele fragen werden anzeigt
  showQuestion();
}

function showQuestion() {
  if (gameIsOver()) {
    showEndScreen();
  } else {
    updateProgressBar();
    updateToQuestion();
  }
}

function gameIsOver() {
  //diese funktion spuckt true oder false raus
  return currentQuestion >= questions.length;
}

function answer(selection) {
  let question = questions[currentQuestion]; // hier ist die array 0 gefragtt
  let selectedQuestionNumber = selection.slice(-1); //get last char of stirng nicht mehr answer_...;
  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (rightAnswerSelected(selectedQuestionNumber)) {
    document.getElementById(selection).parentNode.classList.add("bg-success"); //answer (selection) heist genau so wie ID
    rightQuestions++;
    AUDIO_SUCCESS.play();
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger"); // parentNode ist für eine element der drüber ist da soll die klasse hin
    document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
    AUDIO_WRONG.play();
  }
  document.getElementById("nextButton").disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber) {
  let question = questions[currentQuestion];
  return selectedQuestionNumber == question["right_answer"];
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("nextButton").disabled = true;
  resetButton();
  showQuestion();
}

function resetButton() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}

function restartGame() {
  document.getElementById("endHeaderImg").src ="./assets/icon/brain result.png";
  rightQuestions = 0;
  currentQuestion = 0;
  document.getElementById("endScreen").style = "display: none";
  document.getElementById("questionBody").style = "";

  init();
}

function showEndScreen() {
  document.getElementById("endScreen").style = "";
  document.getElementById("questionBody").style = "display: none";

  document.getElementById("allQuestionsFinish").innerHTML = questions.length;
  document.getElementById("amountRightQuestions").innerHTML = rightQuestions;
  document.getElementById("endHeaderImg").src = "assets/icon/brain result.png";
}

function updateProgressBar() {
  let percent = ((currentQuestion + 1) * 100) / questions.length;
  document.getElementById("progressBar").innerHTML = `${percent}% `;
  document.getElementById("progressBar").style.width = `${percent}% `;
}

function updateToQuestion() {
  let question = questions[currentQuestion]; //hier wird die erste question angezeigt

  document.getElementById("questionsNum").innerHTML = currentQuestion + 1;
  document.getElementById("questionText").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = `<span class="num">A</span> ${question["answer_1"]}`;
  document.getElementById("answer_2").innerHTML = `<span class="num">B</span> ${question["answer_2"]}`;
  document.getElementById("answer_3").innerHTML = `<span class="num">C</span> ${question["answer_3"]}`;
  document.getElementById("answer_4").innerHTML =` <span class="num">D</span> ${question["answer_4"]}`;
}
