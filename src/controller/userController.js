const sequelize = require("../models/index")
const initModels = require("../models/init-models")
const model = initModels(sequelize)

const likeRestaurant = async (req, res) => {
    try {
        const { id } = req.params;
        let today = new Date().toISOString().slice(0, 10)

        const data = await model.like_res.create({
            res_id: id,
            user_id: 9,
            date_like: today
        })

        if(data) {
            res.status(200).send(`Like nhà hàng #${id} thành công.`)
        }

    } catch (err) {
        res.status(500).send("Lỗi backend.")
    }
}

const unLikeRestaurant =  async(req, res) => {
    try {
        let { id } = req.params;
        await model.like_res.destroy({
            where:{
                res_id: id,
                user_id: 9
            }
        })
        res.status(200).send(`Unlike nhà hàng #${id} thành công.`)
    } catch (error) {
        res.status(500).send("Lỗi backend.")
    }
}

const getRestaurantFavorite = async (req, res) => {
    try {
        const { id } = req.params 
        const data = await model.user.findOne({
            where: {
                user_id: id
            },
            include: ["res_id_restaurants"]
        })
        if (data) {
            res.status(200).send(data)
        } else {
            res.status(400).send("Người dùng không tồn tại.")
        }
    } catch (error) {
        res.status(500).send("Lỗi backend.")
    }
}

const rateRestaurant = async (req,res) => {
    try {
        let { id } = req.params;
        let today = new Date().toISOString().slice(0, 10)
        const data = await model.rate_res.create({
            res_id: id,
            user_id: 9,
            amount: 5,
            date_rate: today
        })
        res.status(200).send("Đánh giá nhà hàng thành công.")
    } catch (error) {
        res.status(500).send("Lỗi backend.")
    }
}

const getRestaurantRate = async (req, res) => {
    try {
        let { id } = req.params
        
        let data = await model.user.findOne({
            where: {
                user_id: id
            },
            include: "res_id_restaurant_rate_res"
        })
        if(data){
            res.status(200).send(data)
        } else {
            res.status(400).send("Người dùng không tồn tại.")
        }
    } catch (error) {
        res.status(500).send("Lỗi backend.")
    }
}

const userOrder = async (req , res) => {

    try {
        const { user_id, food_id, amount, code, arr_sub_id } = req.body;
        const myJson = JSON.stringify(arr_sub_id)
        const data = model.order.create({
            user_id,
            food_id,
            amount,
            code,
            arr_sub_id: myJson
        })
        if(data) {
            res.status(200).send("Đặt hàng thành công.")
        }
    } catch (error) {
        res.status(500).send("Lỗi backend.")
    }
}

module.exports = {
    likeRestaurant, unLikeRestaurant, getRestaurantFavorite, rateRestaurant, getRestaurantRate, userOrder
}