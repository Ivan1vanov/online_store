import jwt from "jsonwebtoken"

export const isAdmin = async (req, res, next) => {
        if (req.method === 'OPTIONS') {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if(!token) {
                return res.status(401).json({
                    message: 'No token'
                })
            } else {
    
                const decoded = await jwt.verify(token, process.env.SECRET_KEY_JWT)
       
                if (!decoded.role === 'ADMIN') {
                    res.status(401).json({
                        message: 'No role'
                    })
                } else {
                   
                    req.user = decoded
                    next()
                } 
    
            }
        } catch (error) {
            res.status(401).json({
                message: 'NONO'
            })
            console.log(error)
        }
    }
