'use strict';

// every function
function customEvery(array, test) {
    let exit = false;
    array.forEach(x => {
        if (!test(x)) {
            console.log('Test Failed');
            exit = true;
            return;
        }
    });
    if (!exit) {
        console.log('Test Passed');
    }
}

function uppercaseTest(x) {
    return x.toUpperCase() === x;
}


const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
const letters2 = ['A', 'B', 'C', 'D', 'E', 'F'];

customEvery(letters, uppercaseTest);
customEvery(letters2, uppercaseTest);

console.log(letters.every(uppercaseTest));
console.log(letters2.every(uppercaseTest));

//Closure - Part 1

function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 5));

// Part 2
function getMultiplier() {
    return function (a, b) {
        return a * b;
    }
}

const multiplier = getMultiplier();
console.log(multiplier(2, 5));

// Part 3

function getMultiplier2(a) {
    return function (b) {
        return a * b;
    };
}

const multiplier2 = getMultiplier2(2);
console.log(multiplier2(5));
