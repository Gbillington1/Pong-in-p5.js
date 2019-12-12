//x-cord for ball
var xBall = width / 2;
//y-cord for ball 
var yBall = height / 2;
//diameter of ball
var ballDiameter = 25;
//variables for moving ball (random)
function randomBallMovement(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num === -3 || num === -2 || num === -1 || num === 0 || num === 1 || num === 2 || num === 3) ? randomBallMovement(min, max) : num;
} 

var xBallMove = randomBallMovement(-5, 5);
var yBallMove = randomBallMovement(-5, 5);

//booleans for scoring 
p1Point = false;
p2Point = false;

//making the ball
function makeBall() {
    strokeWeight(2);
    fill(255);
    ellipse(xBall, yBall, ballDiameter, ballDiameter);
}

//resets the ball when a player scores
function resetBall() {
    xBall = width / 2;
    yBall = height / 2;
    p1Point = false;
    p2Point = false;
    gameActive = false;
}

//moving the ball
function moveBall() {
    //moving the ball (x) by 5 on every draw loop
    xBall += xBallMove;
    //moving the ball (y) by 5 on every draw loop
    yBall += yBallMove;
    //keeps ball in the canvas
    yBall = constrain(yBall, 0, height - ballDiameter/2);

    //bounces the ball off left wall
    if (xBall <= ballDiameter / 2) {
        scoreP1 ++;
        resetBall();
        resetPaddles();
    }

    //bounces ball of right wall
    if (xBall >= width - ballDiameter / 2) {
        scoreP2 ++;
        resetBall();
        resetPaddles();
    }

    //bounces ball off top and bottom
    if (yBall < ballDiameter / 2 || yBall > height - ballDiameter) {
        yBallMove *= -1;
    }
}    
