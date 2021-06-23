import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import CreditCard from 'App/Models/CreditCard'
import Address from 'App/Models/Address'
import Role from 'App/Models/Role'


export default class UsersController {

    public async index ({response}:HttpContextContract){
        const users = await User.query()
        .preload('role')
        .preload('credit_card')
        .preload('delivery_address_id')
        .preload('payement_address_id')
        .preload('restorer')
        return response.json({users})
    }

    public async getById ({params,response}:HttpContextContract){
        const user = await User.findOrFail(params.id);

        return response.json({user})
    }

    public async createClient({ request , response }:HttpContextContract){
        const user = await User.create({user_firstname:request.body()['user_firstname'],user_lastname:request.body()['user_lastname'],user_email:request.body()['user_email'],user_password:request.body()['user_password'],user_phone_number:request.body()['user_phone_number'], user_is_supported:request.body()['user_is_supported'],user_support:request.body()['user_support'],user_is_delivery:false});
        try {
            if (request.body()['credit_card_id']!= null){
                const credit_card = await CreditCard.findOrFail(request.body()['credit_card_id'])
                await user.related('credit_card').associate(credit_card)
            }
            if (request.body()['delivery_address_id']!= null){
                const delivery_address = await Address.findOrFail(request.body()['delivery_address_id'])
                await user.related('delivery_address_id').associate(delivery_address)
            }
            if (request.body()['payment_address_id']!= null){
                const payment_address = await Address.findOrFail(request.body()['payment_address_id'])
                await user.related('payement_address_id').associate(payment_address)
            }
            const role = await Role.findOrFail(1)
            await user.related('role').associate(role)

        }catch(err){
            return response.json({err})
        }



        return response.json({user})
    }

    public async update ({request, response, params}:HttpContextContract){
        const user = await User.findOrFail(params.id);
        user.merge(request.body());
        await user.save();
        return response.json({user})
    }

    public async delete({response, params}:HttpContextContract){
        const user = await User.findOrFail(params.id);
        await user.delete();

        return response.json({user})
    }

}
