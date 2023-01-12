let canvas;
let world;
let keyboard = new Keyboard();
let intervalIds = [];

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}

function stopGame() {
    intervalIds.forEach(clearInterval);
}


window.addEventListener("keydown", (e) => {
    if (e.keyCode == "38") {
        keyboard.UP = true;
    }

    if (e.keyCode == "40") {
        keyboard.DOWN = true;
    }

    if (e.keyCode == "37") {
        keyboard.LEFT = true;
    }

    if (e.keyCode == "39") {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == "32") {
        keyboard.SPACE = true;
    }

    if (e.code == "KeyD") {
        keyboard.D = true;
    }

    if (e.code == "KeyQ") {
        keyboard.Q = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == "38") {
        keyboard.UP = false;
    }

    if (e.keyCode == "40") {
        keyboard.DOWN = false;
    }

    if (e.keyCode == "37") {
        keyboard.LEFT = false;
    }

    if (e.keyCode == "39") {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == "32") {
        keyboard.SPACE = false;
    }

    if (e.code == "KeyD") {
        keyboard.D = false;
    }

    if (e.code == "KeyQ") {
        keyboard.Q = false;
    }
});
