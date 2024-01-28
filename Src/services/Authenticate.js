import Users from "../models/Users.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



export const createUser = async function (data) {

    const { name, lastName, email, password } = data.body
    const user = await Users.findOne({ email })

    if (user) {
        return { messages: { message: "User already exists" }, status: 409 }
    }

    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(password, salt)

    const newUser = await new Users()
    newUser.name = name
    newUser.lastName = lastName
    newUser.email = email
    newUser.password = hashPass
    await newUser.save()

    return { messages: { user: newUser }, status: 200 }
};



export const logUser = async function (data) {
    const { email, password } = data.body

    const user = await Users.findOne({ email })
    if (!user) {
        return { messages: { message: "Unauthorized" }, status: 401 }
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        return { messages: { message: "failed password" }, status: 401 }
    }

    const token = await jwt.sign({ id: user._id }, process.env.tokenSecret)

    return { messages: { token }, status: 200 }
};



export const updateProfile = async function (data) {
    const { name, lastName, password } = data.body
    const user = await jwt.decode(data.headers['auth-token'])

    if (password) {
        const salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(password, salt)
        await Users.findOneAndUpdate({ _id: user.id }, { $set: { password: hashPass, new: true } })
    }

    const updateUser = await Users.findOneAndUpdate({ _id: user.id }, { $set: { name, lastName, new: true } })

    return { messages: { user: updateUser }, status: 200 }
};


export const getProfile = async function (data) {
    const token = await jwt.decode(data.headers['auth-token'])
    const user = await Users.findOne({ _id: token.id })

    return {
        messages: {
            message: {
                name: user.name,
                lastName: user.lastName,
                email: user.email
            }
        },
        status: 200
    }
};