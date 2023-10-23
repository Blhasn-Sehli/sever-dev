const express = require('express');
const productRouter = express.Router();
const {getAllProduct,getAllProductByUser,addProduct,removeProduct,updateProduct,getOneProduct, getAllProductByStatus, getAllProductByPrice, getAllProductByCategories} = require('../controllers/product.Controller')


productRouter.get('/getAllByStatus/:status',getAllProductByStatus)
productRouter.get('/getAllByPrice/:price',getAllProductByPrice)
productRouter.get('/getAllByCategories/:categories',getAllProductByCategories)
productRouter.get('/getAll',getAllProduct)
productRouter.get('/getAllByUser/:userId',getAllProductByUser)
productRouter.get('/:id',getOneProduct)
productRouter.post('/add',addProduct)
productRouter.put('/:id',updateProduct)
productRouter.delete('/:id',removeProduct)


module.exports = productRouter