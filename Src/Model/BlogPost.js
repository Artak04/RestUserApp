import mongoose from "mongoose";

const schema = mongoose.Schema

const post = new schema({
    title: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
},
    { timestamps: true }
);


export default mongoose.model('post',post)