import joi from "joi"

const schema = joi.object({
    name: joi.string().max(15).required().min(5),
    lastName: joi.string().max(15).required().min(5),
    email: joi.string().max(100).required().email(),
    password: joi.string().max(100).required().min(8).regex(/^(?=.*[A-Z])/)
});

async function checkPassword(data, res) {
    const lowerName = data.name.toLowerCase()
    const lowerLastName = data.lastName.toLowerCase()
    const lowerPassword = data.password.toLowerCase()
    const checkNameInPassword = lowerPassword.includes(lowerName)
    const checkLastNameInPassword = lowerPassword.includes(lowerLastName)
    if (checkNameInPassword || checkLastNameInPassword) {
        return res.json({ message: "Name or Last Name should not be part of the password" })
    }
};




export const userRegisterValidation = async function (req, res, next) {
    try {
        await schema.validateAsync(req.body)
        await checkPassword(req.body, res)
        next()
    } catch (error) {
        return res.json({ message: "validation failed" })
    }
};






const schemaUpdate = joi.object({
    name: joi.string().max(15).min(5),
    lastName: joi.string().max(15).min(5),
    password: joi.string().max(100).min(8).regex(/^(?=.*[A-Z])/)
});


export const validationUpdate = async function (req, res, next) {
    try {
        await schemaUpdate.validateAsync(req.body)
        next()
    } catch (error) {
        return res.json({ message: "validation failed" })
    }
};