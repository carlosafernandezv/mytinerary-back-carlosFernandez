import Itinerary from "../../models/Itinerary.js";

let allItineraries = async (req,res,next) => {
    try {
        
        let {title, _id} = req.query
        
        let query = {}
        if (_id){
            query._id = _id
        }else if (title) {
            query.title = {$regex: '^'+title, $options:'i'}
            
        }
        


        let all = await  Itinerary.find(query)

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



export {allItineraries,itineraryById}