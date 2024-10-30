let currentScene = start;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    textAlign(CENTER);
    rectMode(CENTER);
}

function draw() {
    background(200);
    textSize(40);
    text(currentScene.text, width / 2, 100, 600);
    textSize(30);
    text(currentScene.choiceA, (width / 2) - 200, 600, 300);
    text(currentScene.choiceB, (width / 2) + 200, 600, 300);
    textSize(20);
    if (currentScene == start) {
        text("press any key", width / 2, 300, 300);
    } else if (currentScene == walk || currentScene == openWindow || currentScene == stove || currentScene == run) {
        text("the end", width / 2, 600, 300);
    } else {
        text("use number keys to choose your next move", width / 2, 800, 600);
    }
}

function keyPressed() {
    currentScene.choice();
}