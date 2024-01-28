import Post from "../models/BlogPost.js"
import jwt from "jsonwebtoken"
import Comments from "../models/Comments.js";


export const createPost = async function (data) {
    const { title, body } = data.body
    const user = await jwt.decode(data.headers['auth-token'])

    const newPost = await new Post()
    newPost.title = title,
        newPost.body = body,
        newPost.author = user.id
    await newPost.save()

    return { messages: { post: newPost }, status: 200 }
};


export const updatePosts = async function (data) {
    const { title, body } = data.body
    const updatePost = await Post.findOneAndUpdate({ _id: data.params.id }, { $set: { title, body, new: true } })

    return { messages: { post: updatePost }, status: 200 }
};


export const getPosts = async function (data) {
    const token = await jwt.decode(data.headers['auth-token'])
    const allPosts = await Post.find({ author: token.id })

    if (!allPosts) {
        return { messages: { message: 'you have not got posts' }, status: 404 }
    }

    return { messages: { message: allPosts }, status: 200 }
};

export const postDelete = async function (data) {
    const { id } = data.params
    await Post.findByIdAndDelete(id)
    const comment = await Comments.findOne({ postId: id })
    await Comments.findByIdAndDelete(comment)

    return { messages: { message: 'removed' }, status: 200 }

};


export const allPosts = async function () {
    const posts = await Post.find()
    return { messages: { posts }, status: 200 }
};
