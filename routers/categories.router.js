const express = require('express');
const { createCategory } = require('../controllers/categories.Controller');
const categoriesRouter = express.Router();


categoriesRouter.post('/add',createCategory)






module.exports = categoriesRouter;