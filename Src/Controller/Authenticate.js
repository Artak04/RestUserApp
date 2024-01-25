import { createUser, logUser, updateProfile, getProfile } from "../Service/Authenticate.js"


export const registerUser = async function (req, res) {
   const regUser = await createUser(req)
   res.json(regUser.message)
}


export const loginUser = async function (req, res) {
   const login = await logUser(req)
   res.json(login.message)
}


export const updateUser = async function (req, res) {
   const update = await updateProfile(req)
   res.json(update.message)
}


export const getUser = async function (req, res) {
   const user = await getProfile(req)
   res.json(user.message)
}