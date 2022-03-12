import express from 'express'
import brandControler from '../controlers/brandControler.js'

const brandRouter = express.Router()

brandRouter.post('/', brandControler.create)
brandRouter.get('/', brandControler.getAll)


export default brandRouter