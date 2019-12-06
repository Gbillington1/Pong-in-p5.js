//draws the dotted line in middle
function halfLine() {
    for (var i = 0; i < 13; i++) {
        fill(75);
        rectMode(CENTER);
        rect(width / 2, i * 40 + 10, 15, 20);
    }
}

//sets score to default
var scoreP1 = 0;
var scoreP2 = 0;

//scoring functions
function score() {
    //adds 1 point every time p1Point or p2Point is true, then resets ball
    //player 1 scoring
    if (p1Point === true) {
        scoreP1 ++;
        resetBall();
        resetPaddles();
    } 
    
    //player 2 scoring
    if (p2Point === true) {
        scoreP2 ++;
        resetBall();
        resetPaddles();
    }
}

//draws the score
function drawScore() {
    
    score();

    //draws the player score
    textSize(60);
    fill(170);
    text(scoreP1, width / 2 - 65, 50);
    text(scoreP2, width / 2 + 35, 50);
}