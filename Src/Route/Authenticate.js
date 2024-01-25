import express from "express"
import { registerUser,loginUser,updateUser,getUser } from "../Controller/Authenticate.js"
import { userRegisterValidation,validationUpdate } from "../Middleware/Validation/authenticationValidation.js"
import { authenticateUser } from "../Middleware/Authenticate.js"


const router = express.Router()

router.get('/Api/Profile',authenticateUser,getUser)
router.post('/Api/Register', userRegisterValidation, registerUser)
router.post('/Api/Login',loginUser)
router.patch('/Api/Profile',authenticateUser,validationUpdate, updateUser)




export default router