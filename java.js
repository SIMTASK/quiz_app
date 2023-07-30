const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Berlin", "London", "Paris", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Venus", "Mars", "Saturn", "Jupiter"],
      correctAnswer: "Mars"
    },
    {
      question: "What is 5 + 3?",
      choices: ["6", "7", "8", "9"],
      correctAnswer: "8"
    }
  ];
  
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const submitButton = document.getElementById("submit-btn");
  const resultElement = document.getElementById("result");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const currentQ = questions[currentQuestion];
    questionElement.textContent = currentQ.question;
    choicesElement.innerHTML = "";
  
    currentQ.choices.forEach((choice) => {
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "choice";
      input.value = choice;
      choicesElement.appendChild(input);
  
      const label = document.createElement("label");
      label.textContent = choice;
      choicesElement.appendChild(label);
  
      choicesElement.appendChild(document.createElement("br"));
    });
  }
  
  function checkAnswer() {
    const selectedAnswer = document.querySelector("input[name='choice']:checked");
    if (selectedAnswer) {
      const userAnswer = selectedAnswer.value;
      const currentQ = questions[currentQuestion];
      if (userAnswer === currentQ.correctAnswer) {
        score++;
      }
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    }
  }
  
  function showResult() {
    questionElement.textContent = "";
    choicesElement.innerHTML = "";
    submitButton.style.display = "none";
    resultElement.textContent = `You scored ${score} out of ${questions.length}!`;
  }
  
  submitButton.addEventListener("click", checkAnswer);
  showQuestion();
  