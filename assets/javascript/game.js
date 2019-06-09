//list the words that user will be guessing

var songs = ["IWantYou", "Blackbird", "ComeTogether", "Something", "PennyLane", "InMyLife", "AHardDaysNight"];
songs.forEach(function (e) {
    console.log(e)

})

// i want to gran a string from my array and i want it to be random

var rdmSong = songs[Math.floor(Math.random()*songs.length)];

console.log(rdmSong)

//i want to split that string from the array

var splitSong = rdmSong.split('')

console.log(splitSong)

//i need to display the new array into blankspaces



