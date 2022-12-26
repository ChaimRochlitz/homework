(function () {
    'use strict';

    const theCanvas = document.querySelector('#theCanvas');
    const context = theCanvas.getContext('2d');

    function resizeCanvas() {
        theCanvas.width = window.innerWidth;
        theCanvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Ant {
        static ANT_SIZE = 4;


        constructor() {
            this.x = window.innerWidth / 2;
            this.y = window.innerHeight / 2;
        }

        draw() {
            const img = new Image();
            img.onload = () => {
                context.drawImage(img, this.x, this.y);
            };
            img.src = "images/ants.jpg";
        }

        move() {
            this.x += Ant.getRandomNumber(-1, 2);
            this.y += Ant.getRandomNumber(-1, 1);

            this.draw();
        }

        static getRandomNumber(min, max) {
            return Math.floor(Math.random() * ((max - min) + 1)) + min;
        }
    }

    const ants = [];
    for (let i = 0; i < 1000; i++) {
        ants.push(new Ant());
    }
    setInterval(() => {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ants.forEach(ant => ant.move());
    }, 100);
}());
