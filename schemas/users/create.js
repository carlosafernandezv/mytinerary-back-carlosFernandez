import joi from "joi-oid";

const schema = joi.object({
    name: joi.string().required().alphanum().messages({
        'string.base':'No sea tonto no le estoy pidiendo numeros',
        'string.alphanum':'No uses caracteres Especiales'
    }),
    lastname: joi.string().required().alphanum().messages({
      'string.base':'No sea tonto no le estoy pidiendo numeros',
      'string.alphanum':'No uses caracteres Especiales'  
    }),
    email: joi.string().required(),
    password: joi.string().required(),
    photo: joi.string().required(),
    online:joi.boolean().required().default(false),
    city: joi.objectId().required()
})

export default schema