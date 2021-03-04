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