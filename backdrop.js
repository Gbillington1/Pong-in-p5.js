//draws the dotted line in middle
function halfLine() {
    for (var i = 0; i < 20; i++) {
        fill(75);
        rectMode(CENTER);
        rect(width / 2, i * 25 + 10, 5, 10);
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
