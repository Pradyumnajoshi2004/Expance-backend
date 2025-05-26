const {getUser,postUser,updateUser,deleteUser,login} = require("../controller/userController")

const route = require("express").Router()

route.get("/",getUser)

route.post("/",postUser)

route.put("/:id",updateUser)

route.delete("/:id",deleteUser)

route.post("/login",login)


module.exports = route