const canvas = document.querySelector('canvas');
const pincel = canvas.getContext('2d');

let size = 20;
let timeInterval = 20;

let playerX = 1;
let playerY = 1;
let playerColor = "#FFE600";
let playerScore = 0

let fruitX = 3;
let fruitY = 3;
let fruitColor = "#009900";

// Movimentação
document.onkeydown = event => {
    if (event.code === "ArrowUp" || event.code === "KeyW") {move('up')} else
    if (event.code === "ArrowDown" || event.code === "KeyS") {move('down')} else
    if (event.code === "ArrowLeft" || event.code === "KeyA") {move('left')} else
    if (event.code === "ArrowRight" || event.code === "KeyD") {move('right')}
}

function move(event) {
    if (event == 'up' && playerY > 0) {playerY--}
    if (event == 'down' && playerY * size < (canvas.width - size)) {playerY++}
    if (event == 'left' && playerX > 0) {playerX--}
    if (event == 'right' && playerX * size < (canvas.width - size)) {playerX++}
}

// Desenhos
function drawObject(x, y, color) {
    x = x * size;
    y = y * size;
    pincel.fillStyle = color;
    pincel.fillRect(x, y, size, size);
}

function randomFruit() {
    fruitX = randomInt(canvas.width / size);
    fruitY = randomInt(canvas.width / size);
}
randomFruit()

setInterval(() => {
    if (playerX == fruitX && playerY == fruitY) {
        randomFruit();
        playerScore++
    }

    canvas.width = canvas.width;
    document.getElementById('points').innerHTML = playerScore
    drawObject(fruitX, fruitY, fruitColor);
    drawObject(playerX, playerY, playerColor);
}, timeInterval)

function randomInt(max) {
    return parseInt(Math.random() * max)
}