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
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const resetBtn = document.getElementById("resetBtn");
const progressEl = document.getElementById("progress");

function renderQuestion() {
  if (currentIndex >= quizData.length) {
    questionEl.textContent = "Quiz Complete!";
    optionsEl.innerHTML = "";
    progressEl.innerHTML = "🎉 All puzzle pieces are in place!";
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
    const piece = document.createElement("div");
    piece.className = "puzzle-piece";
    piece.textContent = "🧩";
    progressEl.appendChild(piece);
  }
  currentIndex++;
  renderQuestion();
}

function resetQuiz() {
  currentIndex = 0;
  score = 0;
  scoreEl.textContent = "Score: 0";
  progressEl.innerHTML = "";
  renderQuestion();
}

resetBtn.addEventListener("click", resetQuiz);
renderQuestion();