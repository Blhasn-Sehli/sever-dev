const prisma = require('../database/index');


module.exports.getwishListByUserId = async (req, res) => {
    try {
        const wishlists = await prisma.wishlist.findMany({ where: { userId: + req.params.userId } })
        res.json(wishlists)
    } catch (error) {
        console.log(error);
        res.json(error)
    }
}

module.exports.createWishList = async (req, res) => {
    try {
        const wishList = await prisma.wishlist.create({ data: req.body })
        res.json(wishList)
    } catch (error) {
        res.json(error)
    }
}

