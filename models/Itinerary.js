import { Schema, model } from "mongoose";

let collection = "Itineraries";
let schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdBy: {
        name: { type: String, required: true }, 
        profilePhotoUrl: { type: String, required: true } 
    },
    price: { type: Number, required: true },
    durationHours: { type: Number, required: true },
    likes: { type: Number, default: 0 },
    hashtags: { type: [String], required: true },
    comments: [
        {
            name: { type: String, required: true }, 
            profilePhotoUrl: { type: String, required: true },
            comment: { type: String, required: true },
            date: { type: Date, required: true }
        }
    ],
    city: { type: Schema.Types.ObjectId, ref: "Cities", required: true }
}, {
    timestamps: true
});

let Itinerary = model(collection, schema);

export default Itinerary;
