//  GAME LOGIC

function getComputerChoice() {
    
    let x = Math.random();

    if (x <= 0.33) 
      {computerChoice = "Rock";} 
    else if (x <= 0.66) 
      {computerChoice = "Paper";}
    else 
      {computerChoice = "Scissors";} 
    return computerChoice;
    }

function getHumanChoice() {
    const humanChoice = window.prompt("Please enter your move:"); 
    if (humanChoice !==null) {
    return humanChoice;
    } else return null;
    } 

function updateScore() {
    if (playRound(humanSelection,computerSelection).includes("win")) { 
        return humanScore++;
    } else if (playRound(humanSelection,computerSelection).includes("lose")) {
        return computerScore++;
    } else;
    }

function playRound(humanChoice, computerChoice) {

  if (humanChoice.toUpperCase() === computerChoice.toUpperCase()) {
  return "It's a draw!";
  } else if ((humanChoice.toUpperCase() === 'ROCK' && computerChoice.toUpperCase() === 'SCISSORS') ||
        (humanChoice.toUpperCase() === 'PAPER' && computerChoice.toUpperCase() === 'ROCK') ||
        (humanChoice.toUpperCase() === 'SCISSORS' && computerChoice.toUpperCase() === 'PAPER')) 
  {return `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;}
  else if ((humanChoice.toUpperCase() === 'ROCK' && computerChoice.toUpperCase() === 'PAPER') ||
      (humanChoice.toUpperCase() === 'PAPER' && computerChoice.toUpperCase() === 'SCISSORS') ||
      (humanChoice.toUpperCase() === 'SCISSORS' && computerChoice.toUpperCase() === 'ROCK'))
  {return `You lose! ${computerChoice} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`;}
  else {return "Invalid play: Please enter rock, paper or scissors!.";}
  }



/*function playGame() {

for (let i = 0; i < 5; i++) {

const humanSelection = window.prompt("Round " + (i + 1) + ": Please enter your move:");
const computerSelection = getComputerChoice();
const result = playRound(humanSelection, computerSelection);
console.log(result);

  if (result.includes("win")) { 
  humanScore++;
  } else if (result.includes("lose")) {
  computerScore++;
  } else;
  }

console.log(humanScore);
console.log(computerScore);
}

console.log(playGame());

*/

let humanScore = 0;
let computerScore = 0;  

const buttons = document.querySelectorAll('button'); 
const imgContainer = document.getElementById('img-container');

buttons.forEach(button => {
  button.addEventListener('click', () => {

    let humanChoice = button.innerHTML
    let computerChoice = getComputerChoice();
    let outcome = playRound(humanChoice,computerChoice);


    const playerImg = document.getElementById("player-img");
    const playerImage = document.createElement('img');
    let firstTwoLetters = humanChoice.substring(0,2);
    playerImage.src = `images/${firstTwoLetters}.png`;

    const compImg = document.getElementById("comp-img");
    const compImage = document.createElement('img');
    let firstTwoLettersComp = computerChoice.substring(0,2);
    compImage.src = `images/${firstTwoLettersComp}.png`;

    playerImg.innerHTML = ''
    compImg.innerHTML =''
    

    const winner = document.getElementById('outcome'); 
   

    const RemoveStartUp = document.getElementById('start-up')
    if (RemoveStartUp != null) {
    RemoveStartUp.remove();
    }

    const elementToRemove = document.getElementById('img-container');
    elementToRemove.replaceChildren();

    const img = document.createElement('img');
    img.src = 'images/Rock.jpg'; 
    imgContainer.appendChild(img); 

    setTimeout(() => {
      imgContainer.removeChild(img); 

      const newImg = document.createElement('img');
      newImg.src = 'images/Paper.jpg'; 
      imgContainer.appendChild(newImg); 
    
    setTimeout(() => {
        imgContainer.removeChild(newImg); 
  
        const newImg2 = document.createElement('img');
        newImg2.src = 'images/Scissors.jpg'; 
        imgContainer.appendChild(newImg2); 

    setTimeout(() => {
        imgContainer.removeChild(newImg2); 
  
        const newImg3 = document.createElement('img');
        newImg3.src = 'images/Shoot!.jpg'; 
        imgContainer.appendChild(newImg3); 
        playerImg.appendChild(playerImage);
        compImg.appendChild(compImage);
        winner.innerHTML = outcome;
        
if (outcome.includes("win")) { 
  humanScore++;
  playerScore = document.getElementById('player-score');
  playerScore.innerHTML = "Score: " + humanScore;
  } else if (outcome.includes("lose")) {
  computerScore++;
  compScore = document.getElementById('computer-score');
  compScore.innerHTML = "Score: " + computerScore;
  } else;

  
if (computerScore === 5 || humanScore === 5) {
  
  const newButton = document.createElement('button');
  newButton.textContent = 'Play Again?'
  const newDiv = document.createElement('div');
  newDiv.classList.add('playagainbutton');
  const divElement = document.querySelector('.player-choice-container');
  divElement.insertAdjacentElement('afterend', newDiv);
  newDiv.appendChild(newButton);
  buttons.forEach(button => button.disabled = true);
  


  newButton.addEventListener('click', () =>  {
    buttons.forEach(button => button.disabled = false);
    humanScore = 0;
    computerScore = 0;
    playerScore.innerHTML = "Score: " + humanScore;
    compScore.innerHTML = "Score: " + computerScore;

  newButton.remove();
    });
  
  }

 

      }, 650); 
    }, 500); 
},500);});

});

