const express = require('express')
const app = express()
const mongoose = require('mongoose')
const formapi = require('./routes/forrm')



app.set("view engine","ejs");
app.use(express.json())
app.use("/api/form",formapi)


app.use(express.static(__dirname+'/public'));
 
app.get("/",(req,res) =>{
    res.render(__dirname+'/views/formm.ejs')
});

// app.get('/', (req,res)=>{res.send("Welcome")})

mongoose.connect('mongodb+srv://ali:ali@cluster1.ujfi07o.mongodb.net/Form?retryWrites=true&w=majority').then(()=>{
    console.log("Connected...")
}).catch((err)=>{
    console.log("not connected "+err.message)
})



const port = process.env.PORT || 3000



app.listen(port, () => {
    console.log("server is running.")
    
})