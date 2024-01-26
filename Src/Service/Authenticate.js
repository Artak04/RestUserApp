import Users from "../Model/Users.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



export const createUser = async function (data) {

    const { name, lastName, email, password } = data.body
    const user = await Users.findOne({ email })

    if (user) {
        return { message: "you are already registred" }
    }

    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(password, salt)

    const newUser = await new Users()
    newUser.name = name
    newUser.lastName = lastName
    newUser.email = email
    newUser.password = hashPass
    await newUser.save()

    return { message: 'you are succesfully registred' }
};



export const logUser = async function (data) {
    const { email, password } = data.body

    const user = await Users.findOne({ email })
    if (!user) {
        return { message: "unauthorized" }
    }

    const comparePassword = await bcrypt.compare(password, user.password)
    if (!comparePassword) {
        return { message: "failed password" }
    }

    const token = await jwt.sign({ id: user._id }, process.env.tokenSecret)

    return { token: token }
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

    return { message: updateUser }
};


export const getProfile = async function (data) {
    const token = await jwt.decode(data.headers['auth-token'])
    const user = await Users.findOne({ _id: token.id })

    return {
        message: {
            name:user.name,
            lastName:user.lastName,
            email:user.email
        }
    }
};