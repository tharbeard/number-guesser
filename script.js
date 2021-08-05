let humanScore = 0; //tracks human player score
let computerScore = 0; //tracks computer player score
let currentRoundNumber = 1; //tracks number of rounds

// generate a target number
const generateTarget = () => Math.floor(Math.random() * 10);

//determine winner
const compareGuesses = (userGuess, computerGuess, target) => {
  let diffUser = getAbsoluteDistance(target, userGuess);
  let diffComputer = getAbsoluteDistance(target, computerGuess);
  if (diffUser === diffComputer) {
    return true;
  } else if (diffUser < diffComputer) {
      return true;
  } else {
      return false;
  }
}

//gets absolute value for detemining winner
const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

//updates score
const updateScore = winner => (winner === 'human') ? humanScore += 1 : computerScore += 1;

//updates round
const advanceRound = () => currentRoundNumber += 1;
