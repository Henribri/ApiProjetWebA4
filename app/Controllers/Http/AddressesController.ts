import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Address from "App/Models/Address";
import { add } from 'winston';

export default class AddressesController {

    public async index ({response}:HttpContextContract){
        const addresses = await Address.query()
        return response.json({addresses})
    }

    public async getById ({params,response}:HttpContextContract){
        const address = await Address.findOrFail(params.id);

        return response.json({address})
    }

    public async create({ request , response }:HttpContextContract){
        const address = await Address.create({address_city: request.body()['address_city'], address_street: request.body()['address_street'], address_street_number: request.body()['address_street_number'], address_postal_code:request.body()['address_postal_code'] });
        return response.json({address})
    }

    public async update ({request, response, params}:HttpContextContract){
        const address = await Address.findOrFail(params.id);
        address.merge(request.body());
        await address.save();
        return response.json({address})
    }

    public async delete({response, params}:HttpContextContract){
        const address = await Address.findOrFail(params.id);
        await address.delete();

        return response.json({address})
    }
}
