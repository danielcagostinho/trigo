var express = require('express');
var app = express();


app.set("view engine", "ejs");
//app.use(express.static(__dirname + "../public"));

app.get("/", function(req, res) {
    res.send("<h1>Test for Trigo Bakery</h1>");
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

app.listen(process.env.PORT || 5000);