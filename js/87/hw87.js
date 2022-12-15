'use strict';

//PART ONE

class Vehicle {

    constructor(color) {
        this.color = color;
    }

    go(speed) {
        this.speed = speed;
        console.log(`The ${this.color} vehicle is now going at ${this.speed}`);
    }

    print() {
        console.log(`${this.color} ${this.speed}`);
    }

}

//PART TWO

class Plane extends Vehicle {
    constructor(color) {
        super(color);
    }

    go(speed) {
        this.speed = speed;
        console.log(`The ${this.color} vehicle is now flying at ${this.speed}`);
    }
}

//PART THREE

const car = new Vehicle('red');
const plane = new Plane('blue');
car.go(80);
car.print();
plane.go(550);
plane.print();