import City from "../../models/City.js";

let deleteOne = async (req, res, next) => {
    try {
        let deleteCity = await City.deleteOne(
            {cityName: req.body.cityName}
        )
        return res.status(200).json({
            response:deleteCity
        })
    } catch (error) {
        next(error)
    }
    
}

export {deleteOne}