
import User from "../../models/User.js"
import "../../models/City.js"


let allUser = async (req,res,next) => {
    try {
        
        let {name} = req.query
        console.log(name);
        
        let query = {}
        if (name) {
            query.name = {$regex:'^'+name, $options: 'i'}
        }
        let all = await  User.find(query).populate('city','').exec();

        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}

let userById =  async (req,res) => {
    try {
        console.log(req.params);
        
        let roleQuery = req.params._id
        let all = await  User.findById(roleQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}

export {allUser,userById} 