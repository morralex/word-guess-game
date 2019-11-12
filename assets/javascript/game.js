//list the words that user will be guessing

function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i + 1)) != -1) {
        indexes.push(i);
    }
    return indexes;
}
// var is = getAllIndexes(songs, '')
// songs.forEach(function (i) {
//     songs[i] = underScr[i]
// })

const songs = ["IWantYou", "Blackbird", "ComeTogether", "Something", "PennyLane", "InMyLife", "AHardDaysNight"];
const underScr = ['_', '_', '_'];

// ================ Variables ================ //

let rdmSong = "";
// This will break the solution into individual letters to be stored in array.
let splitSong = [];
// This will be the number of blanks we show based on the solution
let numBlanks = 0;
// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
let blanks = [];
// Holds all of the wrong guesses
let wrongGuesses = [];

// Game counters
let winCounter = 0;
let lossCounter = 0;
let numGuesses = 9;


startGame = () => {

    numGuesses = 9;

    rdmSong = songs[Math.floor(Math.random() * songs.length)];

    console.log(rdmSong)

    splitSong = rdmSong.toLocaleLowerCase().split('');

    console.log(splitSong)

    numBlanks = splitSong.length;
    console.log(numBlanks)

    // CRITICAL LINE - Here we *reset* the guess and success array at each round.
 blanks = [];
    // CRITICAL LINE - Here we *reset* the wrong guesses from the previous round.
    wrongGuesses = [];

    for (let i = 0; i < numBlanks; i++) {
        blanks.push("_")
    }

    console.log(blanks)

    document.getElementById("noGuessesR").innerHTML = `<h5>` + numGuesses + `<h5>`;
    document.getElementById("display").innerHTML = blanks.join(" ");
    document.getElementById("guessedLetters").innerHTML = `<h5>` + wrongGuesses.join(" ") + `<h5>`;


}

letterCheck = (elem) => {

    let letterInWord = false;

    for (let i = 0; i < numBlanks; i++) {
        if (splitSong[i] === elem) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (let j = 0; j < numBlanks; j++) {
            if (splitSong[j] === elem) {
             blanks[j] = elem
            }
        }
        console.log (blanks)
    }
    else {
        wrongGuesses.push(elem);
        numGuesses--;
    }


}

endOfRound = () => {
    console.log("WinCount: " + winCounter + "\nLossCount: " + lossCounter + "\nNo. of Guesses: " + numGuesses)

    document.getElementById("noGuessesR").innerHTML = `<h5>` + numGuesses + `<h5>`;
    document.getElementById("display").innerHTML = blanks.join(" ");
    document.getElementById("guessedLetters").innerHTML = `<h5>` + wrongGuesses.join(" ") + `<h5>`;

    if (splitSong.toString() === blanks.toString()) {
        winCounter++;
        alert(`Winner! Song Title: ${rdmSong}`);

        document.getElementById("winCount").innerHTML = winCounter;
        startGame()

    } else if (numGuesses === 0) {
        lossCounter++;
        alert("You lose...");

        document.getElementById("lossCount").innerHTML = lossCounter
        startGame()
    }
}

startGame();

document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        let guessedLetters = event.key.toLowerCase();

        letterCheck(guessedLetters);

        endOfRound();
    }
}


