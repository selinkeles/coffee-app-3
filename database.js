const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require("cors");
/*
app.use(
    cors({
        origin: "*",
    })
)*/

mongoose.connect("mongodb://localhost:27017/coffeeShop", 
    {
    useNewUrlParser: true, 
    useUnifiedTopology: true
    }, 
    (err) => {
    if(!err) console.log('db connected');
    else console.log('db error');
})
