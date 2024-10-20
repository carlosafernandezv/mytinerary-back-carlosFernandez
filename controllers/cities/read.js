import City from "../../models/City.js";

let allCity = async (req,res,next) => {
    try {
        let all = await  City.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}

let cityById =  async (req,res,next) => {
    try {
        console.log(req.params);
        
        let roleQuery = req.params.id
        let all = await  City.find({id:roleQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}



export {allCity,cityById}
