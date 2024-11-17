import User from "../../models/User.js"

let deleteOne = async (req, res, next) =>{
    try {
        let deleteUser = await User.deleteOne({
            _id: req.body._id 
        })
        return res.status(200).json({
            response: deleteUser
        })  
    } catch (error) {
        next(error)
    }
}

let deleteMany = async (req, res, next) =>{
    try {
        let deleteUser = await User.deleteMany({
            _id: req.body._id 
        })
        return res.status(200).json({
            response: deleteUser
        })
    } catch (error) {
        next(error)
    }
}

export {deleteOne, deleteMany}