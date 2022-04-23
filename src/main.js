const canvas = document.querySelector('canvas');
let mapSize = canvas.width;
const pincel = canvas.getContext('2d');
const size = 15;

let player = {
    x: 1,
    y: 1,
    color: "#FFE600",
    score: 0
}

let fruit = {
    x: 1,
    y: 1,
    color: "#009900"
}

setInterval(() => {
    if (player["score"] < 0) return gameOver();
    tick();
    render();
}, 1000/60);

document.onkeydown = event => {
    let keyCode = event.code;
    
    if ((keyCode === "ArrowUp" || keyCode === "KeyW") && player["y"] > 0) return player["y"]--;
    if ((keyCode === "ArrowLeft" || keyCode === "KeyA") && player["x"] > 0) return player["x"]--;
    if ((keyCode === "ArrowDown" || keyCode === "KeyS") && player["y"] * size < (mapSize - size)) return player["y"]++;
    if ((keyCode === "ArrowRight" || keyCode === "KeyD") && player["x"] * size < (mapSize - size)) return player["x"]++;
}

function randomInt(max) {
    return parseInt(Math.random() * max);
}

function tick() {
    if (player["x"] === fruit["x"] && player["y"] === fruit["y"]) {
        fruit["x"] = randomInt(mapSize / size);
        fruit["y"] = randomInt(mapSize / size);
        player["score"]++;
    }
}

function render() {
    canvas.width = mapSize;
    document.getElementById('points').innerHTML = player["score"];

    drawObject(fruit);
    drawObject(player);
}

function drawObject({x, y, color}) {
    x = x * size;
    y = y * size;
    pincel.fillStyle = color;
    pincel.fillRect(x, y, size, size);
}

function gameOver() {
    //Working Process
    player["score"] = 0
}