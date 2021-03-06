const mongoose = require('mongoose')
let dataModel = require('./models/model.js')

mongoose.connect('mongodb://localhost/testDatabase',{useNewUrlParser: true})

let jsondata = new dataModel({
    name: 'Akshay Kumar',
    rollno : '1610991072'
})

jsondata.save().then(doc =>{
    console.log(doc)
}).catch(err =>{
    console.log(err)
})

mongoose.connection.once('open',()=>{
    console.log('Mongoose Connection is successfull')
}).on('error',(error)=>{
    console.log('Connection error : '+error)
})
