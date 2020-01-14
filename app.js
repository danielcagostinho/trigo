var express = require('express');
var app = express();


app.set("view engine", "ejs");
app.use(express.static("public"));

// app.get("/", function(req, res){
//     res.render("index");
// });

app.get("/", function(req, res){
    res.render("test");
});


// app.get("/", function(req, res) {
//     res.sendfile("release-1.html");
// });


// app.get("/breads", function(req, res){
//     res.render("breads");
// });

// app.get("/pastries", function(req, res){
//     res.render("pastries");
// })

// app.get("/cakes", function(req, res){
//     res.render("cakes");
// })

app.listen((process.env.PORT || 5000), function(){
    console.log("Trigo Bakery is running on port 5000");
});