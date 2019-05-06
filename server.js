// Required Modules
var express    = require("express");
var morgan     = require("morgan");
var app        = express();

var port = process.env.PORT || 3002;

app.use(morgan("dev"));
app.use(express.static("./"));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start Server
app.listen(port, function () {
    console.log( "Express server listening on port " + port);
});