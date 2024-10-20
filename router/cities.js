import { Router } from "express";
import { allCity, cityById } from "../controllers/cities/read.js";
import { create } from "../controllers/cities/create.js";


const routerCities = Router()

routerCities.get('/all', allCity)
routerCities.get('/id/:id',cityById)
routerCities.post('/create',create)


export default routerCities