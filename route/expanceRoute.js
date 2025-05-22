const {getExpance,postExpance,deleteExpance} = require("../controller/expanceController")
const route = require("express").Router()

route.get("/",getExpance)

route.post("/",postExpance)

route.delete("/:id",deleteExpance)

module.exports = route