//x-cord for ball
var xBall = width / 2;
//y-cord for ball 
var yBall = height / 2;
//diameter of ball
var ballDiameter = 20;
var ballRadius = (ballDiameter / 2);

//defines for later reassignment
var xBallMove;
var yBallMove;

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
    gameActive = false;
    resetTimer();
}

//moving the ball
function moveBall() {
    //moving the ball (x) by 5 on every draw loop
    xBall += xBallMove;
    //moving the ball (y) by 5 on every draw loop
    yBall += yBallMove;

    //scores point on left wall
    if (xBall <= 0) {
        scoreP1++;
        resetBall();
        resetPaddles();
        resetTimer();
    }

    //scores point on right wall
    if (xBall >= width) {
        scoreP2++;
        resetBall();
        resetPaddles();
        
    }

    //bounces ball off top and bottom
    if (yBall < ballRadius || yBall > height - ballDiameter) {
        yBallMove *= -1;
    }
}    
