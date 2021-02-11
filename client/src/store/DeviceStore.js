import {makeAutoObservable} from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {"id": 1, "name": "Холодильники"},
      {"id": 2, "name": "Смартфоны"}
    ]
    this._brands = [
      {"id": 1, "name": "Apple"},
      {"id": 2, "name": "Samsung"}
    ]
    this._devices = [
      {
        "id": 1,
        "name": "12 pro max",
        "price": 1500,
        "rating": 0,
        "img": "91727b2d-b2af-4cbb-8e7b-5c04868ccb41.jpg",
        "typeId": 1,
        "brandId": 1,
        "info": []
      },
      {
        "id": 2,
        "name": "12 pro",
        "price": 1000,
        "rating": 0,
        "img": "fd0cfa55-edd2-4893-a939-7a2694416148.jpg",
        "typeId": 1,
        "brandId": 1,
        "info": []
      },
      {
        "id": 3,
        "name": "s10",
        "price": 500,
        "rating": 0,
        "img": "4ff7a460-1879-460d-bd7e-fa5ca612fd05.jpg",
        "typeId": 1,
        "brandId": 2,
        "info": []
      },
      {
        "id": 4,
        "name": "tu700",
        "price": 300,
        "rating": 0,
        "img": "196ee556-65db-4196-a6c9-6c6f73d87a84.jpg",
        "typeId": 2,
        "brandId": 2,
        "info": []
      }
    ]
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }

  setBrands(brands) {
    this._brands = brands
  }

  setDevices(devices) {
    return this._devices = devices
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

}