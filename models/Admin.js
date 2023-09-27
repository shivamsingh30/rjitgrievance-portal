const mongoose=require('mongoose')

//define schema

const AdminSchema=new mongoose.Schema({

    name:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }


})

//create collection
const AdminModal =mongoose.model('Admin',AdminSchema)

module.exports=AdminModal