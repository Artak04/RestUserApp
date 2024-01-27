import { createComment } from "../services/Comments.js"
import { removeComment } from "../services/Comments.js"

export const addComment = async function (req,res){
    const newComment = await createComment(req)
    res.json(newComment)
}

export const deleteComment = async function (req,res){
    const deleted = await removeComment(req)
    res.json(deleted)
}