var express = require("express");
var path = require('path');
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

//Body Parser Stuff

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//API Stuff
var tables = [];

//ROUTES
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "../index.html"));
  console.log(__dirname);
});

app.get("/tables", function(req, res){
  res.sendFile(path.join(__dirname, "../tables.html"));
  console.log(__dirname);
});

app.get("/reservations", function(req, res){
  res.sendFile(path.join(__dirname, "../reservations.html"));
  console.log(__dirname);
});

app.get("/api/tables", function(req, res){
  return res.json(tables);
});

//Listens for Post Requests and does stuff to it
app.post("/api/newtable", function(req, res) {
  var newTable = req.body;
  console.log(newTable);
  tables.push(newTable);

  //res.json(newTable); Not sure if this line is needed since I'm displaying all.
});

//LISTEN
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
