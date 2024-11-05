import Itinerary from "../../models/Itinerary.js";
import City from "../../models/City.js"

let allItineraries = async (req,res,next) => {
    try {
        
        let {title, _id} = req.query
        
        let query = {}
        if (_id){
            query._id = _id
        }else if (title) {
            query.title = {$regex: '^'+title, $options:'i'}
            
        }
        


        let all = await  Itinerary.find(query).populate("city","").exec();

        if (all.length > 0) {
            return res.status(200).json({
                response: all
            });
        } else {
            return res.status(404).json({
                response: "No cities found with the specified name"
            });
        }
    } catch (error) {
        next(error)
    }        
}

let ItineraryBycityName = async (req, res, next) => {
    try {
        console.log(req.params);
        
        // Obtenemos el nombre de la ciudad desde los parámetros de la URL
        let cityNameQuery = req.params.x;

        // Buscamos la ciudad por nombre
        let city = await City.findOne({ cityName: cityNameQuery });
        if (!city) {
            return res.status(404).json({
                response: "City not found"
            });
        }

        // Buscamos los itinerarios que tengan la ciudad asociada
        let all = await Itinerary.find({ city: city._id }).populate("city", "cityName country");

        return res.status(200).json({
            response: all
        });
    } catch (error) {
        next(error);
    }        
};


let itineraryById =  async (req,res,next) => {
    try {
        console.log(req.params);
        
        let roleQuery = req.params.id
        let all = await  Itinerary.findById(roleQuery)
        if (all) {
            return res.status(200).json({
                response: all
            })
        }else{
            return res.status(404).json({
                response: "City not found with the specified ID"
            });
        }
        
    } catch (error) {
        next(error)
    }        
}



export {allItineraries,itineraryById,ItineraryBycityName}