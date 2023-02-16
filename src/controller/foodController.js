const sequelize = require("../models/index")
const initModels = require("../models/init-models")

const model = initModels(sequelize)

const getUserLike = async (req, res) => {
    try {
        let { id } = req.params;

        const data = await model.restaurant.findOne({
            where: {
                res_id: id
            },
            include: ["user_id_users"]
        })
        if(data){
            res.status(200).send(data)
        }else{
            res.status(400).send("Nhà hàng không tồn tại.")
        }
    } catch (error) {
        res.status(500).send("Lỗi backend.")
    }
}

const getUserRate = async (req, res) => {
    try {
        let { id } = req.params;

        const data = await model.restaurant.findOne({
            where: {
                res_id: id
            },
            include: ["user_id_user_rate_res"]
        })
        if(data){
            res.status(200).send(data)
        }else{
            res.status(400).send("Nhà hàng không tồn tại.")
        }
    } catch (error) {
        res.status(500).send("Lỗi backend.")
    }
}

module.exports = {
    getUserLike, getUserRate
}
