import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Delivery from "App/Models/Delivery";

export default class DeliveriesController {

    public async getOneDelivery({request, response}:HttpContextContract){
        try{
            return await Delivery.find({_id:request.input("delivery_id")})
        }catch(err){
            return response.status(502)
        }
    }


    public async getAllDeliveries({request, response}:HttpContextContract){
        try{
            return await Delivery.find()
        }catch(err){
            return response.status(502)
        }
    }


    public async updateDelivery({request, response}:HttpContextContract){
        try{
            await Delivery.updateOne({_id:request.input("delivery_id")}, request.body())
            return response.ok("Delivery update")
        }catch(err){
            return response.status(502)
        }
    }


    public async createDelivery({request, response}:HttpContextContract){
        try{
            const delivery = await Delivery.create(request.body())
            delivery.save()
            return response.ok("Delivery created")
        }catch(err){
            return response.status(502)
        }
    }


}
