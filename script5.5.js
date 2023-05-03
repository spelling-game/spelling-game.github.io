const words = [
  "Sculpture",
  "Venture",
  "Moisture",
  "Departure",
  "Rupture",
  "Nurture",
  "Capture",
  "Pasture",
  "Virtue",
  "Century",
  "Statue",
  "Factual",
  "Virtual",
  "Mutual"
];

let currentWord = "";
let score = 0;

const wordElement = document.getElementById("word");
const userInput = document.getElementById("userInput");
const checkButton = document.getElementById("checkButton");
const scoreElement = document.getElementById("score");

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function updateWord() {
  currentWord = getRandomWord();
  wordElement.textContent = currentWord;
}

function checkInput() {
  if (currentWord.toLowerCase() === userInput.value.trim().toLowerCase()) {
    score++;
    scoreElement.textContent = "Score: " + score;
    userInput.value = "";
    updateWord();
  }
}

updateWord();

userInput.addEventListener("input", function() {
  if (userInput.value.trim().toLowerCase() === currentWord.toLowerCase()) {
    checkButton.disabled = false;
  } else {
    checkButton.disabled = true;
  }
});

userInput.focus();