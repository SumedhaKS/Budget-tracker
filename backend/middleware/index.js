const { jwt, jwtSecret } = require("../config")

const userMiddleware = async (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.sendStatus(401)
    }

    const token = authHeader.split(' ')[1];
    try{
        const verifyUser = jwt.verify(token, jwtSecret);
        if(verifyUser){
            req.email = verifyUser;   // add the verified emailID to the request and sends further to teh actual handler
            console.log(req.email);
            next()  
        }
    }
    catch(err){
        return res.sendStatus(403);
    }
}

module.exports = {
    userMiddleware
}