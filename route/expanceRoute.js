const {getExpance,postExpance,deleteExpance, expanceFindById, updateExpance} = require("../controller/expanceController")
const auth = require("../middleware/auth")
const route = require("express").Router()

route.get("/",getExpance)

route.post("/",auth,postExpance)

route.delete("/:id",auth,deleteExpance)

route.put("/:id",auth,updateExpance)

route.get("/:id",expanceFindById)

module.exports = route
