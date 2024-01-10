
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://ronitgarg:abcd@cluster0.wedfzpn.mongodb.net/todo?retryWrites=true&w=majority")

const schema  = mongoose.Schema({
    title : String , 
    description : String ,
    completed : Boolean
})

const todo = mongoose.model('todos' , schema)

module.exports ={
    todo
}
