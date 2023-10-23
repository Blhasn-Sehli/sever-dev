const prisma = require('../database/index');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res) => {
    try {
        bcrypt.hash(req.body.password, 10)
            .then((hassedPass) => {
                prisma.user.create({
                    data: {
                        ...req.body,
                        password: hassedPass
                    }
                })
                    .then((result) =>
                        res.status(201).json({
                            message: "User Created Successfully",
                            result,
                        })
                    )
                    .catch((error) => {

                        res.status(500).send({
                            message: "Error creating User",
                            error,
                        });
                    });
            });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Password was not hashed successfully",
            error,
        });
    }
};

module.exports.login = async (req, res) => {
    prisma.user.findUnique({
        where: {
            email: req.body.email,
        },
    })
        .then((User) => {
            bcrypt
                .compare(req.body.password, User.password)
                .then((passChedk) => {
                    if (!passChedk) {
                        res.status(400).send({
                            message: "Passwords does not match",
                            error,
                        });
                    }
                    const Token = jwt.sign(
                        {
                            userId: User.id,
                        },
                        process.env.SECRET_KEY,
                        { expiresIn: "24h" }
                    );
                    // res.cookie("token",Token);
                    res.status(200).json({
                        message: "Login Successfull",
                        token: Token
                    });
                })
                .catch((error) => {
                    console.log(error);
                    res.status(400).send({
                        message: "Passwords does not match",
                        error,
                    });
                });
        })
        .catch((error) => {
            res.status(404).send({
                message: "Email not found",
                error,
            });
        });
};

module.exports.getOneUser = async (req, res) => {
    res.json(req.user)
};


module.exports.getUserByType = async (req, res) => {
    try {
        const response = await prisma.user.findMany({ where: { type: req.params.type } })
        res.json(response);
    } catch (error) {
        console.log(error);
    }

}

module.exports.updatePhoto = async (req, res) => {
    try {
        const response = await prisma.user.update({
            where: { id: +req.params.id }, data: {
                ...req.body
            }
        })
        res.json(response);
    } catch (error) {
        res.json(error);
    }
}

// module.exports.updateLists = async (req, res) => {
//     try {
//         const update = await User.update(req.body, {
//             where: { id: req.params.id },
//         });
//         res.json(update);
//     } catch (error) {
//         res.status(404).json(error);
//     }
// };


// module.exports.updateUserInfo = async (req, res) => {
//     try {
//         const { old, currentId, newPassword, adress, name, lastName, email } = req.body;
//         const { password } = await prisma.user.findUnique({ where: { id: currentId } });
//         bcrypt
//             .compare(old, password)
//             .then((passCheck) => {
//                 if (passCheck) {
//                     bcrypt
//                         .hash(newPassword, 10)
//                         .then((newHashedPassword) => {
//                             prisma.user
//                                 .update(
//                                     { password: newHashedPassword, name, adress, lastName, email },
//                                     { where: { id: currentId } }
//                                 )
//                                 .then((response) => {
//                                     const token = jwt.sign(
//                                         {
//                                             userId: currentId,
//                                             email: email,
//                                         },
//                                         process.env.SECRET_KEY,
//                                         { expiresIn: "24h" }
//                                     );
//                                     res.json({ message: "user updated", response, token })
//                                 })
//                                 .catch((error) =>
//                                     res.json({ message: "user is not updated", error })
//                                 );
//                         })
//                         .catch((error) => {
//                             res.json({ message: "cannot hash password", error });
//                         });
//                 }
//                 else {
//                     res.json({ message: "Password does not match" });
//                 }
//             })
//             .catch(() => {
//                 res.json({ message: "Password does not match", error });
//             });
//     } catch (error) {
//         res.status(404).json(error);
//     }
// };
