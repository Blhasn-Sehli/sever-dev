const express = require("express");
const { getAllMessageByRoom, addMessage } = require("../controllers/mesaage.controller");
const messageRouter = express.Router();



messageRouter.get('/getByRoom/:chatRoomId',getAllMessageByRoom)
messageRouter.post('/add',addMessage)







module.exports = messageRouter;