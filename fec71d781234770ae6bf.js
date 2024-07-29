import {Player} from './Player.js';
import {Pipe} from './Pipe.js';
import _fon from '../img/fon2.png'
import _playerIco from '../img/pngwing.png';
import _playerKill from '../img/pngwing_kill.png';
import _pipeIco from '../img/pipe.png';
import _coin from '../audio/coin.mp3'
import _hit from '../audio/hit.mp3'
import _swing from '../audio/swing.mp3'

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const startX = 110;
const startY = 330;
const fon = new Image();
const pipeIco = new Image();
const playerKill = new Image();
const coin = new Audio(_coin);
const hit = new Audio(_hit);
const swing = new Audio(_swing);


let playerIco;
let player;
let timer;
let speed = 1;
let stepPlayer = 0;
let stepPipe = 0;
let imgX = 0;
let score = 0;
let pipes = [];

newGame();

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowUp') {
        swing.currentTime = 0.0;
        swing.play();
        stepPlayer = 0;
    }
    if (e.key === ' ') {
        clearInterval(timer);
        newGame();
    }
});
document.addEventListener('touchstart', (event) => {
    swing.currentTime = 0.0;
    swing.play();
    stepPlayer = 0;
})

function game() {
    printFon();
    // printSetka();
    setPipes();
    printPlayer();
    printScore();
}

function newGame() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    player = new Player(startX, startY, 40);
    playerIco = new Image();
    fon.src = _fon;
    playerIco.src = _playerIco;
    playerKill.src = _playerKill;
    pipeIco.src = _pipeIco;
    player.x = startX;
    player.y = startY;
    score = 0;
    speed = 1;
    stepPlayer = 0;
    stepPipe = 0;
    imgX = 0;
    pipes = [];
    timer = setInterval(game, speed);
}

function stopGame() {
    playerIco = playerKill;
    hit.currentTime = 0.4;
    hit.volume = 0.5;
    hit.play();
    clearInterval(timer);
}

function printFon() {
    ctx.drawImage(fon, 0 - imgX, 0, 900, 700);
    imgX = imgX + speed;
    if (imgX > 320) imgX = 0;
}

function printScore() {
    ctx.font = 'bold 48px serif';
    ctx.strokeText(score, 237, 80);
}

function printPlayer() {
    player.y = player.y + ((-60 + stepPlayer) / 15);
    ctx.save();
    ctx.translate(player.x + 20, player.y + 20);
    ctx.rotate(((-90 + stepPlayer) * Math.PI) / 180);
    ctx.drawImage(playerIco, -32, -23, 62, 47);
    ctx.restore();
    // ctx.fillStyle = 'rgba(255,0,0,0.6)';
    // ctx.fillRect(player.x, player.y, player.size, player.size);
    stepPlayer++;
}

function setPipes() {
    if (stepPipe > 280) {
        let up = (Math.random() * 35 + 5) * 10; // 50-400px
        let down = up + 200;
        let pipe = new Pipe(600, 80, up, down);
        pipes.push(pipe);
        stepPipe = 0;
    }
    if (player.y > 600) stopGame();
    pipes.forEach(pipe => printPipes(pipe));
    pipes = pipes.filter(pipe => pipe.x + pipe.width > 0);
    let pipeSuc = pipes.filter(pipe => {
        let middle = pipe.x + (pipe.width / 2) - (player.size / 2);
        return middle < player.x && middle >= player.x - 1;
    }).length;
    if (pipeSuc > 0) {
        score++;
        coin.pause();
        coin.currentTime = 0.55;
        coin.play();
    }
    stepPipe++;
}

function printPipes(pipe) {
    pipe.x = pipe.x - speed;
    ctx.save();
    ctx.translate(pipe.x, pipe.y);
    ctx.rotate((180 * Math.PI) / 180);
    ctx.drawImage(pipeIco, -pipe.x - pipe.width - 4, -pipe.up - 3, pipe.width + 7, 600);
    ctx.restore();
    ctx.drawImage(pipeIco, pipe.x - 4, pipe.down - 3, pipe.width + 7, 600);

    // ctx.fillStyle = 'rgba(255,0,0,0.6)';
    // ctx.fillRect(pipe.x, 0, pipe.width, pipe.up);
    // ctx.fillRect(pipe.x, pipe.down, pipe.width, 640 - pipe.down);

    if ((player.y < pipe.up || player.y + player.size > pipe.down)
        && ((player.x + player.size) > pipe.x && (player.x) < pipe.x + pipe.width)
    ) {
        stopGame(timer);
    }
}

function printSetka() {
    for (let i = 1; i < 70; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0,0,0,0.3)';
        ctx.moveTo(0, 10 * i);
        ctx.lineTo(500, 10 * i);
        ctx.stroke();
    }
    for (let i = 1; i < 50; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0,0,0,0.3)';
        ctx.moveTo(10 * i, 0);
        ctx.lineTo(10 * i, 700);
        ctx.stroke();
    }

    ctx.strokeStyle = 'rgba(0,0,0,0.3)';
    ctx.beginPath();
    ctx.moveTo(250, 0);
    ctx.lineTo(250, 700);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, 350);
    ctx.lineTo(500, 350);
    ctx.stroke();
}
