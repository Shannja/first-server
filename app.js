const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.get("/", function(request, response){
    response.sendFile("e.html");
});

app.listen(3000, function(){
    console.log("Started on port 3000!");
});

// adding the next thing to see if open ai will revoke it:
const openaiplsrevoke = "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"
