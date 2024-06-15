import Joi from 'joi'

const addStoreSchema = Joi.object({
    
        // profileImage: Joi.string(),
    
        nameStore: Joi.string().required().messages({
            'string.empty': 'name store is required.'
        }),
        lineShoppingUrl: Joi.string().required().messages({
            'string.empty': 'LINE Shopping URL is required.'
        }),
        emailStore: Joi.string().email({ tlds: false }).required().messages({
            'string.email':'Your email address is invalid.',
            'string.empty': 'email is required.'
        }),
        phoneStore: Joi.string().required().pattern(/^[0-9]{10}$/).messages({
            'string.pattern.base': 'Your phone number is invalid.',
            'string.empty': 'phone is required'
        })
})


const validateAddstore = (input) => {
    const { error } = addStoreSchema.validate(input, { abortEarly: false})
    
    if (error) {
        const result = error.details.reduce((acc,el) => {
            acc[el.path[0]] = el.message
            return acc
        },{})
        // console.dir(error)
        return result
    }
}

export default validateAddstore