const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient;

const registerControllerPost = async (req, res) => {
    console.log(req.body);
    await prisma.users.create(
        {
            data:
            {
                username : req.body.username,
                password : req.body.password,
                email    : req.body.email
            }
        }
    ).then(()=>{
        res.redirect('http://localhost:3000/login');
    }).catch(e => {
        res.status(500).send("could not finish request");
    })
};

exports.registerControllerPost = registerControllerPost;