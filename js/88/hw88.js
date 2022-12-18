class Person {

    _first;
    _last;
    _age;

    constructor(first, last, age) {

        if (age < 0 || age > 120) {
            throw new Error(console.log("age should be between 0-120"));
        }
        this._first = first;
        this._last = last;
        this._age = age;
    }

    get age() {
        return this.age;
    }

    set age(num) {
        if (num < 0 || num > 120) {
            throw new Error(console.log("age should be between 0-120"));
        }
        this.age = num;
    }

    toString() {
        let person = '';
        for (let property in this) {
            if (this.hasOwnProperty(property) && typeof (this[property]) !== 'function') {
                person += `${property}: ${this[property]} `;
            }
        }
        return person;
    }
}

class Student extends Person {

    _grade;

    constructor(first, last, age, grade) {
        super(first, last, age);
        this._grade = grade;
    }
}

const p = new Person('Chaim', 'Rochlitz', 75);
console.log(p.toString());

const s = new Student('Perry', 'Rochlitz', 39, 'D');
console.log(s.toString());