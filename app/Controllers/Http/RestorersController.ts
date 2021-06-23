import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';
import Restorer from 'App/Models/Restorer';
import Address from 'App/Models/Address';


export default class RestorersController {
    public async index ({response}:HttpContextContract){
        try{
            const CreditCards = await Restorer.query()
            return response.status(200).json({CreditCards})
        }catch(err){
            return response.status(500).json({err})
        }

    }

    public async getById ({params,response}:HttpContextContract){
        try{
            const restorer = await Restorer.findOrFail(params.id);

            return response.status(200).json({restorer})
        }catch(err){
            return response.status(500).json({err})
        }

    }

    public async create({ request , response }:HttpContextContract){
        try {
            const user = await User.findOrFail(request.body()['user_id'])
            if (user){
                const restorer = await Restorer.create({restorer_name: request.body()['restorer_name']});
                const address = await Address.create({address_city: request.body()['address_city'], address_street: request.body()['address_street'], address_street_number: request.body()['address_street_number'], address_postal_code:request.body()['address_postal_code'] })
                await restorer.related('address').associate(address)
                await user.related('restorer').associate(restorer)
                return response.status(200).json({restorer})
            }else{
                return response.status(500).json({message : 'error wrong user id'})
            }

        }catch(err){
            return response.status(500).json({err})
        }

    }

    public async update ({request, response, params}:HttpContextContract){
        try{
            const restorer = await Restorer.findOrFail(params.id);
            restorer.merge(request.body());
            await restorer.save();
            return response.status(200).json({restorer})
        }catch(err){
            return response.status(500).json({err})
        }

    }

    public async delete({response, params}:HttpContextContract){
        try{
            const restorer = await Restorer.findOrFail(params.id);
            await restorer.delete();
            return response.status(200).json({restorer})
        }catch(err){
            return response.status(500).json({err})
        }

    }
}
