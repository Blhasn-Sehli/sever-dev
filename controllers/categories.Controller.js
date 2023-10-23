const prisma = require("../database/index");


module.exports.createCategory = async (req,res)=>{
    try{
        const category = await prisma.category.create({data:req.body})
        res.json(category)
    }catch(error){
        res.json(error)
    }
}