const prisma = require('../database/index');
const jwt = require("jsonwebtoken");

const authProtection = async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")

    ) {
        try {
            // Get token fron header
            token = req.headers.authorization.split(" ")[1];
            //Verify token
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            //Get User from the token
            req.user = await prisma.user.findUnique({
                where: {
                    id: decoded.userId
                }
            });
            next();
        } catch (error) {
            res.status(401);
            res.send("Not authorized");
        }
    }

    if (!token) {
        res.status(401);
        res.send("Not authorized,no token ");
    }
};

module.exports = authProtection;