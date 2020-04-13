var express = require("express");
var app = express()
var path = require('path');

app.get("/", home)

function home(req, res)
{
    res.sendFile(path.join(__dirname + '/blogspost.html'));
}

app.listen(8989)