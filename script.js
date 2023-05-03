const words = [
  "Sabotage",
  "Camouflage",
  "Prestige",
  "Barrage",
  "Rough",
  "Tinge",
  "Dressage",
  "Mirage",
  "Extinct",
  "Instinct",
  "Distinct",
  "Defunct"
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
btnZ.onclick = clicked;

updateWord();

userInput.addEventListener("input", function() {
  if (userInput.value.trim().toLowerCase() === currentWord.toLowerCase()) {
    checkButton.disabled = false;
  } else {
    checkButton.disabled = true;
  }
});

userInput.focus();
document.onkeyup = function () {
  var e = e || window.event; // for IE to cover IEs window event-object
  if(e.altKey && e.which == 65) {
    alert('Dont Hack On My Site -Eli');
    return false;
  }
}
