var express = require('express');
const routes = require('./routes')
var cors = require('cors')

var app = express()
app.use(cors())

routes(app)

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", "137.117.35.253", port)
})