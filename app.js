const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.get("/", function(request, response){
    response.sendFile("e.html");
});

app.listen(3000, function(){
    console.log("Started on port 3000!");
});