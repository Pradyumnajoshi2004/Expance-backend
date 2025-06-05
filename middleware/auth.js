const jwt = require("jsonwebtoken")

async function auth(req,res,next){
    try {
        const token = req.header("token")
        const verifyToken = await jwt.decode(token,process.env.SEC)
        if(!verifyToken) return res.status(500).json({errors:true,message:"Token is invalid"})
        
        next()

    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
    
}

module.exports = auth