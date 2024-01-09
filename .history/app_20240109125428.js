const express= require('express');
const bodyParser= require('body-parser');
const request = require('request'); 
const https = require('https');
const app= express();

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html")
})

app.post("/", function(req, res){
    const firstName= req.body.fName;
    const lastName = req.body.sName;
    const email= req.body.email;

    const data = {
        members:[
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };
    const jsonData= JSON.stringify(data);

    const url= "https://us21.api.mailchimp.com/3.0/lists/ce7ee9fa25"

    const options = {
        method: "post",
        auth: "lakshya12:73253a6a1a25a147327293ffe598d2be-us21"
    }

    const lucky= https.request(url, options, function(response) {
        if(response.statusCode === 200){
            res.sendFile(__dirname + "/success.html");
        } else{
            response.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data) {
            console.log(JSON.parse(data));
        })
    })
    //lucky.write(jsonData);
    lucky.end()
})

app.post("/failure", function(req, res){
    res.redirect("/");
})

app.post("/success", function(req, res){
    res.redirect("/");
})
app.listen(3000, function() {
    console.log('Server is running on 3000 port')
})

//API key
//73253a6a1a25a147327293ffe598d2be-us21

//unique id
//ce7ee9fa25