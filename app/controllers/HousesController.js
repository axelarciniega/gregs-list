import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { housesServices } from "../services/HousesServices.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";



function _drawHouses(){
    let houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.HouseTemplate)
    setHTML('houses',content)
}


export class HousesController{
    constructor(){
        console.log('we got houses')
    _drawHouses()
    }

    createCar(){
        window.event.preventDefault()
        const formEvent = window.event.target
        console.log('form event', formEvent)
        const formData = getFormData(formEvent)
        // @ts-ignore
        formEvent.reset()
        housesServices.createCar(formData)
    }









}