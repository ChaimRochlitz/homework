import './css/index.css';
import snakehead from '../images/snakehead.png';
import redapple from '../images/redapple.png';

const CELL_SIZE = 64;

const canvas = document.querySelector('#theCanvas');
function resizeCanvas() {
    canvas.width = (window.innerWidth - 2) - ((window.innerWidth - 2) % CELL_SIZE);
    canvas.height = (window.innerHeight - 2) - ((window.innerHeight - 2) % CELL_SIZE);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const context = canvas.getContext('2d');

const crashSound = document.querySelector('#crash');
const crunchSound = document.querySelector('#crunch');

let gameOver = false;
let speed = 500;
let score = 0;

class Snake {
    constructor() {
        this.segments = [{ x: 0, y: 0 }];
        this.draw();
    }

    draw() {
        context.drawImage(snakeHead, this.segments[0].x, this.segments[0].y);
        for (let i = 1; i < this.segments.length; i++) {
            context.fillStyle = '#5D951D';
            context.fillRect(this.segments[i].x, this.segments[i].y, CELL_SIZE, CELL_SIZE);
        }
    }

    move() {
        let head = this.segments[0];
        let pieceFormerlyKnownAsTail = this.segments.pop();
        let tailX = pieceFormerlyKnownAsTail.x;
        let tailY = pieceFormerlyKnownAsTail.y;
        let x = head.x;
        let y = head.y;
        switch (direction) {
            case 'ArrowUp':
                y -= CELL_SIZE;
                break;
            case 'ArrowRight':
                x += CELL_SIZE;
                break;
            case 'ArrowDown':
                y += CELL_SIZE;
                break;
            case 'ArrowLeft':
                x -= CELL_SIZE;
                break;
        }

        if (x < 0 || x > canvas.width - CELL_SIZE
            || y < 0 || y > canvas.height - CELL_SIZE) {
            gameOver = true;
        }

        if (this.isOnTopOff(x, y, 4)) {
            gameOver = true;
        }

        if (!gameOver) {
            pieceFormerlyKnownAsTail.x = x;
            pieceFormerlyKnownAsTail.y = y;
            this.segments.unshift(pieceFormerlyKnownAsTail);

            if (head.x === apple.x && head.y === apple.y) {
                this.segments.push({ x: tailX, y: tailY });
                score++;
                speed = speed - (speed * 0.10);
                crunchSound.currentTime = 0;
                crunchSound.play();
                apple.move();
            }
        } else {
            this.segments.push(pieceFormerlyKnownAsTail);
        }

        this.draw();
    }

    isOnTopOff(x, y, startIndex = 0) {
        for (let i = startIndex; i < this.segments.length; i++) {
            if (this.segments[i].x === x && this.segments[i].y === y) {
                return true;
            }
        }
        return false;
    }
}

class Apple {
    constructor() {
        this.move();
    }

    draw() {
        context.drawImage(appleImg, this.x, this.y);
    }

    move() {
        do {
            this.x = Apple.getRandomNumber(0, canvas.width - 1);
            this.y = Apple.getRandomNumber(0, canvas.height - 1);
        } while (snake.isOnTopOff(this.x, this.y));
        this.draw();
    }

    static getRandomNumber(min, max) {
        let r = Math.floor(Math.random() * ((max - min) + 1)) + min;
        return r - r % CELL_SIZE;
    }
}

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    apple.draw();
    snake.move();
    context.font = 'bold 32px Arial';
    context.fillStyle = '#ff0000';
    context.fillText(`Score ${score}`, canvas.width - 160, 40);
    if (!gameOver) {
        setTimeout(gameLoop, speed);
    } else {
        crashSound.currentTime = 0;
        crashSound.play();
        context.font = 'bold 32px Arial';
        context.fillStyle = '#000000';
        context.fillText(`GAME OVER!!!`, (canvas.width / 2) - 80, (canvas.height / 2) - 16);
    }
}

let direction = 'ArrowRight';
document.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (snake.segments.length === 1 || direction !== 'ArrowDown') {
                direction = e.key;
            }
            break;
        case 'ArrowRight':
            if (snake.segments.length === 1 || direction !== 'ArrowLeft') {
                direction = e.key;
            }
            break;
        case 'ArrowDown':
            if (snake.segments.length === 1 || direction !== 'ArrowUp') {
                direction = e.key;
            }
            break;
        case 'ArrowLeft':
            if (snake.segments.length === 1 || direction !== 'ArrowRight') {
                direction = e.key;
            }
            break;
    }
});

function loadImg(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = () => reject(`failed to load ${src}`);
    });
}

let snake;
let apple;
let snakeHead;
let appleImg;
async function load() {
    try {
        const sp = loadImg(snakeHead);
        const ap = loadImg(redapple);
        [snakeHead, appleImg] = await Promise.all([sp, ap]);
        snake = new Snake();
        apple = new Apple();
        setTimeout(gameLoop, speed);
    } catch (e) {
        console.error(e);
    }

    load();
}