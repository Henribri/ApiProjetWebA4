import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Address from "App/Models/Address";
import Restorer from 'App/Models/Restorer';
import User from 'App/Models/User';

export default class AddressesController {

    public async index ({response}:HttpContextContract){
        try{
            const addresses = await Address.query()
            return response.status(200).json({addresses})
        }catch(err){
            return response.status(500).json({err})
        }

    }

    public async getById ({params,response}:HttpContextContract){
        try{
            const address = await Address.findOrFail(params.id);
            return response.status(200).json({address})
        }catch(err){
            return response.status(500).json({err})
        }

    }

    public async createDeliveryAdd({ request , response }:HttpContextContract){

        try {
            const user = await User.findOrFail(request.body()['user_id'])
            if (user){
                const address = await Address.create({address_city: request.body()['address_city'], address_street: request.body()['address_street'], address_street_number: request.body()['address_street_number'], address_postal_code:request.body()['address_postal_code'] });
                await user.related('delivery_address_id').associate(address)
                return response.status(201).json({address})
            }else{
                return response.status(500).json({message:'error wrong user id'})
            }

        } catch(err){
            return response.status(500).json({err})
        }

    }

    public async createPaymentAdd({ request , response }:HttpContextContract){

        try {
            const user = await User.findOrFail(request.body()['user_id'])
            if (user){
                const address = await Address.create({address_city: request.body()['address_city'], address_street: request.body()['address_street'], address_street_number: request.body()['address_street_number'], address_postal_code:request.body()['address_postal_code'] });
                await user.related('payement_address_id').associate(address)
                return response.status(201).json({address})
            }else{
                return response.status(500).json({message:'error wrong user id'})
            }

        } catch(err){
            return response.status(500).json({err})
        }

    }

    public async update ({request, response, params}:HttpContextContract){
        try {
            const address = await Address.findOrFail(params.id);
            address.merge(request.body());
            await address.save();
            return response.status(200).json({address})
        }catch(err){
            return response.status(500).json({err})
        }

    }

    public async delete({response, params}:HttpContextContract){
        try{
            const address = await Address.findOrFail(params.id);
            await address.delete();
            return response.status(200).json({address})
        }catch(err){
            return response.status(500).json({err})
        }


    }
}
