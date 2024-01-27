import Comments from "../models/Comments.js";
import jwt from "jsonwebtoken"


export const createComment = async function (data) {
    const { message } = data.body
    const user = await jwt.decode(data.headers['auth-token'])

    const newComment = new Comments()
    newComment.postId = data.params.postId
    newComment.message = message
    newComment.author = user.id
    await newComment.save()

    return { message: "your comment succesfuly added" }
}


export const removeComment = async function (data){
    const comment = await Comments.findOne({postId:data.params.postId})
    await Comments.findByIdAndDelete(comment)
    
    return {message:"your comment removed"}
}