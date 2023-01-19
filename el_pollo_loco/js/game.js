let canvas;
let world;
let keyboard = new Keyboard();
let intervalIds = [];

function startGame() {
    initLevel();
    init();
}

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    document.getElementById('start-screen').classList.add('d-none');
    buttons.classList.add('d-none');
    ingameButtons.classList.remove('d-none');
}

function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}

function stopGame() {
    intervalIds.forEach(clearInterval);
}


function showStory() {
    document.getElementById('story').classList.remove('d-none');
    document.getElementById('openStory').classList.remove('d-none');
    document.getElementById('lights-out').classList.remove('d-none');
}

function closeStory() {
    document.getElementById('story').classList.add('d-none');
    document.getElementById('openStory').classList.add('d-none');
    document.getElementById('lights-out').classList.add('d-none');

}

function showControls() {
    document.getElementById('controls').classList.remove('d-none');
    document.getElementById('openControls').classList.remove('d-none');
    document.getElementById('lights-out2').classList.remove('d-none');
}

function closeControls() {
    document.getElementById('controls').classList.add('d-none');
    document.getElementById('openControls').classList.add('d-none');
    document.getElementById('lights-out2').classList.add('d-none');
}

function muteSound() {
    world.bg_music.pause();
    document.getElementById('background-sound').innerHTML = `<img onclick="playSound()" src="img/no_sound.png">`;
}

function playSound() {
    world.bg_music.play();
    document.getElementById('background-sound').innerHTML = `<img onclick="muteSound()" src="img/play_sound.png">`;
}

function toggleFullscreen() {
    this.canvas.requestFullscreen();
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
