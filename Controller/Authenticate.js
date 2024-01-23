import { createUser } from "../Service/Authenticate.js"


export const registerUser = async function (req,res){
   const regUser = await createUser(req)
   res.json(regUser.message)
}