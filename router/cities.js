import { Router } from "express";
import { allCity, cityById } from "../controllers/cities/read.js";
import { create } from "../controllers/cities/create.js";
import { update } from "../controllers/cities/update.js";
import { deleteOne } from "../controllers/cities/delete.js";


const routerCities = Router()

routerCities.get('/all', allCity)
routerCities.get('/id/:id',cityById)
routerCities.post('/create',create)
routerCities.put('/update', update) 
routerCities.delete('/deleteOne',deleteOne)


export default routerCities