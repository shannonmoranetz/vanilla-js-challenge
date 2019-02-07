var answer = 50;
var minRange;
var maxRange;

document.querySelector('.guess-submit').addEventListener('click', function() {
  getNameGuess();
});

document.querySelector('.range-submit').addEventListener('click', function() {
  getRange();
});

function getRange() {
  minRange = document.querySelector('.min-range-input').value;
  maxRange = document.querySelector('.max-range-input').value;
}

function getNameGuess() {
  var playerOneGuess = document.querySelector('.p1-guess-input').value;
  var playerTwoGuess = document.querySelector('.p2-guess-input').value;
  var playerOneName = document.querySelector('.p1-name-input').value;
  var playerTwoName = document.querySelector('.p2-name-input').value;
  checkPlayerOneGuess(playerOneGuess, playerOneName);
  checkPlayerTwoGuess(playerTwoGuess, playerTwoName);
}

function checkPlayerOneGuess(playerOneGuess, playerOneName) {
  var playerOneResult;
  if (playerOneGuess < minRange || playerOneGuess > maxRange) {
    console.log(playerOneGuess, minRange);
    playerOneResult = 'outside of range';
  } else if (playerOneGuess < answer) {
    playerOneResult = 'thats too low';
  } else if (playerOneGuess > answer) {
    playerOneResult = 'thats too high';
  } else {
    playerOneResult = 'correct';
    endGame(playerOneName);
  }
  updatePlayerOneScoreDom(playerOneResult, playerOneName, playerOneGuess);
}

function checkPlayerTwoGuess(playerTwoGuess, playerTwoName) {
  var playerTwoResult;
  if (playerTwoGuess < minRange || playerTwoGuess > maxRange) {
    playerTwoResult = 'outside of range';
  } else if (playerTwoGuess < answer) {
    playerTwoResult = 'thats too low';
  } else if (playerTwoGuess > answer) {
    playerTwoResult = 'thats too high';
  } else {
    playerTwoResult = 'correct';
    endGame(playerTwoName);
  }
  updatePlayerTwoScoreDom(playerTwoResult, playerTwoName, playerTwoGuess);
}

function updatePlayerOneScoreDom(result, name, guess) {
  document.querySelector('.p1-score-name').innerHTML = name;
  document.querySelector('.p1-current-guess').innerHTML = guess;
  document.querySelector('.p1-hot-cold').innerHTML = result;
}

function updatePlayerTwoScoreDom(result, name, guess) {
  document.querySelector('.p2-score-name').innerHTML = name;
  document.querySelector('.p2-current-guess').innerHTML = guess;
  document.querySelector('.p2-hot-cold').innerHTML = result;
}

function endGame(name) {
  document.querySelector('.winner').innerHTML = `${name} is the winner`;
}
