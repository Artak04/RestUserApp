import { createComment } from "../Service/Comments.js"
import { removeComment } from "../Service/Comments.js"

export const addComment = async function (req,res){
    const newComment = await createComment(req)
    res.json(newComment)
}

export const deleteComment = async function (req,res){
    const deleted = await removeComment(req)
    res.json(deleted)
}