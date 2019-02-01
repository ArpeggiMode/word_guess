

var wordsList = ["brahms", "beethoven", "dvorak", "debussy", "ravel", "wagner", "paginini", "chopin", "berlioz", "tchaikovsky", "mendelssohn", "mahler"];


var wordToGuess = "";

var lettersInwordToGuess = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var badGuesses = [];

var howManyWins = 0;

var howManyLosses = 0;

var numGuesses = 10;


function playGame() {

  numGuesses = 10;
 
  wordToGuess = wordsList[Math.floor(Math.random() * wordsList.length)];
  lettersInwordToGuess = wordToGuess.split("");
  numBlanks = lettersInwordToGuess.length;

  console.log(wordToGuess);

  blanksAndSuccesses = [];
  badGuesses = [];

  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }

  console.log(blanksAndSuccesses);

  document.getElementById("guesses-remaining").innerHTML = numGuesses;
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("bad-guesses").innerHTML = badGuesses.join(" ");
}


function checkLetters(letter) {

  var isLetterCorrect = false;

  for (var i = 0; i < numBlanks; i++) {
    if (wordToGuess[i] === letter) {
      isLetterCorrect = true;
    }
  }

  if (isLetterCorrect) {

    for (var j = 0; j < numBlanks; j++) {

      if (wordToGuess[j] === letter) {
        blanksAndSuccesses[j] = letter;
      }
    }

    console.log(blanksAndSuccesses);
  }

  else {
    badGuesses.push(letter);
    numGuesses--;
  }
}

function roundOver() {

  console.log("WinCount: " + howManyWins + " | LossCount: " + howManyLosses + " | NumGuesses: " + numGuesses);

  document.getElementById("guesses-remaining").innerHTML = numGuesses;
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("bad-guesses").innerHTML = badGuesses.join(" ");

  if (lettersInwordToGuess.toString() === blanksAndSuccesses.toString()) {

    howManyWins++;
    alert("Congratulations, you win!");
    document.getElementById("win-counter").innerHTML = howManyWins;
    playGame();
  }

  else if (numGuesses === 0) {
    howManyLosses++;
    alert("I'm sorry, but you lose");
    document.getElementById("loss-counter").innerHTML = howManyLosses;

    playGame();
  }
}


playGame();

document.onkeyup = function(event) {

    var letterGuessed = String.fromCharCode(event.which).toLowerCase();
    checkLetters(letterGuessed);

    roundOver();
};