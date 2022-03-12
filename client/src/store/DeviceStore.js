import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'TV'},
            {id: 2, name: 'Phones'},
            {id: 3, name: 'Laptops'},
        ]
        this._brands = [
            {id: 1, name: 'Smasung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenobo'},
            {id: 4, name: 'Lenobo'},
            {id: 5, name: 'Lenobo'},
        ]
        this._devices = [
            {id: 1, name: 'Phone0', price: 1200, rating: 5, image: 'https://media.4rgos.it/s/Argos/9520165_R_SET?$Main768$&w=620&h=620'},
            {id: 2, name: 'Phone1', price: 1200, rating: 5, image: 'https://media.4rgos.it/s/Argos/9520165_R_SET?$Main768$&w=620&h=620'},
            {id: 3, name: 'Phone2', price: 1200, rating: 5, image: 'https://media.4rgos.it/s/Argos/9520165_R_SET?$Main768$&w=620&h=620'},
            {id: 4, name: 'Phone', price: 1200, rating: 5, image: 'https://media.4rgos.it/s/Argos/9520165_R_SET?$Main768$&w=620&h=620'},
      
    ]
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}