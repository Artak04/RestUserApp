import { createPost, updatePosts, getPosts, postDelete, allPosts } from "../services/BlogPost.js"

export const blogPost = async function (req, res) {
    const newPost = await createPost(req)
    res.status(newPost.status).send(newPost.messages)
};


export const updatePost = async function (req, res) {
    const update = await updatePosts(req)
    res.status(update.status).send(update.messages)
};


export const getUserPosts = async function (req, res) {
    const posts = await getPosts(req)
    res.status(posts.status).send(posts.messages)
};

export const deletePost = async function (req, res) {
    const userPostDelete = await postDelete(req)
    res.status(userPostDelete.status).send(userPostDelete.messages)

};


export const getAllPosts = async function (req, res) {
    const posts = await allPosts()
    res.status(posts.status).send(posts.messages)
};