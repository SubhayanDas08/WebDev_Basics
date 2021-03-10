//GETTING STARTED WITH EXPRESSJS

// const { name } = require('ejs');
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World!!');
// });

// app.get('/example', (req, res) => {
//     res.send('Hitting the example route');
// })

// //ROUTE PARAMS and QUERY

// app.get('/example/:name/:age', (req, res) => {
//     console.log(req.query); //http://localhost:3000/example/subh/19?sex=male&year=2023
//     console.log(req.params); //http://localhost:3000/example/subh/19
//     res.send(req.params.name + " : " + req.params.age);
// });

// app.listen(3000);

//SERVING STATIC FILES WITH EXPRESS

const express = require('express');
const app = express();
const path = require('path');

//using middleware
app.use('/public', express.static(path.join(__dirname, 'static'))); //we dont wanna show static folder name so instead public will be used

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.listen(3000);

//HTTP POST REQUEST WITH EXPRESS AND BODY PARSER MODULE