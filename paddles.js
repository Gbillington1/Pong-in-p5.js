//defines how much the paddles are moving when keys are pressed
var p1PadMove;
var p2PadMove;

//paddle object
function Paddle(x, y) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 76;

    //draw paddles
    this.make = function () {
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    }

    //controls to move left paddle
    this.movePlayer1Pad = function () {
        //if "w" pressed
        if (keyIsDown(87) && gameActive === true) {
            this.y -= p1PadMove;
            //if "s" pressed
        } else if (keyIsDown(83) && gameActive === true) {
            this.y += p1PadMove;
        }
        //constrains paddle
        this.y = constrain(this.y, 0, height - this.height);
    }

    //controls to move right paddle
    this.movePlayer2Pad = function () {
        //if up arrow pressed
        if (keyIsDown(38) && gameActive === true) {
            this.y -= p2PadMove;
            //if down arrow pressed
        } else if (keyIsDown(40) && gameActive === true) {
            this.y += p2PadMove;
        }
        //constrains paddle
        this.y = constrain(this.y, 0, height - this.height);
    }

    //stops paddle 1 movement when released (player 1)
    this.stopPaddle1 = function () {

        //resets p1 paddle
        if (p1PadMove === 6 || p1PadMove === 7 || p1PadMove === 10) {

            p1PadMove = 0;

        }

        if (p1PadMove === -6 || p1PadMove === -7 || p1PadMove === -10) {

            p1PadMove = 0;

        }
    }

    //stops paddle 2 movement when released (player 2)
    this.stopPaddle2 = function () {

        //resets p2 paddle
        if (p2PadMove === 6 || p2PadMove === 7 || p2PadMove === 10) {

            p2PadMove = 0;

        }

        if (p2PadMove === -6 || p2PadMove === -7 || p2PadMove === -10) {

            p2PadMove = 0;

        }
    }

    //bounce off player 1 paddle 
    this.ballPad1Collision = function () {

        //detects right face collision
        if (xBallMove < 0 && yBall - (ballRadius / 2) <= this.y + this.height && yBall + (ballRadius / 2) >= this.y && xBall - ballRadius <= this.x + this.width && xBall - ballRadius >= this.x) {

            xBallMove *= -1;

        }

        //detects top of paddle collision
        if (yBallMove > 0 && xBall - ballRadius < this.x + this.width && yBall + ballRadius >= this.y && yBall + ballRadius <= this.y) {

            yBallMove *= -1;

        }

        //detects bottom of paddle collision
        if (yBallMove < 0 && xBall - ballRadius < this.x + this.width && yBall - ballRadius <= this.y + this.height && yBall - ballRadius >= this.y + this.height) {

            yBallMove *= -1;

        }
    }

    //bounce off player 2 paddle 
    this.ballPad2Collision = function () {

        if (xBallMove > 0 && yBall - (ballRadius / 2) <= this.y + this.height && yBall + (ballRadius / 2) >= this.y && xBall + ballRadius >= this.x && xBall + ballRadius <= this.x + this.width) {

            xBallMove *= -1;

        }

        //detects top of paddle collision
        if (yBallMove > 0 && xBall + ballRadius > this.x && yBall + ballRadius <= this.y && yBall + ballRadius >= this.y) {

            yBallMove *= -1;

        }

        //detects bottom of paddle collision
        if (yBallMove < 0 && xBall + ballRadius > this.x && yBall - ballRadius <= this.y + this.height && yBall - ballRadius >= this.y + this.height) {

            yBallMove *= -1;

        }

    }

    this.reset = function () {
        this.x = x;
        this.y = y;
    }
}

//resets the paddle movement from 0 back to 6
function resetPadMovement() {
    if (easy) {
        p1PadMove = 6;
        p2PadMove = 6;
    }

    if (medium) {
        p1PadMove = 7;
        p2PadMove = 7;
    }

    if (hard) {
        p1PadMove = 10;
        p2PadMove = 10;
    }
}

function resetPaddles() {
    player1Paddle.reset();
    player2Paddle.reset();
}

//makes left and right paddle
var player1Paddle = new Paddle(25, height / 2 - 38);
var player2Paddle = new Paddle(width - 35, height / 2 - 38);

//draws paddle in sketch.js
function drawPaddles() {
    console.log(p1PadMove);
    player1Paddle.make();
    player2Paddle.make();
    player1Paddle.ballPad1Collision();
    player2Paddle.ballPad2Collision();
}
