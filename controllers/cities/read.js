import City from "../../models/City.js";

let allCity = async (req,res,next) => {
    try {
        
        let {cityName, id} = req.query
        
        let query = {}
        if (id){
            query._id = id
        }else if (cityName) {
            query.cityName = {$regex: '^'+cityName, $options:'i'}
            
        }
        


        let all = await  City.find(query)

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


let cityById =  async (req,res,next) => {
    try {
        console.log(req.params);
        
        let roleQuery = req.params.id
        let all = await  City.find({id:roleQuery})
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



export {allCity,cityById}
