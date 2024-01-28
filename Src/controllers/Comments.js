import { createComment, removeComment, allCommentsInPost } from "../services/Comments.js"


export const addComment = async function (req, res) {
    const newComment = await createComment(req)
    res.json(newComment.messages).status(newComment.status)
}

export const deleteComment = async function (req, res) {
    const deleted = await removeComment(req)
    res.json(deleted.messages).status(deleted.status)
}

export const getComments = async function (req, res) {
    const comments = await allCommentsInPost(req)
    res.json(comments.messages).status(comments.status)
}