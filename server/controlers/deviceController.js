import * as uuid from 'uuid'  
import path from 'path'
import { Device, DeviceInfo } from '../models/models.js'

class DeviceController {
    async create (req, res) {
        try {
            const {name, price, info, brandId, typeId} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + '.jpg'

        img.mv(path.resolve('', '.', 'static', fileName))  
      
        const device = await Device.create({name, price, brandId, typeId, image: fileName})

        if(info) {
            info = JSON.parse(info)
            info.forEach(i => {
                DeviceInfo.create({
                    title: i.title,
                    description: i.description,
                    devideId: device.id
                })
            })
        }

        return res.json(device) 
        } catch (error) {
            console.log(error)
        }
    }

    async getAll (req, res) {
        try {
            let {brandId, typeId, page, limit} = req.query

            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit 

            let devices
            if(!brandId && !typeId) {
                devices = await Device.findAndCountAll({limit, offset})
            }
            if(brandId && !typeId) {
                devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
            }
            if(!brandId && typeId) {
                devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
            }
            if(brandId && typeId) {
                devices = await Device.findAndCountAll({where: {typeId, brandId}, limit, offset})
            }

            res.json(devices)
        } catch (error) {
            console.log(error)
        }
    }

    async getOne (req, res) {
        const {id} = req.params

        const device = await Device.findOne({
            where: {id: id},
            include: [{model: DeviceInfo, as: 'info'}]
        })

        return res.json(device)
    }

}

export default new DeviceController() 