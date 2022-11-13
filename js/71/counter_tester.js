for (let i = 0; i < 10; i++) {
    window.app.counter.increment();
}

let counter1 = window.app.counterCreator.create();
let counter2 = window.app.counterCreator.create();

for (let i = 0; i < 5; i++) {
    counter1.increment();
}

for (let i = 0; i < 15; i++) {
    counter2.increment();
}

console.log(window.app.counter.getCount());
console.log(counter1.getCount());
console.log(counter2.getCount());