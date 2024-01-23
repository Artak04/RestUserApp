
import mongoose from "mongoose";


const schema = mongoose.Schema

const users = new schema({
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    avatar: {
        type: String,
    },
    createdAt: {
        type: String,
    },
    updatedAt: {
        type: String,
    }

});


export default  mongoose.model('users',users)