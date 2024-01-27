import jwt from "jsonwebtoken"
import Comments from "../Model/Comments.js"

export const accesToRemoveComment = async function (req, res, next) {
    const user = await jwt.decode(req.headers['auth-token'])
    const comment = await Comments.findOne({ _id: req.params.commentId })

    if (!comment) {
        return res.json({ message: "does not exist comment" })
    }

    if (user.id !== comment.author) {
        return res.json({ message: "token invalid" })
    }

    next()
}