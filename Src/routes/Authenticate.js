import express from "express"
import { registerUser,loginUser,updateUser,getUser } from "../controllers/Authenticate.js"
import { userRegisterValidation,validationUpdate } from "../middlewares/validations/authenticationValidation.js"
import { authenticateUser } from "../middlewares/Authenticate.js"


const router = express.Router()

router.get('/api/profile',authenticateUser,getUser)
router.post('/api/register',userRegisterValidation,registerUser)
router.post('/api/login',loginUser)
router.patch('/api/profile',authenticateUser,validationUpdate, updateUser)




export default router