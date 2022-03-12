import jwt from 'jsonwebtoken'

export const auth = async (req, res, next) => {
    if (req.method === 'OPTIONS') {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if(!token) {
            return res.status(401).json({
                message: 'Unauthenticated'
            })
        } else {

            const decoded = await jwt.verify(token, process.env.SECRET_KEY_JWT)

            req.user = decoded

            next()

        }
    } catch (error) {
        res.status(401).json({
            message: 'Unauthenticated'
        })
    }
}