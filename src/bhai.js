var express = require('express')
var app = express()

app.get('/home/12345/:id', function (req, res) {
    console.log(req)
    console.dir("Hello G");
  res.send(req.params)
})

app.listen(2500)
