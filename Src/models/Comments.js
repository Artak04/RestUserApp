import mongoose from "mongoose";

const schema = mongoose.Schema

const comments = new schema({
    postId: {
        type: String
    },
    message: {
        type: String
    },
    author: {
        type: String
    }
})


export default mongoose.model('comments',comments)