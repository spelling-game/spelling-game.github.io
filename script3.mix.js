const words = [
  "While",
  "Smile",
  "Knife",
  "Plate",
  "Skate",
  "Whale",
  "Lace",
  "Pace",
  "Trace",
  "Mice",
  "Dice",
  "Rice",
  "Chase",
  "Blaze",
  "Quake",
  "Brave",
  "Cute",
  "Use",
  "Fuse",
  "Page",
  "Cage",
  "Rage",
  "Stage",
  "Huge",
  "Squeal",
  "Dream",
  "Stream",
  "Screen",
  "Sweet",
  "Agree",
  "Please",
  "Tease",
  "Cheese",
  "Sneeze",
  "Squeeze",
  "Freeze",
  "Strode",
  "Alone",
  "Clone",
  "Scope",
  "Quote",
  "Froze",
  "Care",
  "Dare",
  "Hare",
  "Share",
  "Rare",
  "Mare"
  
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