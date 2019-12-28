//width and height of canvas
var width = 800;
var height = 500

//says that all collisions are FALSE
var hit = false;

function setup() {
    var canvas = createCanvas(800, 500);
    noStroke();
    canvas.parent("container");
}

//sets the "home screen" to static image
var gameActive = false;

//if space bar is pressed -> start game
function startGameButton() {
    if (key === " " && gameActive === false) {
        gameActive = true;
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
    startGameButton();
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
