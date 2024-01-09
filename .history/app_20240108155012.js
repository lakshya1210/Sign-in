const express= require('express');
const bodyParser= require('body-parser');
//const request = require('request'); 
const app= express();

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html")
})

app.post("/", function(req, res){
    var firstName= req.body.fName;
    var secondName= req.body.sName;
    var email= req.body.email;

    var data = {
        
    }
})

app.listen(3000, function() {
    console.log('Server is running on 3000 port')
})

//API key
//73253a6a1a25a147327293ffe598d2be-us21

//unique id
//ce7ee9fa25