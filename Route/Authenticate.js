import express from "express"
import { registerUser } from "../Controller/Authenticate.js"

const router = express.Router()

router.post('/Api/Register',registerUser)



export default router