const { MongoCredentials } = require('mongodb')
const mongoose = require('mongoose')
const { stringify } = require('nodemon/lib/utils')

const alienSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    tech:{
        type:String,
        required:true
    },
    sub:{
        type:Boolean,
        required:true,
        default:false
    }
})

module.exports = mongoose.model('alien',alienSchema)