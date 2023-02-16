const express = require("express");
const { getUserLike, getUserRate } = require("../controller/foodController");
foodRoute = express.Router();

foodRoute.get("/getUserLike/:id", getUserLike)
foodRoute.get("/getUserRate/:id", getUserRate)

module.exports = {
    foodRoute
}