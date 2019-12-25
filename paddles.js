//defines how much the paddles are moving when keys are pressed
var p1PadMove = 6;
var p2PadMove = 6;

//paddle object
function Paddle(x, y) {
        this.x = x;
        this.y = y;
        this.width = 15;
        this.height = 100;

        //draw paddles
        this.make = function() {
            fill(255);
            rect(this.x, this.y, this.width, this.height);
        }

        //controls to move left paddle
        this.movePlayer1Pad = function() {
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
        this.movePlayer2Pad = function() {
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
        this.stopPaddle1 = function() {
            
            //resets p1 paddle
            if (p1PadMove === 6) {
                
                p1PadMove = 0;
                
            }

            if (p1PadMove === -6) {
                
                p1PadMove = 0;
                
            } 
        }

        //stops paddle 2 movement when released (player 2)
        this.stopPaddle2 = function() {

            //resets p2 paddle
            if (p2PadMove === 6) {
                
                p2PadMove = 0;
                
            }

            if (p2PadMove === -6) {
                
                p2PadMove = 0;
                
            }
        }

        //bounce off player 1 paddle 
        this.ballPad1Collision = function() {

            if (xBallMove < 0 && yBall <= this.y + this.height && yBall >= this.y && xBall - (ballDiameter / 2) <= this.x + this.width && xBall - (ballDiameter / 2) >= this.x + this.width) {
                xBallMove *= -1;
                //console.log("ball position " + yBall + " " + xBall);
            } 
        }
        
        //bounce off player 2 paddle 
        this.ballPad2Collision = function() {
            if (xBallMove > 0 && yBall <= this.y + this.height && yBall >= this.y && xBall + (ballDiameter / 2) >= this.x && xBall + (ballDiameter / 2) <= this.x) {
                xBallMove *= -1;
            }
        }

        this.reset = function() {
            this.x = x;
            this.y = y;
        }
    }

//resets the paddle movement from 0 back to 5
function resetPadMovement() {
    p1PadMove = 6;
    p2PadMove = 6;
}

function resetPaddles() {
    player1Paddle.reset();
    player2Paddle.reset();
} 

//makes left and right paddle
var player1Paddle = new Paddle(25, height / 2 - 50);
var player2Paddle = new Paddle(width - 50, height / 2 - 50);

//draws paddle in sketch.js
function drawPaddles() {
    player1Paddle.make();
    player2Paddle.make();
    player1Paddle.ballPad1Collision();
    player2Paddle.ballPad2Collision();
}
