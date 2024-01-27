import joi from "joi"


const schema = joi.object({
    title: joi.required(),
    body: joi.required()
})


export const validationPost = async function (req, res, next) {
    try {
        await schema.validateAsync(req.body)
        next()
    } catch (error) {
        return res.json({ message: 'required failed' })
    }
}