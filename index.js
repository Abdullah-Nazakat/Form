const express = require('express')
const app = express()
const mongoose = require ('mongoose')
const formapi = require('./routes/forrm')



app.set("view engine","ejs");
app.use(express.json())
app.use("/api/form",formapi)


app.use(express.static('public'));
 
app.get("/",(req,res) =>{
    res.render('formm')
});

// app.get('/', (req,res)=>{res.send("Welcome")})

mongoose.connect('mongodb://127.0.0.1:27017/Form').then((res)=>{
    console.log("Connected...")
}).catch((err)=>{
    console.log(err.message)
})







app.listen(3000, () => {
    console.log("server is running.")
    
})