import jwt from "jsonwebtoken"


export const authenticateUser = async function (req, res, next) {
    const token = req.headers['auth-token']
    if (!token) {
        return res.status(401).send({ message: "Unauthorized" })
    }

    const verification = await jwt.verify(token, process.env.tokenSecret)
    if (!verification) {
        return res.status(401).send({ message: "Unauthorized" })
    }

    next()
};