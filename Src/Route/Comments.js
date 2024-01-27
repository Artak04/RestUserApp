import express from "express"
import { authenticateUser } from "../Middleware/Authenticate.js"
import { addComment,deleteComment } from "../Controller/Comments.js"
import { accesToRemoveComment } from "../Middleware/AccesToDeleteComment.js"

const router = express.Router()

router.post('/api/:postId/comment',authenticateUser,addComment)
router.delete('/api/:postId/comment/:commentId',authenticateUser,accesToRemoveComment,deleteComment)


export default router