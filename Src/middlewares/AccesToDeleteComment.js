import jwt from "jsonwebtoken"
import Comments from "../models/Comments.js"

export const accesToRemoveComment = async function (req, res, next) {
    const user = await jwt.decode(req.headers['auth-token'])
    const comment = await Comments.findOne({ _id: req.params.commentId })

    if (!comment) {
        return res.status(404).send({ message: "Comment not found" })
    }

    if (user.id !== comment.author) {
        return res.status(403).send({ message: "Token is invalid for this operation" })
    }

    next()
}