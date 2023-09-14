const mongoose = require ('mongoose')

var formModel = mongoose.model("Form",new mongoose.Schema({
    "Name":String,
    "FatherName":String,
    "gender":String,
    "Gmail":String,
    "age":Number,
    "Call":Number
}))

module.exports=formModel