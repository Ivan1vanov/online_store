import express from 'express'
import userControler from '../controlers/userControler.js'
import { auth } from '../middleware/AuthMiddleware.js'

const userRouter = express.Router()

userRouter.post('/registration', userControler.registration)
userRouter.post('/login', userControler.login)
userRouter.get('/auth', auth, userControler.auth)


export default userRouter