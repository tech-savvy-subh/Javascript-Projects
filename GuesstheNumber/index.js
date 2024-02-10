
let randomNumber = parseInt(Math.random() * 100 + 1); //this is the randomnymber which will be generated but it will be a 
//positive integer and parseInt will give a value which will not be in decimal

//Selecting the rquired variables to manu pulate dom
const submit = document.querySelector('#subt'); //submit button 
const userInput = document.querySelector('#guessField'); //userInput in textbox
const guessSlot = document.querySelector('.guesses'); //previous guesses
const remaining = document.querySelector('.lastResult');//remaining number of gusses
const lowOrHi = document.querySelector('.lowOrHi'); //if the guessed number in every iteration is low or high
const startOver = document.querySelector('.resultParas'); //to start the game over again

const p = document.createElement('p'); //this will show the new button/p has been used as a button to start the game over

//let prevGuess = [];//the array which will store the previous gusses
let numGuess = 1; //by default number of guesses

let playGame = true; //this is a boolean value which will decide to let us play or not

if (playGame) {
  submit.addEventListener('click', function (e) { 
    e.preventDefault();
    const guess = parseInt(userInput.value); //converting userInput to integer
    console.log(guess);
    validateGuess(guess); //validating the guess if it is a valid number
  });
}

//validating the number
function validateGuess(guess) { //her ethe value of guess is coming from line 21 as validateGuess is a cb function and has access
  //to submit.addEventListner scope  
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
   // prevGuess.push(guess); //push the guessed number in prevGuess array
    if (numGuess === 10) { //if nmber if guesses are equal to 10 now
      displayGuess(guess); //display the guesses
      displayMessage(`Game Over. Random number was ${randomNumber}`);//then this message
      endGame();//end the game
    } else {
      displayGuess(guess); //keep showing the elements pushed
      checkGuess(guess); //check also
    }
  }
}
//check if the guess is matching
function checkGuess(guess) {
  if (guess === randomNumber) { 
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}
//display it
function displayGuess(guess) { 
  userInput.value = ''; //making it empty at the initial
  guessSlot.innerHTML += `${guess}, `; //keep adding 
  numGuess++;//increase the number of guesses
  remaining.innerHTML = `${11 - numGuess} `; //calculate the remaining guesses 
  //11 because by default we are starting from 1.
}
//Display the message
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
//how to end it 
function endGame() {
  userInput.value = ''; //make this input box empty
  userInput.setAttribute('disabled', ''); //user will no longer be able to modify or touch userInput text box
  p.classList.add('button');//giving a class button to element p
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;  //start new game
  startOver.appendChild(p);  //show the above text 
  playGame = false; //make the playgame as false so above if block will not execute
  newGame();//start new game 
}
//starting new game
function newGame() {
  const newGameButton = document.querySelector('#newGame'); //Start new game as a button
  newGameButton.addEventListener('click', function (e) { //catch the event
    randomNumber = parseInt(Math.random() * 100 + 1); //do the same
   // prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled'); //remove the disabled attribute and give user the permission to play again
    startOver.removeChild(p); //remove the appended child p which shows text Start New Game

    playGame = true;
  });
}

