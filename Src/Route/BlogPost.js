import express from "express"
import { authenticateUser } from "../Middleware/Authenticate.js"
import { blogPost, updatePost, getUserPosts,deletePost,getAllPosts } from "../Controller/BlogPost.js"
import {validationPost  } from "../Middleware/Validation/userPostsValidation.js"
import {accesAuthor} from "../Middleware/AccesAuthor.js"

const router = express.Router()


router.use('/api/myPosts',authenticateUser)

router.get('/api/posts',getAllPosts)
router.get('/api/myPosts', getUserPosts)
router.post('/api/newPost',validationPost, blogPost)
router.put('/api/myPosts/:id',accesAuthor, updatePost)
router.delete('/api/myPosts/:id',accesAuthor,deletePost)


export default router