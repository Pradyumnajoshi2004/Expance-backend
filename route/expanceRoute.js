const {getExpance,postExpance,deleteExpance, expanceFindById} = require("../controller/expanceController")
const route = require("express").Router()

route.get("/",getExpance)

route.post("/",postExpance)

route.delete("/:id",deleteExpance)

route.get("/:id",expanceFindById)

module.exports = route