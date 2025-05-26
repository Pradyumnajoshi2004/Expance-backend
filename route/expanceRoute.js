const {getExpance,postExpance,deleteExpance, expanceFindById, updateExpance} = require("../controller/expanceController")
const route = require("express").Router()

route.get("/",getExpance)

route.post("/",postExpance)

route.delete("/:id",deleteExpance)

route.put("/:id",updateExpance)

route.get("/:id",expanceFindById)

module.exports = route