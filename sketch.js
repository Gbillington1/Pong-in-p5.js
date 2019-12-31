//width and height of canvas
var width = 800;
var height = 500;

//declars gloablly
var timerLength;
var resetLength;

//resets timer variables
function resetTimer() {
    timerLength = 3000;
    resetLength = millis();
}

function setup() {
    var canvas = createCanvas(800, 500);
    noStroke();
    canvas.parent("container");
    //3 second timer length
    resetTimer();
}

//says that the game has not started
//this value needs to change to true on click of the html button
var isStarted = false;
//sets the "home screen" to static image
var gameActive = false;
//says that the game isn't paused
var isPaused = false;

//if space bar is pressed -> start game
function startGame() {
    if (millis() - timerLength > resetLength && gameActive === false && isPaused === false && isStarted === true) {
        gameActive = true;
    }
}

//pauses / plays game when p key is pressed
function pauseGame() {
    //allows the game to be paused / played when the ball is not in starting position
    if (!(xBall === width/2 && yBall === height/2)) {
        if (gameActive === true && key === "P" || gameActive === true && key === "p") {
            gameActive = false;
            isPaused = true;
        } else if (gameActive === false && key === "P" || gameActive ===false && key === "p") {
            gameActive = true;
            isPaused = false;
        }
    }
}

//resets game when r key is pressed
function resetGame() {
    if (key === "R" || key === "r") {
        resetBall();
        resetPaddles();
        startGame();
        isPaused = false;
    }
}

//draws 'home screen'  
function drawGame() {
    rectMode(CORNER);
    background(0, 0, 0);
    drawScore();
    drawPaddles();
    halfLine();
    makeBall();
    startGame();
}

//game mechanics
function playGame() {
    rectMode(CORNER);
    background(0, 0, 0);
	drawScore();
    player1Paddle.movePlayer1Pad();
    player2Paddle.movePlayer2Pad();
    drawPaddles();
    halfLine();
    makeBall();
    moveBall();
}

function draw() {
    if (gameActive === false) {

        drawGame();

    } else if (gameActive === true) {

        playGame();

    }
}

function keyPressed() {

    resetPadMovement();

    pauseGame();
    
    resetGame();

}

function keyReleased() {
    //only stop p1 paddle if the p1 controls are released
    if (key === "W" || key === "S") {
        
        player1Paddle.stopPaddle1();
        
        //only stop p2 paddle if the p2 controls are released
    } else if (keyCode === 38 || keyCode === 40) {
        
        player2Paddle.stopPaddle2();
        
    }
}
