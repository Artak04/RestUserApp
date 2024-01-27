import jwt from "jsonwebtoken"
import Post from "../models/BlogPost.js"

export const accesAuthor = async function (req, res, next) {
    const token = await jwt.decode(req.headers['auth-token'])
    const post = await Post.findOne({ _id: req.params.id })

    if (!post) {
        return res.json({ message: "does not exist" })
    }

    if (token.id !== post.author) {
        return res.json({ message: "token invalid" })
    }

    next()
}