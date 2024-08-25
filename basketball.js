let timerRunning = false;
let timerInterval;
let timeRemaining = 600;
let timerDisplay = document.getElementById("Timer_box");
let homeScoreDisplay = document.getElementById("home_score");
let guestScoreDisplay = document.getElementById("guest_score");
let periodDisplay = document.getElementById("period_box");
let homeScore = 0;
let guestScore = 0;
let period = 1;

function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timerInterval = setInterval(() => {
            timeRemaining -= 1;
            let minutes = Math.floor(timeRemaining / 60);
            let seconds = timeRemaining % 60;
            timerDisplay.innerHTML = `${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            if (timeRemaining <= 0) {
                stopTimer();
                period += 1;
                if (period > 4) {
                    alert("Game Over!");
                } else {
                    periodDisplay.innerHTML = period;
                    timeRemaining = 600;
                    timerDisplay.innerHTML = "10:00";
                }
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

function resetTimer() {
    stopTimer();
    timeRemaining = 600;
    timerDisplay.innerHTML = "10:00";
}

function newGame() {
    resetTimer();
    homeScore = 0;
    guestScore = 0;
    period = 1;
    homeScoreDisplay.innerHTML = "0";
    guestScoreDisplay.innerHTML = "0";
    periodDisplay.innerHTML = "1";
}

function home_plusone() {
    homeScore += 1;
    homeScoreDisplay.innerHTML = homeScore;
}

function home_plustwo() {
    homeScore += 2;
    homeScoreDisplay.innerHTML = homeScore;
}

function home_plusthree() {
    homeScore += 3;
    homeScoreDisplay.innerHTML = homeScore;
}

function guest_plusone() {
    guestScore += 1;
    guestScoreDisplay.innerHTML = guestScore;
}

function guest_plustwo() {
    guestScore += 2;
    guestScoreDisplay.innerHTML = guestScore;
}

function guest_plusthree() {
    guestScore += 3;
    guestScoreDisplay.innerHTML = guestScore;
}
