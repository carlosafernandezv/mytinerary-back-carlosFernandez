import User from "../../models/User.js";

const update = async (req, res, next) => {
    try {
        let user = req.body

        let upd = await User.findOneAndUpdate(
            { firstName: user.firstName }, //condiciones de busqueda
            { city: user.city } // modificaciones
        )

    

        return res.status(200).json({
            response: upd
        })

    } catch (error) {
        next(error)
    }
}

export { update }