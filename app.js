// Including libraries
var mysql = require('mysql');

var app = require('http').createServer(handler),
        io = require('socket.io').listen(app),
        static = require('node-static'); // for serving files

// This will make all the files in the current folder
// accessible from the web
var fileServer = new static.Server('./');

// This is the port for our web server.
// you will need to go to http://localhost:8011 to see it
app.listen(8011);

// If the URL of the socket server is opened in a browser
function handler(request, response) {

    request.addListener('end', function () {
        fileServer.serve(request, response);
    });
}

// Delete this row if you want to see debug messages
io.set('log level', 1);

// Listen for incoming connections from clients
io.sockets.on('connection', function (socket) {

    // Start listening for mouse move events
    socket.on('mousemove', function (data) {

        // This line sends the event (broadcasts it)
        // to everyone except the originating client.
        socket.broadcast.emit('moving', data);
    });
    
    socket.on('save_canvas', function (data){
        save_canvas(data.image);
    });
});

// databse connection.
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sparx',
    database: 'whiteboard'
});

connection.connect();

function save_canvas(image){
    var sql = "INSERT INTO canvas SET image='"+image+"', ut=now()";
    connection.query(sql, function (err, rows, fields){        
        if(!err){
            
        }
        else {
            
        }
    });
}