const randomNumber = parseInt(Math.random() * 100 + 1)

 const submit = document.querySelector('#subt') ;

 const userInput = document.querySelector('#guessField');
 const guessesSlot = document.querySelector('.guesses');
 const remaining = document.querySelector('.lastResult');
 const lowOrHi = document.querySelector('.lowOrHi');
 const startOver = document.querySelector('.resultParas');


 const p = document.createElement('p')

//  This array is made for the user to store his entered values so that he can avoid entering same numbers 

 let prevGuess = [] ;  


//  to count number of guesses / num of attempts 

let numGuess  = 1 ;

// Now we take a variable that starts the game or ends it 

let playGame = true ;

// To validate the input of ther user  we make function

function validateGuess(guess) {

}

// To Check the input values and print them 

function checkGuess(guess) {



}


function displayGuess(guess) {

}

// To perform the DOM Manipulations we use display methhod 
// Basicaly we take inputs from the user and display that 

function displayMessage(message) {

}


function endGame() {

}




function newGame() {

}
