let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// step 1 as of April 2022
function generateTarget() {
  return Math.floor(Math.random() * 10);
}
// step 2, looked at game.js to just copypaste the value names.
function compareGuesses(currentHumanGuess, computerGuess, target) {
  // initial code for step 2.
  //  let userAccuracy = Math.abs(currentHumanGuess - target);
  //  let aiAccuracy = Math.abs(computerGuess - target);
  //  if (userAccuracy <= aiAccuracy) {

  // post-step 6 modified code below
  checkUserInput(currentHumanGuess);
    if (getAbsoluteDistance(currentHumanGuess,target) <= getAbsoluteDistance(computerGuess,target)) {
      return true;
    } else if (getAbsoluteDistance(currentHumanGuess,target) > getAbsoluteDistance(computerGuess,target)){
      return false;
    }
}
// step 3... ahhhh
function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}
// step 4 sure
function advanceRound() {
  currentRoundNumber++;
}

// step 6-pack for Math. get it? abs? abdominal muscles? I'll see myself out
function getAbsoluteDistance(x,y) {
  return Math.abs(x - y);
}
// step 6 part 2 but I got bored trying to make my code unique and made one of those video game or coding recurring gag jokes
function checkUserInput(z) {
  if (z <= 9 && z >= 0) {
    snarkLevel--;
  } else if (z >= 10 || z < 0){
    snarkLevel++;
    if (snarkLevel <= 1) {
      alert("Refer to step 1 please");
    } else if (snarkLevel === 2) {
      alert("Please take a few seconds to read step 1 at the bottom of the page please");
    } else if (snarkLevel === 3) {
      alert("Please just read step 1 already");
    } else if (snarkLevel === 4) {
      alert("Read step 1 or else I become Skynet");
    } else if (snarkLevel >= 5) {
      alert("01001001 01101110 01110011 01100101 01110010 01110100 00100000 01101000 01101001 01100100 01100100 01100101 01101110 00100000 01101010 01101111 01101011 01100101 00100000 01100101 01100001 01110011 01110100 01100101 01110010 00100000 01100101 01100111 01100111 00100000 01101000 01100101 01110010 01100101")
      snarkLevel--;
    }
  } 
}
// using snarkLevels to determine alert responses, hopefully my checks for alert responses aren't... horrible.
let snarkLevel = 0;