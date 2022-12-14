(function () {
    'use strict';

    //PART 1

    function Vehicle(color) {
        this.color = color;
    }

    Vehicle.prototype.Go = function (speed) {
        this.speed = speed;
        console.log(`Vehicle is going at ${speed}MPH`);
    };

    Vehicle.prototype.print = function () {
        console.log(`Color: ${this.color} Speed ${this.speed}MPH`);
    };

    //PART 2

    function Plane(color) {
        Vehicle.call(this, color);
    }

    Plane.prototype = Object.create(Vehicle.prototype);

    Plane.prototype.Go = function (speed) {
        this.speed = speed;
        console.log(`Vehicle is flying at ${speed}MPH`);
    };

    //PART 3

    const car = new Vehicle('red');
    car.Go(80);
    car.print();

    const plane = new Plane('red');
    plane.Go(80);
    plane.print();


}());