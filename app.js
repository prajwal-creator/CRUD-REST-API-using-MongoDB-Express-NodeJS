const express = require("express");
const mongoose = require("mongoose");
const url = 'mongodb+srv://prajwal:1234@aliens.tcbx8.mongodb.net/Aliens?retryWrites=true&w=majority'
const app= express()

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',()=>{
    console.log('connected....')
})
app.use(express.json())
const alienRouter = require('./routers/aliens')
app.use('/aliens',alienRouter)

app.listen(9000,()=>{
    console.log('server started');
})