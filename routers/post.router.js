const express = require('express');
const { getAllPostsByUser, updatePost, removePost, createPost } = require('../controllers/post.Controller');
const postRouter = express.Router();




postRouter.get('/getAll/:userId', getAllPostsByUser)
postRouter.post("/add", createPost)
postRouter.put("/:id", updatePost)
postRouter.delete("/:id", removePost)



















module.exports = postRouter;