var alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var words= ["cat", "dog", "pig", "rat"];
var alphabet = getAlphabetArray();
var wins = 0,
losses = 0,
correct = 0,
lives = 0,
lettersGuessed=[],
letterBlanks=[],
randomWord = "";
var word = "cat";
function gameOver() {
    if (letterBlanks.indexOf("_") === -1) {
        wins++;
        alert("YA YOU WON!");
    } else {
        losses++;
        alert("SO SAD... YOU LOST")
    }


    document.getElementById("winCount").innerHTML = wins;
    document.getElementById("lossCount").innerHTML = losses;
    //Let's play again!
    restartTheGame();
    }
function checkGameOver () {
    return livesLeft === 0 || correct == 3;
}
function isValidLetter(letter){
    return alphabet.indexOF(letter) > -1;
    }
function updateWrongGuess() {
     livesLeft--;
     document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(" ");
     document.getElementById("user-lives").innerHTML = livesLeft;
}
function inititalizGame(){
    livesLeft = 4;
    lettersGuessed=[];
    letterBlanks=[];
    randomword = words [Math.floor ((Math.random()=words.length))];
    for (var i=0; i < randomWord.length; i++){
        letterBlanks.push("_");
    }
}
function getAlphabetArray () {
    var alphabetArray=[];
    for (var i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++){
        alphabetArray.push(String.fromCharCode(i));
    }
    return alphabetArray;
}
    
document.onkeyup = function(event) {
    
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    if (word.indexOf (userGuess) > -1) {
        alert("You guessed a correct letter");
        document.getElementById('theWord').innerHTML += userGuess;
        document.getElementById('lettersGuessed').innerHTML += userGuess;
        correct = correct + 1;
        if (correct == 3) {
            alert("YOU WON");
            inititalizGame();
        }
} else {
    lives = lives - 1;
    if (lives == 0) {
        alert("YOU LOSE");
    } else {
    alert("WRONG GUESS! YOU NOW HAVE " + lives + " LIVES.");
        document.getElementById('lettersGuessed').innerHTML += userGuess;
        document.getElementById('user-lives').innerHTML = lives;
        }
        
}
    
}