// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// // const events = require('./events');
// const db = require('./db/db');

// //post function
// const port = process.env.PORT || 3000;

// const app = express()
//     .use(cors())
//     .use(bodyParser.json());

// app.post("/api", (req, res) => {
//     async function app() {
//         console.log(req.body)
//         var data = await insertdb(req.body);
//         if (data === "200") {
//             res.json(data);
//         }
//     }
//     app();

// })

// function insertdb(data) {

//     return new Promise(function(resolve, reject) {

//         let sql = `insert into tbl_info set ?`;
//         let post = {
//             name: data.name,
//             email: data.email
//         }
//         db.query(sql, post, (err, result) => {
//             if (err) reject(err)
//             else resolve("200")
//         })

//     });
// }
// app.listen(port, () => {
//     console.log(`Express server listening on port ${port}`);
// });



//get function
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const events = require('./events');
const db = require('./db/db');


const port = process.env.PORT || 3000;

const app = express()
    .use(cors())
    .use(bodyParser.json());

app.get("/api/:id", (req, res) => {
    async function app() {
        // console.log(req.body)
        console.log(req.params.id)
            // var data = await insertdb(req.body);
        var data = await getdb();
        if (data.length > 0) {
            res.json(data);
        }
    }
    app();

})

function insertdb(data) {

    return new Promise(function(resolve, reject) {

        let sql = `insert into tbl_info set ?`;
        let post = {
            name: data.name,
            email: data.email
        }
        db.query(sql, post, (err, result) => {
            if (err) reject(err)
            else resolve("200")
        })
    });
}

function getdb() {

    return new Promise(function(resolve, reject) {

        let sql = `select * from tbl_info`;

        db.query(sql, (err, result) => {
            if (err) reject(err)
            else resolve(result)
        })
    });
}
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});