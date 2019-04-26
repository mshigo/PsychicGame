//initialized vars
let wins=0;
let losses=0;
let totalGuesses=5;
let guessesLeft=5;
let lettersGuessed=[];
var letterToGuess=null;

//array to hold letter choices
var letterChoices=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//comp selects random letter
var randomLetter = letterChoices[Math.floor(Math.random()*letterChoices.length)];

//when user presses key it becomes their guess
document.onkeyup = function(e) {
    var playerGuess = String.fromCharCode(e.keyCode).toLowerCase();
    var check = letterChoices.includes(playerGuess);

    if (check === false) {
        alert("Invalid guess, try again.");
        return false;
    } else { 
        //if player guesses correctly, push guess to array of guessed letters and update guesses remaining
        lettersGuessed.push(playerGuess);
        guessesLeft--;
        updateGuessesLeft();
        displayGuesses();

        if (guessesLeft == 0) {
            //no more guesses, then player has lost and we update html
            losses++;
            document.querySelector('#lossCount').innerHTML = "Losses: " + losses;
            alert("Looks like you have run out of guesses, try your luck again?");
            resetGame();
        } else { //still have guesses
            if (playerGuess == letterToGuess) { //if player guesses correctly, update wins and html, then reset
                wins++;
                document.querySelector("#winCount").innerHTML = "Wins: " + wins;
                playerGuess = playerGuess.toUpperCase();
                alert('Congrats, ' + playerGuess + ' was the correct letter! Maybe you are psychic...');
                resetGame();
            }
        }
    }
}

function updateGuessesLeft() {
    document.querySelector('#guessesLeft').innerHTML = "Remaining guesses: " + guessesLeft;
}

function updateLetterToGuess() {
    this.letterToGuess = this.letterChoices[Math.floor(Math.random()*this.letterChoices.length)]
}

function displayGuesses() {
    document.querySelector('#guesses').innerHTML = "You've guessed: " + lettersGuessed.join(", ");
}

function resetGame() {
    totalGuesses=5;
    guessesLeft=5;
    lettersGuessed=[];

    //call functions to reset html too
    updateGuessesLeft();
    updateLetterToGuess();
    displayGuesses();
}
//call resetGame
resetGame();