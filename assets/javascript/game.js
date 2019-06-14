//list the words that user will be guessing

function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i + 1)) != -1) {
        indexes.push(i);
    }
    return indexes;
}

var songs = ["IWantYou", "Blackbird", "ComeTogether", "Something", "PennyLane", "InMyLife", "AHardDaysNight"];
var underScr = ['_', '_', '_']
var is = getAllIndexes(songs, '')
songs.forEach(function (i) {
    songs[i] = underScr[i]
})

// if (i !== -1) {
//     underScr[i] = songs[i]
// }



// songs.forEach(function (e) {
//     console.log(e)

// })

// i want to gran a string from my array and i want it to be random

var rdmSong = songs[Math.floor(Math.random() * songs.length)];

console.log(rdmSong)

//i want to split that string from the array

var splitSong = rdmSong.split('')

console.log(splitSong)

//i need to display the new array into blankspaces



