import express from "express"
import { authenticateUser } from "../Middleware/Authenticate.js"
import { blogPost, updatePost, getUserPosts,deletePost,getAllPosts } from "../Controller/BlogPost.js"
import {validationPost  } from "../Middleware/Validation/userPostsValidation.js"
import {accesAuthor} from "../Middleware/AccesAuthor.js"

const router = express.Router()


router.use('/Api/MyPosts',authenticateUser)

router.get('/Api/Posts',getAllPosts)
router.get('/Api/MyPosts', getUserPosts)
router.post('/Api/NewPost',validationPost, blogPost)
router.put('/Api/MyPosts/:id',accesAuthor, updatePost)
router.delete('/Api/MyPosts/:id',accesAuthor,deletePost)


export default router