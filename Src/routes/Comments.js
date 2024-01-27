import express from "express"
import { authenticateUser } from "../middlewares/Authenticate.js"
import { addComment,deleteComment } from "../controllers/Comments.js"
import { accesToRemoveComment } from "../middlewares/AccesToDeleteComment.js"

const router = express.Router()

router.post('/api/:postId/comment',authenticateUser,addComment)
router.delete('/api/:postId/comment/:commentId',authenticateUser,accesToRemoveComment,deleteComment)


export default router