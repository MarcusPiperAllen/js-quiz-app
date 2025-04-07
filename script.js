const quizData = [
  {
    question: "What does NaN stand for in JavaScript?",
    options: ["Not a Number", "New and Null", "Number and Name", "No Assigned Name"],
    answer: "Not a Number"
  },
  {
    question: "Which method checks if a value is NaN?",
    options: ["isNaN()", "checkNaN()", "isNumber()", "validateNaN()"],
    answer: "isNaN()"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  resultEl.textContent = "";
  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  answersEl.innerHTML = "";

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", () => checkAnswer(option));
    answersEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  if (selected === correct) {
    resultEl.textContent = "✅ Correct!";
    score++;
  } else {
    resultEl.textContent = `❌ Wrong! Correct: ${correct}`;
  }
  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    showFinalScore();
  }
});

function showFinalScore() {
  questionEl.textContent = "Quiz Complete!";
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";
  resultEl.textContent = `You scored ${score} out of ${quizData.length}`;
}

// Initialize the first question
loadQuestion();
nextBtn.style.display = "none";
