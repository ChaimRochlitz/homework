'use strict';

const theCanvas = document.querySelector('#theCanvas');
const context = theCanvas.getContext('2d');

const radius = document.querySelector('#radius');
const color = document.querySelector('#color');
const draw = document.querySelector('#draw');

const balls = [''];

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
      this.dx = -dx;
    }

    if (this.y < 50 || this.y > 500 - this.radius) {
      this.dy = -dy;
    }
  }

}

draw.addEventListener('click', () => {
  balls.push(new Ball(radius.value, `${color.value}`));
});

  setInterval(balls.forEach(b =>{
    if(balls.length > 1){
    b.draw();
    }
  }), 1000);


 

