const express= require('express');
const bodyParser= require('body-parser');
const request= require('request'); 
const app= express();

app.get("/", function(req, res) {
    res.sendFile()
})

app.listen(3000, function() {
    console.log('Server is running on 3000 port')
})