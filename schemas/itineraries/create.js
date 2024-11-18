import joi from "joi-oid";

const schema = joi.object({
    title: joi.string().required().alphanum().messages({
        'string.base':'No sea tonto no le estoy pidiendo numeros',
        'string.alphanum':'No uses caracteres Especiales'
    }),
    description: joi.string().required(),
    createdBy: {
        name: joi.string().required(), 
        profilePhotoUrl: joi.string().required(),
    },
    price: joi.number().required(),
    durationHours: joi.number().required(),
    likes: joi.string().required(),
    hashtags: { type: [String], required: true },
    comments: [
        {
            name: joi.string().required(), 
            profilePhotoUrl: joi.string().required(),
            comment: joi.string().required(),
            date: joi.date().required(),
        }
    ],
    city: joi.objectId().required(),
})

export default schema