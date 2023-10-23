const prisma = require('../database/index');


module.exports.getAllPostsByUser = async (req, res) => {
    try {
        const posts = await prisma.post.findMany({ where: { userId: + req.params.userId }, include: { User: true } });
        res.json(posts)
    } catch (error) {
        res.json(error)
    }
}
module.exports.createPost = async (req, res) => {
    try {
        const post = await prisma.post.create({ data: req.body })
        res.json(post)
    } catch (error) {
        res.json(error)
    }
}

module.exports.updatePost = async (req, res) => {
    try {
        const updated = await prisma.post.update({ where: { id: +req.params.id }, data: req.body })
        res.json(updated)
    } catch (error) {
        res.json(error)
    }
}


module.exports.removePost = async (req, res) => {
    try {
        const deleted = await prisma.post.delete({ where: { id: +req.params.id } })
        res.json(deleted)
    } catch (error) {
        res.json(error)
    }
}









