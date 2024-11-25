import User from "../../models/User.js"

const update = async (req, res, next) => {
    try {
        let users = req.body
        let upd = await User.updateOne(
            {name: users.name},
            {photo: users.photo},
            {email: users.email},
            {address: users.address},
            {phone: users.phone},
            {password: users.password}
            
        )
        if (upd) {
            return res.status(200).json({
                response:upd
            })
        } else {
            
        }
    } catch (error) {
        next(error)
    }
    
}

export {update}