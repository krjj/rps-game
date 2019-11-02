var objectStrength = {
    rock: 2,
    scissors: 1,
    paper: 0
}

var objectId = ['paper', 'scissors', 'rock']

var player1_choice = ''
var player2_choice = ''

const playmode_div = document.getElementById("play-mode-section")
const game_div = document.getElementById("game-section")
const game2_div = document.getElementById("game-section-2")

const mtpchoices_div = document.getElementById("mtp-choices")
const mtpresult_div = document.getElementById("mtp-result")

const switchmode_button = document.getElementById("switch-mode")
const switchmode2_button = document.getElementById("switch-mode-2")
const playervscomputer_button = document.getElementById("pvc")
const playervsplayer_button = document.getElementById("pvp")

const rock_button = document.getElementById("rock")
const paper_button = document.getElementById("paper")
const scissors_button = document.getElementById("scissors")

const mtp1rock_button = document.getElementById("mtp1rock")
const mpt1paper_button = document.getElementById("mtp1paper")
const mtp1scissors_button = document.getElementById("mtp1scissors")

const mtp2rock_button = document.getElementById("mtp2rock")
const mtp2paper_button = document.getElementById("mtp2paper")
const mtp2scissors_button = document.getElementById("mtp2scissors")

const mpt1selected_text = document.getElementById("mtp1selected")
const mtp2selected_text = document.getElementById("mtp2selected")

const gamebox_h3 = document.getElementById("game-box-title")

const choice_div = document.getElementById("choice-menu")
const result_div = document.getElementById("result")

const result_text = document.getElementById("result-text")
const playagain_button = document.getElementById("play-again")

const mtpresult_text = document.getElementById("mtp-result-text")
const mtpplayagain_button = document.getElementById("mtp-play-again")

/* Event Handlers */

playervscomputer_button.onclick = function (e) {
    playmode_div.style.display = "none";
    game_div.style.display = "block";
}

playervsplayer_button.onclick = function (e) {
    playmode_div.style.display = "none";
    game2_div.style.display = "block";
}

switchmode_button.onclick = function (e) {
    playmode_div.style.display = "block";
    game_div.style.display = "none";
    game2_div.style.display = "none";
}

switchmode2_button.onclick = function (e) {
    playmode_div.style.display = "block";
    game2_div.style.display = "none";
}

rock_button.onclick = function (e) {
    playerVscomputer('rock')
}

paper_button.onclick = function (e) {
    playerVscomputer('paper')
}

scissors_button.onclick = function (e) {
    playerVscomputer('scissors')
}

playagain_button.onclick = function (e) {
    gamebox_h3.innerText = "Make your choice"
    choice_div.style.display = "block";
    result_div.style.display = "none";
}

mtp1rock_button.onclick = function (e) {
    player1_choice = "rock"
    playerVsPlayer()
}

mpt1paper_button.onclick = function (e) {
    player1_choice = "paper"
    playerVsPlayer()
}

mtp1scissors_button.onclick = function (e) {
    player1_choice = "scissors"
    playerVsPlayer()
}

mtp2rock_button.onclick = function (e) {

    player2_choice = "rock"
    playerVsPlayer()
}

mtp2paper_button.onclick = function (e) {
    player2_choice = "paper"
    playerVsPlayer()
}

mtp2scissors_button.onclick = function (e) {
    player2_choice = "scissors"
    playerVsPlayer()
}

mtpplayagain_button.onclick = function (e) {
    mtpchoices_div.style.display = "flex";
    mtpresult_div.style.display = "none";
    player1_choice = ""
    player2_choice = ""
    mpt1selected_text.style.display = "none"
    mtp2selected_text.style.display = "none"
}

/* End of event handler section */


/* Utility functions */

// player to computer mode handler
function playerVscomputer(player1Choice) {

    var result = gameEngine(player1Choice, objectId[Math.floor(Math.random() * Math.floor(3))])

    if (result == 1) {
        afterWon()
    }

    if (result == 2) {
        afterLose()
    }

    if (result == 0) {
        afterDraw()
    }

}

// player to player mode handler
function playerVsPlayer() {

    if (player1_choice != '') {
        mpt1selected_text.style.display = "block"
    } else {
        mpt1selected_text.style.display = "none"
    }

    if (player2_choice != '') {
        mtp2selected_text.style.display = "block"
    } else {
        mtp2selected_text.style.display = "none"
    }

    if (player1_choice != '' && player2_choice != '') {

        var result = gameEngine(player1_choice, player2_choice)


        mtpchoices_div.style.display = "none";
        mtpresult_div.style.display = "block";

        if (result == 1) {
            mtpresult_text.className = "nes-text is-success";
            mtpresult_text.innerText = "Player 1 has won. " + player1_choice.toUpperCase() + " defeats " + player2_choice.toUpperCase() + "."
        }

        if (result == 2) {
            mtpresult_text.className = "nes-text is-success";
            mtpresult_text.innerText = "Player 2 has won. " + player2_choice.toUpperCase() + " defeats " + player1_choice.toUpperCase() + "."
        }

        if (result == 0) {
            mtpresult_text.className = "nes-text is-primary";
            mtpresult_text.innerText = "Nobody wins. Both players have selected " + player1_choice.toUpperCase() + "."
        }
    }
}

function afterWon() {
    gamebox_h3.innerText = "Result"
    choice_div.style.display = "none";
    result_div.style.display = "block";
    result_text.innerText = "You have Won the game!";
    result_text.className = "nes-text is-success"

}

function afterLose() {
    gamebox_h3.innerText = "Result"
    choice_div.style.display = "none";
    result_div.style.display = "block";
    result_text.innerText = "You have lost the game!";
    result_text.className = "nes-text is-error";
}

function afterDraw() {
    gamebox_h3.innerText = "Result"
    choice_div.style.display = "none";
    result_div.style.display = "block";
    result_text.innerText = "Nobody wins. Draw.";
    result_text.className = "nes-text is-primary";
}


function gameEngine(player1Choice, player2Choice) {

    if (objectStrength[player1Choice] > objectStrength[player2Choice]) {
        return 1
    } else if (objectStrength[player1Choice] == objectStrength[player2Choice]) {
        return 0
    } else if ((objectStrength[player1Choice] < objectStrength[player2Choice])) {
        return 2
    } else {
        return -1
    }

}

/* End of utility functions */