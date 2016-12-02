var sentiment = require('sentiment');
var express = require('express')

//create an instance of express
var app = express()

//basic landing page
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)


var name= "zoe"
var age=25

console.log("hello " + name)



var r1 = sentiment('Cats are stupid.');
console.dir(r1);