import { createPost, updatePosts, getPosts, postDelete, allPosts } from "../Service/BlogPost.js"

export const blogPost = async function (req, res) {
    const newPost = await createPost(req)
    res.json(newPost.message)
};


export const updatePost = async function (req, res) {
    const update = await updatePosts(req)
    res.json(update.message)
};


export const getUserPosts = async function (req, res) {
    const posts = await getPosts(req)
    res.json(posts.message)
};

export const deletePost = async function (req, res) {
    const userPostDelete = await postDelete(req)
    res.json(userPostDelete.message)

};


export const getAllPosts = async function (req, res) {
    const posts = await allPosts()
    res.json(posts.message)
};