var express = require("express");
var path = require("path");
var app = express();

//app.use("/",express.static(path.join(__dirname, "./src"))); // serve static assets

app.use("/node_modules",express.static(path.join(__dirname, "/node_modules")));
app.use("/dist",express.static(path.join(__dirname, "/dist")));
app.use("/",express.static(path.join(__dirname, "/src")));

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "src/index.html"));
    //res.send("index.html");
});

server = app.listen(3000, function() { // listen to the port
	console.log('Game On!!!!');
});