/*let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () =>{
     return Math.floor(Math.random()*10);
    }
    console.log(generateTarget())
  
    const compareGueses =(humanGuess,computerGuess,targetGuess) =>{
     const humanDifference = Math.abs(humanGuess - targetGuess);
     const computerDifference = Math.abs(computerGuess - targetGuess);
  
     return humanDifference <= computerDifference;
    }
  
    const updateScore = winner => {
      if (winner === 'human'){
        humanScore++;
      }else if(winner === 'computer'){
        computerScore++;
      }
    }
  
    const advanceRound = () =>{
      currentRoundNumber++;
    }
   */

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let differH;
let differC;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

function getAbsoluteDistance(human, computer, target) {
    differH = Math.abs(target - human)
    differC = Math.abs(target - computer)
}

function compareGuesses(human, computer, target) {
    getAbsoluteDistance(human, computer, target);
    if(human < 0 || human > 9) {alert('Number must be between 0 to 9')};
    differH <= differC
}

function updateScore(winner) {
    winner === 'human' ? humanScore++ : computerScore++;
}

function advanceRound() {
    currentRoundNumber ++;
}
