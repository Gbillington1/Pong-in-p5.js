//width and height of canvas
var width = 800;
var height = 500

function setup() {
    createCanvas(800, 500);
    noStroke();
}

//sets the "home screen" to static image
var gameActive = false;

//if space bar is pressed -> start game
function startGameButton() {
    if (key === " " && gameActive === false) {
        gameActive = true;
        xBallMove = randomBallMovement(-7, 7);
        yBallMove = randomBallMovement(-7, 7);
    }
}

//draws 'home screen'  
function drawGame() {
    rectMode(CORNER);
    background(0, 0, 0);
    drawPaddles();
    halfLine();
    makeBall();
    drawScore();
}

//game mechanics
function playGame() {
    rectMode(CORNER);
    background(0, 0, 0);
    player1Paddle.movePlayer1Pad();
    player2Paddle.movePlayer2Pad();
    drawPaddles();
    halfLine();
    makeBall();
    moveBall();
    drawScore();
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
    startGameButton();
}

function keyReleased() {
    player1Paddle.stopPaddle();
    player2Paddle.stopPaddle();
}