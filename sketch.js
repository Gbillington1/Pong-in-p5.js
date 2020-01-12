//width and height of canvas
var width = 800;
var height = 500;

//sets the "home screen" to static image
var gameActive = false;

function setup() {
    var canvas = createCanvas(800, 500);
    noStroke();
    canvas.parent("container");
    //3 second timer length
    resetTimer();
}

//draws 'home screen'  
function drawGame() {
    rectMode(CORNER);
    background(0, 0, 0);
    drawScore();
    drawPaddles();
    halfLine();
    makeBall();
    drawButtons();
    if (mouseIsPressed) {
        if (levelPicked === false) {
            changeLevel();
            isUnder = false;
        }
    }
    if (countDown === true) {
        startGame();
    }
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
    noStroke();
    if (gameActive === false) {

        drawGame();

    } else if (gameActive === true) {

        playGame();

    }
}

function keyPressed() {

    resetPadMovement();

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
