//WORKING WITH MODULES

const tutorial = require('./tutorials');

console.log(tutorial);

console.log(tutorial.sum(4, 1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());

// --------------------------

//EVENT EMITTER