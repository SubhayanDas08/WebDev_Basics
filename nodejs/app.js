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

eventEmitter.on('abc', () => {
    console.log("abc event has been occured. ");
});

eventEmitter.emit('abc');