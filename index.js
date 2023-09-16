const express = require('express')
const app = express()
const mongoose = require ('mongoose')
const formapi = require('./routes/forrm')



app.set("view engine","ejs");
app.use(express.json())
app.use("/api/form",formapi)


app.use(express.static('public'));
 
app.get("/",(req,res) =>{
    res.render(__dirname+'/views/formm.ejs')
});

// app.get('/', (req,res)=>{res.send("Welcome")})

mongoose.connect('mongodb+srv://abdullahnazaqat999:qwerty123@cluster0.m6iypb9.mongodb.net/Form?retryWrites=true&w=majority').then((res)=>{
    // mongoose.connect('mongodb://localhost:27017/Form').then((res)=>{
    console.log("Connected...")
}).catch((err)=>{
    console.log(err.message)
})







app.listen(3000, () => {
    console.log("server is running.")
    
})