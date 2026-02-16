let randonNumber = parseInt(Math.random() * 100 + 1);

const btn = document.getElementById("btn");
const userInput = document.getElementById("userInput");
const guessDisplay = document.getElementById("guess");
const remainingDisplay = document.getElementById("remaining");
const messageDisplay = document.getElementById("messageDisplay");
const para = document.createElement("p");
let info = document.querySelector(".info");

let guessArray = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
    return false;
  }
  if (guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100");
    return false;
  } else {
    guessArray.push(guess);
    displayMessage(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(
        `Game Over! You've used all 10 guesses. The random number was ${randonNumber}`,
      );
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randonNumber) {
    displayMessage("Congratulations! You guessed the number correctly!");
    endGame();
  } else if (guess > randonNumber) {
    displayMessage("Too high! Try a lower number.");
  } else {
    displayMessage("Too low! Try a higher number.");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessDisplay.textContent += `${guess}; `;
  remainingDisplay.textContent = 10 - guessArray.length;
  numGuess++;
}

function displayMessage(message) {
  messageDisplay.innerHTML = message;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  para.classList.add("button");
  para.innerHTML = `<h1 id="newGame" >Start new Game</h1>`;
  info.appendChild(para);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.getElementById("newGame");
  newGameBtn.addEventListener("click", (e) => {
    e.preventDefault();
    userInput.value = "";
    userInput.removeAttribute("disabled");
    guessArray = [];
    numGuess = 1;
    guessDisplay.textContent += `${guess}; `;
    remainingDisplay.textContent = 10 - guessArray.length;
    numGuess++;
    info.remove(para);
    playGame = true;
  });
}
