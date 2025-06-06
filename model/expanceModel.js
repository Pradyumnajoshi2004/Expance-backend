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
    date: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        enum: ["income", "expense"],
        required: true
    },
    user_id:{
        type:mongoose.Types.ObjectId,
        ref:"userModel"
    }
})

module.exports = new mongoose.model("expance",expanceSchmea)
