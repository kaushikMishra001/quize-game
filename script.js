const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      {
        text: " Rome",
        correct: false,
      },
      {
        text: "Paris",
        correct: true,
      },
      {
        text: "London",
        correct: false,
      },
      {
        text: " Berlin",
        correct: false,
      },
    ],
  },
  {
    question: `Who wrote the famous play "Hamlet"?`,
    answers: [
      {
        text: "Fyodor Dostoevsky",
        correct: false,
      },
      {
        text: "Jane Austen",
        correct: true,
      },
      {
        text: "Charles Dickens",
        correct: false,
      },
      {
        text: "William Shakespeare",
        correct: true,
      },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      {
        text: "CO2",
        correct: false,
      },
      {
        text: " NaCl",
        correct: false,
      },
      {
        text: "H2O",
        correct: true,
      },
      {
        text: "O2",
        correct: false,
      },
    ],
  },
  {
    question:
      "top three deadliest snakes in terms of human fatalities and their average kill rates.",
    answers: [
      {
        text: " Indian Cobra ",
        correct: false,
      },
      {
        text: "ex",
        correct: true,
      },
      {
        text: "Saw-scaled Viper",
        correct: false,
      },
      {
        text: "Russell's Viper",
        correct: false,
      },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => {
      selectAnswer(answer.correct);
    });
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(isCorrect) {
  if (isCorrect) {
    score++;
  }
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  alert(`Your score is ${score} out of ${questions.length}`);
}

startQuiz();
