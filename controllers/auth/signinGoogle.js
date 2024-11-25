import User from "../../models/User.js";

export default async(req,res,next) => {
    try {
        await User.findOneAndUpdate(
            {email: req.user.email},
            {online: true}
        )
        console.log(req);

        return res.redirect(
          "http://localhost:5173/?token=" +
            req.token +
            "photo=" +
            req.photo +
            "firstName=" +
            req.firstName +
            "firstName=" +
            req.lastName
        );
        
    } catch (error) {
       next(error) 
    }
}