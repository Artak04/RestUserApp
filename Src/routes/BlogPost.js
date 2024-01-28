import express from "express"
import { authenticateUser } from "../middlewares/Authenticate.js"
import { blogPost, updatePost, getUserPosts,deletePost,getAllPosts } from "../controllers/BlogPost.js"
import {validationPost  } from "../middlewares/validations/userPostsValidation.js"
import {accesAuthor} from "../middlewares/AccesAuthor.js"

const router = express.Router()


router.use('/api/myPosts',authenticateUser)

router.get('/api/posts',getAllPosts)
router.get('/api/myPosts', getUserPosts)
router.post('/api/newPost',authenticateUser,validationPost, blogPost)
router.put('/api/myPosts/:id',accesAuthor, updatePost)
router.delete('/api/myPosts/:id',accesAuthor,deletePost)


export default router