const mongoose = require("mongoose")
const express = require("express")
require("dotenv/config")
const cors = require("cors")
const expanceRoute = require("./route/expanceRoute")
const calculateExpanceRoute = require("./route/calculateExpance")
const userRoute = require("./route/userRoute")



const app = express()
// middleware

app.get("/",(req,res)=>{
    res.send("home")
})

app.use(express.json())
app.use(cors())


app.use("/api/expance", expanceRoute)
app.use("/api/calcuate", calculateExpanceRoute)
app.use("/api/user", userRoute)

// connection

app.listen(process.env.PORT || 5000)

async function db() {
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}

db()