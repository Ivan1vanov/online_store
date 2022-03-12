import { Brand } from "../models/models.js"

class BrandControler {
    async create (req, res) {
        const {name} = req.body
        const newBrand = await Brand.create({name})
        res.json(newBrand)
    }

    async getAll (req, res) {
        const brands = await Brand.findAll()
        res.json(brands)
    }

}

export default new BrandControler()