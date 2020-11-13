const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors())
app.use(express.static(__dirname))

const port = process.env.PORT || 3000

app.get('/',function (request, response) {
    response.sendFile(__dirname + "/index.html");

});

app.listen(3000);
// const express = require('express')
// var app = express()
//
// const port = 4000
//
// app.use(express.static(__dirname))
//
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// })
//
//
// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })