var minRange = 0;
var maxRange = 100;
var answer = 50;

document.querySelector('.guess-submit').addEventListener('click', function() {
  getNameGuess();
});

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
  if (playerOneGuess < answer) {
    playerOneResult = 'thats too low';
  } else if (playerOneGuess > answer) {
    playerOneResult = 'thats too high';
  } else {
    playerOneResult = 'correct';
  }
  updatePlayerOneScoreDom(playerOneResult);
}

function checkPlayerTwoGuess(playerTwoGuess, playerTwoName) {
  var playerTwoResult;
  if (playerTwoGuess < answer) {
    playerTwoResult = 'thats too low';
  } else if (playerTwoGuess > answer) {
    playerTwoResult = 'thats too high';
  } else {
    playerTwoResult = 'correct';
  }
  updatePlayerTwoScoreDom(playerTwoResult);
}

function updatePlayerOneScoreDom(result) {
  document.querySelector('.p1-current-guess').innerHTML = result;
}

function updatePlayerTwoScoreDom(result) {
  document.querySelector('.p2-current-guess').innerHTML = result;
}
