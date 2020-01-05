var express = require('express');
var app = express();


app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("test");
});

app.get("/breads", function(req, res){
    res.render("breads");
});

app.get("/pastries", function(req, res){
    res.render("pastries");
})

app.get("/cakes", function(req, res){
    res.render("cakes");
})

app.listen(3000, function() {
    console.log("Started Trigo Bakery");
});