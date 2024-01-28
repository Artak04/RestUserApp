import { createUser, logUser, updateProfile, getProfile } from "../services/Authenticate.js"


export const registerUser = async function (req, res) {
   const regUser = await createUser(req)
   res.status(regUser.status).send(regUser.messages)
};


export const loginUser = async function (req, res) {
   const login = await logUser(req)
   res.status(login.status).send(login.messages)
};


export const updateUser = async function (req, res) {
   const update = await updateProfile(req)
   res.status(update.status).send(update.messages)
};


export const getUser = async function (req, res) {
   const user = await getProfile(req)
   res.status(user.status).send(user.messages)
};