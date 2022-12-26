'use strict';

const theCanvas = document.querySelector('#theCanvas');

const size = document.querySelector('#radius');
const col = document.querySelector('#color');
const draw = document.querySelector('#draw');

const balls = [];

class Ball {
  x = 50;
  y = 50;
  dx = 10;
  dy = 10;
  start = 0;
  end = 2 * Math.PI;
  radius;

  constructor(radius, color) {
    this.radius = radius;
    const context = theCanvas.getContext('2d');
    context.fillStyle = color;

  }

  draw() {
    context.clearRect(0, 0, 1000, 500);
    context.beginPath();
    context.arc(this.x, this.y, this.radius, this.start, this.end);
    this.x += this.dx;
    this.y += this.dy;
    context.fill();

    if (this.x < 50 || this.x > 1000 - this.radius) {
      this.dx = -this.dx;
    }

    if (this.y < 50 || this.y > 500 - this.radius) {
      this.dy = -this.dy;
    }
  }

}

draw.addEventListener('click', () => {
  balls.push(new Ball(size.value, `${col.value}`));
});

function drawBalls(){
  if(balls.length > 0){
    balls.forEach(b => {
        b.draw();
  });
}}

setInterval(drawBalls(), 1000);




