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
let blanksAndSuccesses = [];
// Holds all of the wrong guesses
let wrongGuesses = [];

// Game counters
let winCounter = 0;
let lossCounter = 0;
let numGuesses = 9;



// if (i !== -1) {
//     underScr[i] = songs[i]
// }



// songs.forEach(function (e) {
//     console.log(e)

// })

startGame = () => {

    numGuesses = 9,

        rdmSong = songs[Math.floor(Math.random() * songs.length)].toLocaleLowerCase();

    console.log(rdmSong)

    splitSong = rdmSong.split('');

    console.log(splitSong)

    numBlanks = splitSong.length;
    console.log(numBlanks)

    // CRITICAL LINE - Here we *reset* the guess and success array at each round.
    blanksAndSuccesses = [];
    // CRITICAL LINE - Here we *reset* the wrong guesses from the previous round.
    wrongGuesses = [];

    for (let i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_")
    }

    console.log(blanksAndSuccesses)

    document.getElementById("noGuessesR").innerHTML = `<h3>` + numGuesses + `<h3>`;
    document.getElementById("display").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("guessedLetters").innerHTML = `<h5>` + wrongGuesses.join(" ") + `<h5>`;


}

letterCheck = (elem) => {

    let letterInWord = false;

    for (let i = 0; i < numBlanks; i++) {
        if (rdmSong[i] === elem) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (let j = 0; j < numBlanks; j++) {
            if (rdmSong[j] === elem) {
                blanksAndSuccesses[j] = elem
            }
        }
        console.log(blanksAndSuccesses)
    }
    else {
        wrongGuesses.push(elem);
        numGuesses--;
    }


}

endOfRound = () => {
    console.log("WinCount: " + winCounter + "\nLossCount: " + lossCounter + "\nNo. of Guesses: " + numGuesses)

    document.getElementById("noGuessesR").innerHTML = `<h3>` + numGuesses + `<h3>`;
    document.getElementById("display").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("guessedLetters").innerHTML = `<h5>` + wrongGuesses.join(" ") + `<h5>`;

    if (splitSong.toString() === blanksAndSuccesses.toString()) {
        winCounter++;
        alert("Winner!");

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

document.onkeyup = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        let guessedLetters = event.key.toLowerCase();

        letterCheck(guessedLetters);

        endOfRound();
    }
}


