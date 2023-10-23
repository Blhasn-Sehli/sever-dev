const express = require('express');
const { getwishListByUserId, createWishList } = require('../controllers/wishList.Controller');
const wishlistRouter = express.Router();


wishlistRouter.get('/getWishListByUserId/:userId', getwishListByUserId)
wishlistRouter.post('/add', createWishList);









module.exports = wishlistRouter












