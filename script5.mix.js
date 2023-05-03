const words = [
  "Cousin",
  "Country",
  "Flourish",
  "Encourage",
  "Courage",
  "Nourish",
  "Southern",
  "Youngest",
  "Discourage",
  "Couple",
  "Trouble",
  "Double",
  "Nourishing",
  "Younger",
  "Special",
  "Artificial",
  "Beneficial",
  "Social",
  "Facial",
  "Official",
  "Specialist",
  "Crucial",
  "Commercial",
  "Especially",
  "Officially",
  "Antisocially",
  "Financial",
  "Superficial",
  "Reaction",
  "Celebration",
  "Examination",
  "Initial",
  "Potential",
  "Confidential",
  "Martial",
  "Essential",
  "Nuptial",
  "Residential",
  "Credential",
  "Partial",
  "Celestial",
  "Influential",
  "Demeanour",
  "Splendour",
  "Endeavour",
  "Clamour",
  "Humour",
  "Candour",
  "Centre",
  "Massacre",
  "Litre",
  "Lyre",
  "Calibre",
  "Fibre",
  "Millimetre",
  "Meagre",
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