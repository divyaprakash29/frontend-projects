let HomeScore = 0
let HomeScorecard = document.getElementById("homescore")

let GuestScore = 0
let GuestScorecard = document.getElementById("guestscore")

function Homeone(){
    HomeScore += 1 
    HomeScorecard.textContent = HomeScore
}

function Hometwo(){
    HomeScore += 2
    HomeScorecard.textContent = HomeScore
}

function Homethree(){
    HomeScore += 3
    HomeScorecard.textContent = HomeScore
}

function Guestone(){
    GuestScore += 1 
    GuestScorecard.textContent = GuestScore
}

function Guesttwo(){
    GuestScore += 2
    GuestScorecard.textContent = GuestScore
}

function Guestthree(){
    GuestScore += 3
    GuestScorecard.textContent = GuestScore
}

