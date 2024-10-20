import { Schema, model } from "mongoose";

let collection = "Cities"
let schema = new Schema({
    id: {type:Number,required:true},
    cityName : {type:String,required:true},
    photo : {type:String,required:true},
    country : {type:String,required:true},
    continent : {type:String,required:true},
    description : {type:String,required:true},
    currency : {type:String,required:true},
    averageRating :{type:Number,required:true},
    numberOfReviews :{type:Number,required:true},
    mainAttractions :{type:String,required:true},
    bestSeasonToVisit :{type:String,required:true},
    localCuisine :{type:String,required:true},
    
},{
    timestamps:true
})

let City = model(collection,schema)

export default City