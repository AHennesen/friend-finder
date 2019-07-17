var express = require("express");
var path = require("path");

// tells node that we are created an express server
var app = express();

// sets a base port and a heroku development port
var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// shows the app where to when when certain urls are visited
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// starts the app, telles it what port to listen too
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
