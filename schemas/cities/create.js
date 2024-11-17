import joi from "joi-oid";

const schema = joi.object({
    cityName: joi.string().required().alphanum().messages({
        'string.base':'No sea tonto no le estoy pidiendo numeros',
        'string.alphanum':'No uses caracteres Especiales'
    }),
    photo: joi.string().required(),
    country: joi.string().required(),
    continent: joi.string().required(),
    description: joi.string().required(),
    currency: joi.string().required(),
    averageRating: joi.number().required(),
    numberOfReviews: joi.number().required(),
    mainAttractions: joi.array().required(),
    bestSeasonToVisit: joi.string().required(),
    localCuisine: joi.array().required(),
})

export default schema