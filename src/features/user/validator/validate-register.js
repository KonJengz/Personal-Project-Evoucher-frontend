import Joi from 'joi';

const registerSchema = Joi.object({

    email: Joi.string()
        .email({ tlds: false })
        .required()
        .messages({
            'string.email':'Your email address is invalid.',
            'string.empty': 'email is required.'
        }),
        
    password: Joi.string().required()
        .pattern(/^[0-9a-zA-Z]{6,}$/)
        .messages({
            'string.empty': 'password is required',
            'string.pattern.base': 'password must be at leat 6 characters and contain only alphabet and number.'
        }
        ),
    confirmPassword: Joi.string()
        .required()
        .valid( Joi.ref('password'))
        .strip()
        .messages({
            'string.empty': 'confirm password is required.',
            "any.only": 'password and confirm password did not match'
        }),
    phone: Joi.string()
        .required()
        .pattern(/^[0-9]{10}$/)
        .messages({
            'string.pattern.base': 'Your phone number is invalid.',
            'string.empty': 'phone is required'
        })
})


const validateRegister = (input) => {
    const { error } = registerSchema.validate(input, { abortEarly: false });

    if (error) {
        const result = error.details.reduce((acc, el) => {
          acc[el.path[0]] = el.message;
          return acc;
        }, {});
        // console.dir(error)
        return result
    }
}

export default validateRegister