// SETTING UP SCORE KEEPING METHODS
var wins = 0;
    losses = 0;
var guessesLeft = 10;

// ESTABLISH COMPUTER CHOICE
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var computerChoice = alphabet[Math.floor(Math.random()*alphabet.length)];

console.log(computerChoice);

// ESTABLISH ARRAY TO HOLD USER GUESSES 
var userGuesses = [];

document.onkeyup = function(event) {
    // LOG USER GUESS BY KEYSTROKE
    var userGuess = event.key;
    userGuess = userGuess.toUpperCase();
    // ERROR IF USER ENTERS SOMETHING THAT IS NOT A LETTER
    if (alphabet.indexOf(userGuess) === -1) {
        alert("Not " + userGuess + "... I'm thinking of a letter.")
    } 
    // ERROR IF USER GUESSES SAME LETTER MORE THAN ONCE
    else if (userGuesses.includes(userGuess)) {
        alert("You've already guessed " + userGuess + "! Guess again.") 
    }
    // RUNS OTHERWISE
    else {
        // ANNOUNCES WIN IF USER GUESSES COMPUTER GUESS
        if (userGuess === computerChoice) {
            alert("You win! It was " + userGuess + ".")
            wins++;
            document.getElementById('wins').innerHTML = wins;
            userGuesses = [];
            guessesLeft = 10;
            document.getElementById('guessesLeft').innerHTML = guessesLeft;
            computerChoice = alphabet[Math.floor(Math.random()*alphabet.length)];
            document.getElementById('userGuesses').innerHTML = "";

            console.log(computerChoice);
        }
        // ANNOUNCES LOSS IF USER FAILS TO GUESS WITHIN 10 TRIES
        else if (guessesLeft < 2) {
            alert("You lose! It was " + computerChoice + ".");
            losses++;
            document.getElementById('losses').innerHTML = losses;
            userGuesses = [];
            guessesLeft = 10;
            document.getElementById('guessesLeft').innerHTML = guessesLeft;
            computerChoice = alphabet[Math.floor(Math.random()*alphabet.length)];
            document.getElementById('userGuesses').innerHTML = "";

            console.log(computerChoice);
        }
        // COUNTS DOWN VALID GUESSES AND LOGS NEW GUESSES
        else {
            userGuesses.push(userGuess);
            guessesLeft--;
            document.getElementById('guessesLeft').innerHTML = guessesLeft;

            document.getElementById('userGuesses').innerHTML = userGuesses;
        }
    
    }

}
