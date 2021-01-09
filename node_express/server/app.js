var express = require('express');
var app = express();

var port = 8000;

// app.listen(port);                    //Synchronous Method
// console.log('Server Started!!');

// app.listen(port, function(err, res) { //Asynchronoud Method
//     if (err) {
//         console.log('Server Error!!');
//     } else {
//         console.log('Server Started!!');
//     }
// });

app.listen(port, function() { //Asynchronoud Method will display the log if successfull
    console.log('Server Started on port 8000!!')
});