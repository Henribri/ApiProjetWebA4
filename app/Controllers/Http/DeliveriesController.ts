import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Delivery from "App/Models/Delivery";

export default class DeliveriesController {

    /**
     * @api {get} /get_one_delivery Get information about a delivery.
     * @apiName getOneDelivery
     * @apiGroup Delivery
     * @apiParam {String} delivery_id Id of the delivery.
     * @apiSuccess {Object} delivery Delivery object.
     * @apiError (501) Error Error with database.
     */

    public async getOneDelivery({request, response}:HttpContextContract){
        try{
            return await Delivery.find({_id:request.input("delivery_id")})
        }catch(err){
            return response.status(502)
        }
    }

    /**
     * @api {get} /get_all_deliveries Get information about all deliveries.
     * @apiName getOneDelivery
     * @apiGroup Delivery
     * @apiSuccess {Object[]} list_delivery List of delivery object.
     * @apiError (501) Error Error with database.
     */

    public async getAllDeliveries({request, response}:HttpContextContract){
        try{
            return await Delivery.find()
        }catch(err){
            return response.status(502)
        }
    }

    /**
     * @api {patch} /update_delivery Update information on a delivery.
     * @apiName updateDelivery
     * @apiGroup Delivery
     * @apiParam {String} delivery_id Id of the delivery.
     * @apiParam (Body) {String} delivery Delivery object.
     * @apiSuccess response Delivery updated.
     * @apiError (501) Error Error with database.
     */

    public async updateDelivery({request, response}:HttpContextContract){
        try{
            await Delivery.updateOne({_id:request.input("delivery_id")}, request.body())
            return response.ok("Delivery updated")
        }catch(err){
            return response.status(502)
        }
    }

    /**
     * @api {post} /create_delivery Create a new delivery.
     * @apiName createDelivery
     * @apiGroup Delivery
     * @apiParam (Body) {String} delivery Delivery object.
     * @apiSuccess response Delivery created.
     * @apiError (501) Error Error with database.
     */

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
