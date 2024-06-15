import Joi from 'joi'

const loginSchema = Joi.object({
    username: Joi.string().required().messages({
        'string.empty': 'username is required.'
    }),
    password: Joi.string().required().messages({
        'string.empty': 'password is required.'
    })
})

const validateLoginAdmin = (input) => {
    console.log('input', input)
    const { error } = loginSchema.validate(input, { abortEarly: false})

    if (error) {
        const result = error.details.reduce((acc,el) => {
            acc[el.path[0]] = el.message
            return acc
        },{})
        // console.dir(error)
        return result
    }
}

export default validateLoginAdmin