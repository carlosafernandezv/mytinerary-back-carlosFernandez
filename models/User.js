import { Schema, model } from "mongoose";

let collection = "users";
let schema = new Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    photo:{ type: String, required:true},
    online:{type: Boolean},
    city: { type: Schema.Types.ObjectId, ref: "Cities", required: true }
}, {
    timestamps: true
});

let User = model(collection, schema);

export default User;
