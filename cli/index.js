
var objectStrength = {
    rock: 2,
    scissors: 1,
    paper: 0
}

var objectId = ['paper', 'scissors', 'rock']


function playerVscomputer(player1Choice) {
    return gameEngine(player1Choice, objectId[Math.floor(Math.random() * Math.floor(3))])
}

function computerVscomputer(player1Choice) {
    return gameEngine(objectId[Math.floor(Math.random() * Math.floor(3))], objectId[Math.floor(Math.random() * Math.floor(3))])
}


function gameEngine(player1Choice, player2Choice) {

    console.log('\nPlayer 1 has selected', player1Choice)
    console.log('Player 2 has selected', player2Choice)

    if (objectStrength[player1Choice] > objectStrength[player2Choice]) {
        console.log('\nPlayer 1 won')
    } else if (objectStrength[player1Choice] == objectStrength[player2Choice]) {
        console.log('\nDraw')
    } else if ((objectStrength[player1Choice] < objectStrength[player2Choice])) {
        console.log('\nPlayer 2 won')
    } else {
        console.log('\nOne of the player selected something not from the list : [rock,paper,scissors]')
    }

}


if (process.argv[2] == "-playerVscomputer") {
    playerVscomputer(process.argv[3])
}

if (process.argv[2] == "-computerVscomputer") {
    computerVscomputer()
}


