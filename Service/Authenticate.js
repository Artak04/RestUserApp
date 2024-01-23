import Users from "../Model/Users.js";
import bcrypt from "bcrypt"


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
    return {message:'you are succesfully registred'}
}
