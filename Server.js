const express = require('express')
const app = express()
const mongoose = require('mongoose')
const User = require("./models/User");

require('dotenv').config({path:"./config/.env"});



const port = process.env.PORT;
const uri = process.env.DBURL

app.use(express.json());

app.listen(port, () => {
  console.log(`APP listening at ${port}`)});

// Connecting to DB

  mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if (err) throw err;
        console.log("Successfully connected to Database");
    });

// RETURN ALL USERS

app.get("/allusers", (req, res) => {
    User.find()
        .then((users) => res.send(users))
        .catch((err) => {

            console.log(err);
            res.send(err)
        })
});

//  ADD A NEW USER TO THE DATABASE

app.post("/newusers", (req, res) => {
    let newUser = req.body;
  
     User.create (newUser)
       .then((users) => res.send(users))
       .catch((err) => {

        console.log(err);
        res.send(err)
    })
});

//  EDIT A USER BY ID

app.put("/editusers/:id", (req, res) => {
    const userdata = req.body
    const params = req.params.id
    User.findByIdAndUpdate( params, { ...userdata} , (err) => {
      
       if (err) throw err;
    })
        .then((users) => res.send(users))
        .catch((err) => {

            console.log(err);
            res.send(err)
        })
});


// REMOVE A USER BY ID 

app.delete("/deleteusers/:id", (req, res) => {
    const params = req.params.id
    User.findByIdAndRemove( params, (err) => {
       if (err) throw err;
    })
        .then((users) => res.send(users))
        .catch((err) => {

            console.log(err);
            res.send(err)
        })
});


// Author : Hamza Toukabri , THANK YOU and تحيا مصر









