function computerPlay (userInput){
  if (userInput.toLowerCase() === 'rock'){
   return userInput;
   }
  else if (userInput.toLowerCase() === 'paper'){
     return userInput;
   }
   else if (userInput.toLowerCase() === 'scissors'){
     return userInput;
   }
   else {console.log('Invalid Nnuku!')}
   };
 
const getComputerChoice = () => {
   const randomNumber = (Math.floor(Math.random() * 3));
   if (randomNumber === 0){
     return 'Rock';
   }
   else if (randomNumber === 1){
     return 'Paper';
   }
   else if (randomNumber === 2){
   return 'Scissors';
   }
   }
 
function playRound (playerSelection,computerSelection){
  if (playerSelection === computerSelection){
     return 'The game is a tie!';
  }
  else if (playerSelection === 'rock'){
     if (computerSelection === 'paper'){
       return 'The computer wins!';
     }
  else {
       return 'You won!';
     }
  }
  else if (playerSelection === 'paper'){
  if (computerSelection === 'scissors'){
       return 'The computer wins!';
     }
  else {
       return 'You won!';
     }
   }
   else if (playerSelection === 'scissors') {
     if (computerSelection === 'rock') {
       return 'The computer wins!';
     }
     else {
       return 'You won!';
     }
   }
   
 }
 
function playGame () {
  const playerSelection = computerPlay('scissors');
  const computerSelection = getComputerChoice();
  console.log('You threw:' + playerSelection);
  console.log('The computer threw:' + computerSelection);
  console.log(playRound(playerSelection, computerSelection));
  };

playGame();