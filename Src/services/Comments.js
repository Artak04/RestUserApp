import Comments from "../models/Comments.js";
import jwt from "jsonwebtoken"
import Posts from "../models/BlogPost.js"



export const createComment = async function (data) {
    const { message } = data.body
    const user = await jwt.decode(data.headers['auth-token'])
    const newComment = new Comments()
    newComment.postId = data.params.postId
    newComment.message = message
    newComment.author = user.id
    await newComment.save()


    return { messages: { comment: newComment }, status: 200 }
}


export const removeComment = async function (data) {
    const comment = await Comments.findOne({ postId: data.params.postId })
    await Comments.findByIdAndDelete(comment)

    return { messages: { message: "removed" }, status: 200 }
}


export const allCommentsInPost = async function (data) {
    const post = await Posts.findOne({ _id: data.params.postId })
    const comment = await Comments.find({ postId: data.params.postId })
    if (!post) {
        return { messages: { error: "Post not found" }, status: 404 };
    }
    const { title, body } = post

    return { messages: { title, body, comment }, status: 200 }
}
