const mongoose = require('mongoose')

//define schema

const StudentSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }


})

//create collection
const StudentModal = mongoose.model('Student',StudentSchema)

module.exports = StudentModal