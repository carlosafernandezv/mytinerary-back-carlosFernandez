import Itinerary from "../../models/Itinerary.js";

let deleteOne = async (req, res, next) => {
    try {
        let deleteItinerary = await Itinerary.deleteOne(
            {title: req.body.title}
        )
        return res.status(200).json({
            response:deleteItinerary
        })
    } catch (error) {
        next(error)
    }
    
}

export {deleteOne}