//WORKING WITH MODULES

// const tutorial = require('./tutorials');

// console.log(tutorial);

// console.log(tutorial.sum(4, 1));
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathObject());

// --------------------------

//EVENT EMITTER

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('abc', (num1, num2) => {
    console.log("abc event has been occured. ");
    console.log('sum is: ' + (num1 + num2));
});

eventEmitter.emit('abc', 1, 54);

//we can create our own custom object which can use the events module

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let Pedro = new Person('Pedro');

Pedro.on('xyz', () => {
    console.log('The Name is: ' + Pedro.name);
});

Pedro.emit('xyz');