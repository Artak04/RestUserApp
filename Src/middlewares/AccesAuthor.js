import jwt from "jsonwebtoken"
import Post from "../models/BlogPost.js"

export const accesAuthor = async function (req, res, next) {
    const token = await jwt.decode(req.headers['auth-token'])
    const post = await Post.findOne({ _id: req.params.id })

    if (!post) {
        return res.status(404).send({ message: "Post not found" })
    }

    if (token.id !== post.author) {
        return res.status(403).send({ message: "Token is invalid for this operation" })
    }

    next()
}