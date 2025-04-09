// Basic interactive JS quiz app with reset button and visual building blocks

const quizData = [
  {
    question: "What is the output of: console.log(typeof null)?",
    options: ["object", "null", "undefined", "boolean"],
    answer: "object"
  },
  {
    question: "Which method removes the last item of an array?",
    options: ["pop()", "push()", "shift()", "slice()"],
    answer: "pop()"
  },
  {
    question: "What is the purpose of the '===' operator in JS?",
    options: ["Assign a value", "Loose equality", "Strict equality", "Compare length"],
    answer: "Strict equality"
  },
  {
    question: "Which method is used to remove the first element from an array?",
    options: ["shift()", "pop()", "splice()", "slice()"],
    answer: "shift()"
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const resetBtn = document.getElementById("resetBtn");
const progressEl = document.getElementById("puzzleBoard");
const resultEl = document.getElementById("resultMessage");

function renderQuestion() {
  resultEl.textContent = "";
  if (currentIndex >= quizData.length) {
    if (score === quizData.length) {
      resultEl.textContent = "🎉 You completed the quiz!";
      resultEl.style.color = "green";
      triggerConfetti();
    } else {
      resultEl.textContent = "❌ You did not pass. Please try again.";
      resultEl.style.color = "#f44336";
    }
    optionsEl.innerHTML = "";
    return;
  }

  const current = quizData[currentIndex];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "option-btn";
    btn.onclick = () => selectAnswer(opt);
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const correct = quizData[currentIndex].answer;
  if (selected === correct) {
    score++;
    scoreEl.textContent = `Score: ${score}`;
    const currentPiece = document.getElementById(`piece${score}`);
    if (currentPiece) currentPiece.style.color = "black";
  }
  currentIndex++;
  renderQuestion();
}

function resetQuiz() {
  currentIndex = 0;
  score = 0;
  scoreEl.textContent = "Score: 0";
  resultEl.textContent = "";
  for (let i = 1; i <= quizData.length; i++) {
    const piece = document.getElementById(`piece${i}`);
    if (piece) piece.style.color = "transparent";
  }
  renderQuestion();
}

function triggerConfetti() {
  // Placeholder for future confetti effect (e.g., canvas-confetti library)
  console.log("🎊 Confetti would launch here!");
}

resetBtn.addEventListener("click", resetQuiz);
renderQuestion();
