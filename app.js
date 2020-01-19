var express = require('express');
var app = express();


app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("test");
});

// app.get("/", function(req, res){
//     res.render("index");
// });

app.get("/breads", function(req, res){
    res.render("breads");
});

app.get("/cakes", function(req, res){
    res.render("cakes");
});

app.get("/pastries", function(req, res){
    res.render("pastries");
});


app.listen((process.env.PORT || 5000), function(){
    console.log("Trigo Bakery is running on port 5000");
});