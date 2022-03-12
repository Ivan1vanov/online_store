import ApiError from "../apiError/apiError.js"
import { User } from "../models/models.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import e from "cors"

const jwtGenerator = (id, email, role) => {
   return jwt.sign({id, email, role}, process.env.SECRET_KEY_JWT, {expiresIn: '24h'})
}

class UserController {
    async registration (req, res) {
        const {email, password, role} = req.body

        if (!email && !password) {
            res.json({
                message: 'Invalid credentials'
            })
        } else {

           const candidate = await User.findOne({where: {email}})

           if(candidate) {

               res.json({
                   message: 'User already exists'
               })

           } else {

            const hashPassword = await bcrypt.hash(password, 5)
            const newUser = await User.create({email, password: hashPassword})

            const token = await jwtGenerator(newUser.id, email, newUser.role)

            res.json({token})

           }
        }
    }

    async login (req, res) {
        const {email, password} = req.body

        const candidate = await User.findOne({
            where: {email}
        })

        if(!candidate) {
            res.status(404).json({
                message: 'User does not exists'
            })
        } else {
            const isPassword = await bcrypt.compare(password, candidate.password)
            if (!isPassword) {
                res.status(404).json({
                    message: 'Invalid credentials'
                })
            } else {
                const token = jwtGenerator(candidate.id, email, candidate.role)

                res.json({token, candidate})
            }
        }
    }

    async auth (req, res, next) {
        const token = jwtGenerator(req.user.id, req.user.email, req.user.role)
        res.json({
            token
        })
    }
}

export default new UserController()