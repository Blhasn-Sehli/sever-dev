const prisma = require('../database/index');

module.exports.getAllProduct = async (req, res) => {
    try {
        const products = await prisma.product.findMany({ include: { User: true } })
        res.json(products)
    } catch (error) {
        console.log(error);
        res.json(er)
    }
}
module.exports.getAllProductByUser = async (req, res) => {
    try {
        const products = await prisma.product.findMany({ where: { userId: +req.params.userId } })
        res.json(products)
    } catch (error) {
        console.log(error);
        res.json(er)
    }
}
module.exports.getOneProduct = async (req, res) => {
    try {
        const product = await prisma.product.findUnique({ where: { id: +req.params.id } })
        res.json(product)
    } catch (error) {
        console.log(error);
        res.json(error)
    }
}
module.exports.addProduct = async (req, res) => {
    try {
        const product = await prisma.product.create({ data: req.body })
        res.json(product)
    } catch (error) {
        console.log(error);
        res.json(error)
    }
}
module.exports.updateProduct = async (req, res) => {
    try {
        const product = await prisma.product.update({ where: { id: +req.params.id }, data: req.body })
        res.json(product)
    } catch (error) {
        console.log(error);
        res.json(error)
    }
}
module.exports.removeProduct = async (req, res) => {
    try {
        const product = await prisma.product.delete({ where: { id: +req.params.id } })
        res.json(product)
    } catch (error) {
        console.log(error);
        res.json(error)
    }
}
module.exports.getAllProductByStatus = async (req, res) => {
    try {
        const products = await prisma.product.findMany({ where: { status: req.params.status } })
        res.json(products)
    } catch (error) {
        console.log(error);
        res.json(error)
    }
}
module.exports.getAllProductByPrice = async (req, res) => {
    try {
        const products = await prisma.product.findMany({ where: { price: +req.params.price } })
        res.json(products)
    } catch (error) {
        console.log(error);
        res.json(error)
    }
}
module.exports.getAllProductByCategories = async (req, res) => {
    try {
        const products = await prisma.product.findMany({ where: { categoryId: +req.params.categories },include:{User:true} })
        res.json(products)
    } catch (error) {
        console.log(error);
        res.json(error)
    }
}