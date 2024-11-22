import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js";
import City from "../models/City.js"

export default passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_URI_BACK
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log(profile);
            try {
                //Buscar si el usuario esta en la Base Datos
                let user = await User.findOne({ email: profile.emails[0].value })
                if (!user) {
                     const cityId = await City.findOne({ cityName: "Paris" }); // Ejemplo: Buscar por nombre

                     // Si no se encuentra la ciudad, se podría asignar un valor por defecto o error
                     if (!cityId) {
                       return done(null, false, { message: "City not found" });
                     }

                    //si no exite creo uno nuevo
                    user = new User({
                        
                        name: profile.name.givenName,
                        lastname: profile.name.familyName,
                        email: profile.emails[0].value,
                        password: profile.id,
                        photo: profile.photos[0].value,
                        online: false,
                        city: null
                    })
                    console.log(user);
                    
                    await user.save()
                }

                return done(null, user)

            } catch (error) {
                return done(error, null)
            }
        }
    )
)