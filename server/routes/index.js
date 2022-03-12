import express from 'express'
import brandRouter from './BrandRouter.js'
import deviceRouter from './DeviceRouter.js'
import typeRouter from './TypeRouter.js'
import userRouter from './UserRouter.js'

const router = express.Router()

router.use('/user', userRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
router.use('/type', typeRouter)

export default router