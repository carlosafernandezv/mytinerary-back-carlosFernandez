import Itinerary from "../../models/Itinerary.js";

const update = async (req, res, next) => {
    try {
        let itinerary = req.body
        let upd = await Itinerary.updateOne(
            {_id : itinerary._id},
            {description: itinerary.description}
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