// const express = require('express')
// const serveStatic = require('serve-static')
// const path = require('path')

// const app = express()

// app.use('/', serveStatic(path.join(__dirname, '/dist')))

// const port = process.env.PORT || 8080
// app.listen(port)



// console.log('Listen on port: ' + port)


var history = require('connect-history-api-fallback');

var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
app = express()
//add this middleware
app.use(history());    
app.use(serveStatic(__dirname))
var port = process.env.PORT || 5000
app.listen(port)
console.log('server started '+ port) 
