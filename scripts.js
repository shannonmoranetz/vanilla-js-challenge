var minRange = 0;
var maxRange = 100;

document.querySelector('.guess-submit').addEventListener('click', function() {
  getNameGuess();
});

function getNameGuess() {
  var playerOneGuess = document.querySelector('.p1-guess-input').value;
  var playerTwoGuess = document.querySelector('.p2-guess-input').value;
  var playerOneName = document.querySelector('.p1-name-input').value;
  var playerTwoName = document.querySelector('.p2-name-input').value;
  console.log(playerOneGuess, playerTwoGuess, playerOneName, playerTwoName);
}

// function checkGuess() {
// }
