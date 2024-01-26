import express from "express"
import { registerUser,loginUser,updateUser,getUser } from "../Controller/Authenticate.js"
import { userRegisterValidation,validationUpdate } from "../Middleware/Validation/authenticationValidation.js"
import { authenticateUser } from "../Middleware/Authenticate.js"


const router = express.Router()

router.get('/api/profile',authenticateUser,getUser)
router.post('/api/register', userRegisterValidation, registerUser)
router.post('/api/login',loginUser)
router.patch('/api/profile',authenticateUser,validationUpdate, updateUser)




export default router