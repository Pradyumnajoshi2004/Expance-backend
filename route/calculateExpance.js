const {calculateExpance} = require("../controller/calculateExpance")

const route = require("express").Router()

route.get("/",calculateExpance)

module.exports = route