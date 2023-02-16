const express = require("express");
const { likeRestaurant, unLikeRestaurant, getRestaurantFavorite, rateRestaurant, getRestaurantRate, userOrder } = require("../controller/userController");
userRoute = express.Router();

userRoute.get("/likeRestaurant/:id", likeRestaurant)
userRoute.get("/unlikeRestaurant/:id", unLikeRestaurant)
userRoute.get("/getRestaurantFavorite/:id", getRestaurantFavorite)
userRoute.get("/rateRestaurant/:id", rateRestaurant)
userRoute.get("/getRestaurantRate/:id", getRestaurantRate)
userRoute.post("/order", userOrder)
module.exports = {
    userRoute
}