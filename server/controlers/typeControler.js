import { Type } from "../models/models.js"

class TypeControler {
    async create (req, res) {
        const {name} = req.body
        const newType = await Type.create({name})
        res.json(newType)
    }

    async getAll (req, res) {
        const types = await Type.findAll()
        res.json(types)
    }   

}

export default new TypeControler()