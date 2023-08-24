import { AppState } from "../AppState.js";
import { House } from "../models/house.js";
import { saveState } from "../utils/Store.js";




class HousesServices{
    createCar(formData){
        let newHouse = new House(formData)
        AppState.cars.push(newHouse)
        console.log(AppState.cars)
        AppState.emit('emit')
    }

}

export const housesServices = new HousesServices()