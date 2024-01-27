import jwt from "jsonwebtoken"


export const authenticateUser = async function (req, res, next) {
    const token = req.headers['auth-token']
    if (!token) {
        return res.json({ message: "unauthorized" })
    }

    const verification = await jwt.verify(token, process.env.tokenSecret)
    if (!verification) {
        return res.json({ message: "unauthorized" })
    }
    
    next()
};