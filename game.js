// {/* <div id="container">
// WORD: <span id="theWord"></span><br>
// LETTERS: <span id="placeholders"></span><br>
// WINS: <span id="winTotal"></span><br>
// LOSSES: <span id="lossCount"></span><br>
// LIVES LEFT: <span id="userLives">4</span><br>
// LETTERS GUESSED: <span id="lettersGuessed"></span><br>
// <h1> Common Household Pet</h1>
// <h2>_ _ _</h2> */}

// Grab reference to all of the above HTML elements
var wordHTML = document.getElementById("theWord");
var placeholdersHTML = document.getElementById("placeholders");
var winTotalHTML = document.getElementById("winTotal");
var lossCountHTML = document.getElementById("lossCount");
var userLivesHTML = document.getElementById("userLives");
var lettersGuessedHTML = document.getElementById("lettersGuessed");


// alphabet array to go through letters
var alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// 3 letter words for common household pets 
var alphabet = getAlphabetArray();
var wordArray = ["cat", "dog", "pig", "rat", "cow"];
var word = "";
var placeholders = ['_','_','_'];
var winTotal = 0;
var lossCount =0;
var userLives = 4;
var lettersGuessed = [];
var correct = 0;



// start game with 4 lives
function inititalizeGame() {
    userLives = 4;
    correct = 0;
    lettersGuessed = [];
    // get new word at random
    word = wordArray[Math.floor(Math.random() * wordArray.length)];
    // console log the word answer
    console.log(word);
    placeholdersHTML.innerHTML = placeholders;
    // write new word to page
}
inititalizeGame()

// chose from letters of the alphabet to guess letters in word
function getAlphabetArray() {
    var alphabetArray = [];
    for (var i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
        alphabetArray.push(String.fromCharCode(i));
    }
    return alphabetArray;
}


//if word has the letter the user guessed correct
document.onkeyup = function (event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // write lettersGuessed to page

    lettersGuessed.push(userGuess);
    lettersGuessedHTML.textContent = lettersGuessed;


    // when you get all 3 letters alert you won
    if (word.indexOf(userGuess) > -1) {
        alert("You guessed a correct letter");
        correct = correct + 1;
        var position = word.indexOf(userGuess);

    // create a for-loop to go through all letters in alphabet array
    for ( var i = 0; i < placeholders.length; i++) {

        if (correct == 3) {
            alert("YOU WON");
            winTotal++;
            winTotalHTML.textContent = winTotal; 
            inititalizeGame();
            placeholders[position] = userGuess;
            placeholdersHTML.innerHTML = placeholders;
            //console log how where the letter guessed is in position
            console.log(position);
        }}
    
        // if you have 0 lives alert you lost
    } else {
        userLives = userLives - 1;
        if (userLives == 0) {
            alert("YOU LOSE");
            lossCount++;
            lossCountHTML.textContent = lossCount; 

            // if you answer wrong then alert how many lives you have left
        } else {
            alert("WRONG GUESS! YOU NOW HAVE " + userLives + " LIVES.");
        }
       //when you lose the game and have no more lives update HTML to loss
        

    }
}