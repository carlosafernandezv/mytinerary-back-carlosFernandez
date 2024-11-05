import { Router } from "express";
import { allItineraries, itineraryById, ItineraryBycityName } from "../controllers/itineraries/read.js";
import { create } from "../controllers/itineraries/create.js";
import { update } from "../controllers/itineraries/update.js";
import { deleteOne } from "../controllers/itineraries/delete.js";



const routerItineraries = Router()

routerItineraries.get('/all',allItineraries)
routerItineraries.get('/id/:id',itineraryById) //id
routerItineraries.get('/ItineraryBycityName/:x',ItineraryBycityName)
routerItineraries.post('/create',create) 
routerItineraries.put('/update', update)
routerItineraries.delete('/deleteOne',deleteOne)


export default routerItineraries