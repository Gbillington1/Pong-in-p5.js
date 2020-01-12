//speeds of each level
var easySpeed = [-4, 4];
var mediumSpeed = [-6, 6];
var hardSpeed = [-9, 9];
//says which level is active
var easy = false;
var medium = false;
var hard = false;
//says level hasn't been picked yet
var levelPicked = false;
//says button is under mouse
var isUnder = false;

function easyLevel() {
    xBallMove = random(easySpeed);
    yBallMove = random(easySpeed);
    p1PadMove = 6;
    p2PadMove = 6;
    easy = true;
}

function mediumLevel() {
    xBallMove = random(mediumSpeed);
    yBallMove = random(mediumSpeed);
    p1PadMove = 7;
    p2PadMove = 7;
    medium = true;
}

function hardLevel() {
    xBallMove = random(hardSpeed);
    yBallMove = random(hardSpeed);
    p1PadMove = 10;
    p2PadMove = 10;
    hard = true;
}

function Button(x, y, label) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 40;
    this.label = label;

    this.isUnderMouse = function(x, y) {
        return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
    }

    this.make = function() {
        rectMode(CORNER);
        stroke(169);
        strokeWeight(2);
        fill(0, 140, 186);
        rect(this.x, this.y, this.width, this.height);
        textSize(20);
        fill(255);
        noStroke();
        text(this.label, this.x + 50, this.y + 27);
        textSize(30);
        stroke(0, 140, 186);
        strokeWeight(3);
        text("Pick a level:", width / 2, 200);

        if (this.isUnderMouse(mouseX, mouseY)) {
            rectMode(CORNER);
            stroke(0, 140, 186);
            strokeWeight(2);
            rect(this.x, this.y, this.width, this.height);
            fill(0);
            textSize(20);
            fill(0, 140, 186);
            noStroke();
            text(this.label, this.x + 50, this.y + 27);
        }
    }
}

//creates buttons
var easyButton = new Button(230, 230, "Easy");
var mediumButton = new Button(350, 230, "Medium");
var hardButton = new Button(470, 230, "Hard");

//level to easy on click
function easyClick() {
    if (easyButton.isUnderMouse(mouseX, mouseY)) {
        isUnder = true;
        easyLevel();
        levelPicked = true;    
    }
}

//level to medium on click
function mediumClick() {
    if (mediumButton.isUnderMouse(mouseX, mouseY)) {
        isUnder = true;
        mediumLevel();
        levelPicked = true;
    }
}

//level to hard on click
function hardClick() {
    if (hardButton.isUnderMouse(mouseX, mouseY)) {
        isUnder = true;
        hardLevel();
        levelPicked = true;
    }
}

//draws button if the level hasn't been picked
function drawButtons() {
    if (!levelPicked) {
        easyButton.make();
        mediumButton.make();
        hardButton.make();
    }
}

//changes the level on button click and starts game
function changeLevel() {
    easyClick();
    mediumClick();
    hardClick();
    if (isUnder) {
        startButton();
    }
}

function resetLevelBool() {
    easy = false;
    medium = false;
    hard = false;
}
