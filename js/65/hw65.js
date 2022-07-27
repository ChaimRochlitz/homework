"use strict";

// jshint -W104, -W079

const name = 'chaim';
const num = 1;

let num1 = 1;
let num2 = '1';

console.log(num1 === num2);
console.log(num1 == num2);

let nan = NaN;

function nanCheck(variable) {
    return (isNaN(variable));
}

console.log(nanCheck(nan));