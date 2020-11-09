'use strict'

var app = require('./app')
var http = require('http')

var port = 8081
if (app != null) {
  var server = http.createServer(app).listen(port, () => {
    console.log('servidor corriendo en http://localhost:' + port)
  })

  server.timeout = 300000
}
