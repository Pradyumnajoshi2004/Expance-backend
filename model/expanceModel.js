const mongoose = require("mongoose")

const expanceSchmea = new mongoose.Schema({
    title:{
        type:String,
        required : true
    },
    price:{
        type:Number,
        required : true
    },
    date:{
        type:Date
    }
})

module.exports = new mongoose.model("expance",expanceSchmea)