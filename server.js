//Dependencies

var express = require("express");

//sets up the Express app

var app = express();

//sets up inital port
var PORT = process.env.PORT || 3000;

//sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


//Routes

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)
});