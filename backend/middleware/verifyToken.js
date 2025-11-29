const jwt = require('jsonwebtoken')

const verifyToken = (req,res,next)=>{
    const autheHeader = req.headers.authorization
    if(!autheHeader){
        return res.status(401).json({message:"Token not provided!"})
    }
    const token = autheHeader.split(' ')[1]

    jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
        if(err){
            return res.status(403).json({message:"Invalid Token"})
        }
        req.user = decoded
        next()
    })
}

module.exports = verifyToken