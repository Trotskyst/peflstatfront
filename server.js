// const express = require('express')
// const serveStatic = require('serve-static')
// const path = require('path')

// const app = express()

// app.use('/', serveStatic(path.join(__dirname, '/dist')))

// const port = process.env.PORT || 8080
// app.listen(port)



// console.log('Listen on port: ' + port)


const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
const server = require('http').Server(app);

// app.use(express.static(__dirname, 'dist', {index: false}));
// app.use(express.static(__dirname + '/'));
app.use(express.static('/'));


server.listen(port, function() {
    console.log("App running on port " + port);
})

// PathLocationStrategy

app.get('', function(req, res) {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});