//WORKING WITH MODULES

// const tutorial = require('./tutorials');

// console.log(tutorial);

// console.log(tutorial.sum(4, 1));
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathObject());

// --------------------------

//EVENT EMITTER

// const EventEmitter = require('events');

// const eventEmitter = new EventEmitter();

// eventEmitter.on('abc', (num1, num2) => {
//     console.log("abc event has been occured. ");
//     console.log('sum is: ' + (num1 + num2));
// });

// eventEmitter.emit('abc', 1, 54);

// //we can create our own custom object which can use the events module

// class Person extends EventEmitter {
//     constructor(name) {
//         super();
//         this._name = name;
//     }

//     get name() {
//         return this._name;
//     }
// }

// let Pedro = new Person('Pedro');

// Pedro.on('xyz', () => {
//     console.log('The Name is: ' + Pedro.name);
// });

// Pedro.emit('xyz');


// --------------------------

//WORKING WITH READLINE

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let num1 = Math.floor(Math.random() * 10 + 1);
// let num2 = Math.floor(Math.random() * 10 + 1);

// let answer = num2 + num1;

// rl.question(`What is ${num1} + ${num2}? \n Answer: `, (userInput) => {
//     if (userInput.trim() == answer) {
//         rl.close();
//     } else {
//         rl.setPrompt('Incorrect!! Please enter again:');
//         rl.prompt();
//         rl.on('line', (userInput) => {
//             if (userInput.trim() == answer) {
//                 rl.close();
//             } else {
//                 rl.setPrompt(`The correct was ${answer}. Incorrect!! Please enter again:`);
//                 rl.prompt();
//             }
//         })
//     }
// });

// rl.on('close', () => {
//     console.log('Correct!!');
// });

// --------------------------

//WORKING WITH FILE SYSTEM MODULE

// const fs = require('fs');

// //create a file

// fs.writeFile('example.txt', 'This is an Example', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Successfully Created!!');
//     }
// });

// //read a file

// fs.readFile('example.txt', 'utf8', (err, File) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(File);
//     }
// });

// // renaming a file

// fs.rename('example.txt', 'example2.txt', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log('Successfully Renamed the File');
// });

// //append data to a file

// fs.appendFile('example2.txt', ' Adding data to the file', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log('Successfully Appended data');
// });

// //deleting a file

// fs.unlink('example2.txt', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log('Successfully Deleted the file');
// });

//

// --------------------------

//WORKING WITH THE FILE SYSTEM MODULE PT2

const fs = require('fs');

//creating a folder

fs.mkdir('tutorial', (err) => {
    if (err)
        console.log(err);
    else
        console.log('Successfully Created a folder');
});

//deleting a folder

fs.rmdir('tutorial', (err) => {
    if (err)
        console.log(err);
    else
        console.log('Successfully Deleted a folder');
});

//creating a file inside a folder

fs.mkdir('example', (err) => {
    if (err)
        console.log(err);
    else {
        fs.writeFile('./example/a.txt', '1234567890', (err) => {
            if (err)
                console.log(err);
            else
                console.log('Successfully Added File to a example folder');
        });
    }
});