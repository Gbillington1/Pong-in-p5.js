//declars gloablly
var timerLength;
var resetLength;
//1 second timer
var oneSecTimer;
//starts timer display at 3
let timerDisplay = 3;
//says that the count down should't start 
var countDown = false;
//says that the game isn't paused
var isPaused = false;
//says that the game has not started
var isStarted = false;

//draws the dotted line in middle
function halfLine() {
    for (var i = 0; i < 17; i++) {
        fill(75);
        rectMode(CENTER);
        rect(width / 2, i * 30 + 10, 5, 10);
    }
}

//sets score to default
var scoreP1 = 0;
var scoreP2 = 0;

//draws the score
function drawScore() {
    //draws the player score
    textSize(60);
    fill(170);
    textAlign(CENTER);
    text(scoreP1, width / 2 - 55, 50);
    text(scoreP2, width / 2 + 50, 50);
}

//resets timer variables
function resetTimer() {
    timerLength = 3000;
    oneSecTimer = 1000;
    resetLength = millis();
    resetDisplayLength = millis();
    timerDisplay = 3;
}

//starts the game when the start button is clicked
function startButton() {
    resetTimer();
    isStarted = true;
    countDown = true;
}


//start game with timer
function startGame() {
    if (millis() - timerLength > resetLength && gameActive === false && isPaused === false && isStarted === true) {
        gameActive = true;
    }

    textSize(80);
    stroke(0, 140, 186);
    strokeWeight(7);
    text(timerDisplay, width / 2, (height / 2) - 28);

    if (millis() - oneSecTimer > resetDisplayLength && timerDisplay > 0 && gameActive === false && isPaused === false && isStarted === true) {

        timerDisplay--;
        resetDisplayLength = millis();

    }

    if (timerDisplay === 0) {

        countDown = false;

    }
}

//pauses / plays game when clicked
function pauseGame() {
    //allows the game to be paused / played when the ball is not in starting position
    if (!(xBall === width / 2 && yBall === height / 2)) {
        if (gameActive === true) {
            gameActive = false;
            isPaused = true;
        } else if (gameActive === false) {
            gameActive = true;
            isPaused = false;
        }
    }
}

//resets game when clicked
function resetGame() {
    resetBall();
    resetPaddles();
    startGame();
    isPaused = false;
    isStarted = false;
    scoreP1 = 0;
    scoreP2 = 0;
}
