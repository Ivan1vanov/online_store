import express from 'express'
import typeControler from '../controlers/typeControler.js'
import { isAdmin } from '../middleware/RoleMiddleware.js'

const typeRouter = express.Router()

typeRouter.post('/', isAdmin, typeControler.create)
typeRouter.get('/', typeControler.getAll)  


export default typeRouter