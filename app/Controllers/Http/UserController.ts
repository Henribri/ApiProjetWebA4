import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import CreditCard from 'App/Models/CreditCard'
import Address from 'App/Models/Address'
import Role from 'App/Models/Role'
import Restorer from 'App/Models/Restorer'
import { add } from 'winston'


export default class UsersController {

    public async index ({response}:HttpContextContract){
        try{
            const users = await User.query()
            .preload('role')
            .preload('credit_card')
            .preload('delivery_address_id')
            .preload('payement_address_id')
            .preload('restorer')
            return response.status(200).json({users})
        }catch(err){

        }

    }

    public async getById ({params,response}:HttpContextContract){
        try{
            const user = await User.findOrFail(params.id);
            return response.status(200).json({user})
        }catch(err){
            return response.json({err})
        }

    }

    public async createClient({ request , response }:HttpContextContract){

        try {
            const user = await User.create({user_firstname:request.body()['user_firstname'],user_lastname:request.body()['user_lastname'],user_email:request.body()['user_email'],user_password:request.body()['user_password'],user_phone_number:request.body()['user_phone_number'], user_is_supported:request.body()['user_is_supported'],user_support:request.body()['user_support'],user_is_delivery:false});

            if (request.body()['delivery_address_city']!= undefined && request.body()['delivery_address_street']!= undefined && request.body()['delivery_address_postal_code']!= undefined && request.body()['delivery_address_street_number']!= undefined){
                const delivery_address = await Address.create({address_city: request.body()['delivery_address_city'], address_street: request.body()['delivery_address_street'], address_street_number: request.body()['delivery_address_street_number'], address_postal_code:request.body()['delivery_address_postal_code'] });
                await user.related('delivery_address_id').associate(delivery_address)
            }
            if (request.body()['payment_address_city']!= undefined && request.body()['payment_address_street']!= undefined && request.body()['payment_address_postal_code']!= undefined && request.body()['payment_address_street_number']!= undefined){
                const payment_address = await Address.create({address_city: request.body()['payment_address_city'], address_street: request.body()['payment_address_street'], address_street_number: request.body()['payment_address_street_number'], address_postal_code:request.body()['payment_address_postal_code'] });
                await user.related('payement_address_id').associate(payment_address)
            }
            if (request.body()['credit_card_type']!=undefined && request.body()['credit_card_num']!=undefined ){
                const creditcard = await CreditCard.create({credit_card_type: request.body()['credit_card_type'], credit_card_num : request.body()['credit_card_num'] });
                await user.related('credit_card').associate(creditcard)
            }
            const role = await Role.findOrFail(1)
            await user.related('role').associate(role)
            return response.status(201).json({user})
        }catch(err){
            return response.json({err})
        }


    }

    public async createDelivery({ request , response }:HttpContextContract){
        try {
            const user = await User.create({user_firstname:request.body()['user_firstname'],user_lastname:request.body()['user_lastname'],user_email:request.body()['user_email'],user_password:request.body()['user_password'],user_phone_number:request.body()['user_phone_number'], user_is_supported:request.body()['user_is_supported'],user_support:request.body()['user_support'],user_is_delivery:true});
            const role = await Role.findOrFail(2)
            await user.related('role').associate(role)
            return response.status(201).json({user})

        }catch(err){
            return response.status(500).json({err})
        }

    }

    public async createRestorer({ request , response }:HttpContextContract){
        try {
            const user = await User.create({user_firstname:request.body()['user_firstname'],user_lastname:request.body()['user_lastname'],user_email:request.body()['user_email'],user_password:request.body()['user_password'],user_phone_number:request.body()['user_phone_number'], user_is_supported:request.body()['user_is_supported'],user_support:request.body()['user_support'],user_is_delivery:false});
            const role = await Role.findOrFail(3)
            await user.related('role').associate(role)
            const restorer = await Restorer.create(request.body()['restorer_name'])
            const address = await Address.create({address_city: request.body()['restorer_address_city'], address_street: request.body()['restorer_address_street'], address_street_number: request.body()['restorer_address_street_number'], address_postal_code:request.body()['restorer_address_postal_code'] })
            await restorer.related('address').associate(address)
            await user.related('restorer').associate(restorer)
            return response.status(201).json({user})

        }catch(err){
            return response.status(500).json({err})
        }

    }


    public async update ({request, response, params}:HttpContextContract){
        try {
            const user = await User.findOrFail(params.id);
            if (request.body()['user_support']!== false && request.body()['user_is_supported']!==false){
                user.merge({user_firstname:request.body()['user_firstname'],user_lastname:request.body()['user_lastname'],user_email:request.body()['user_email'],user_password:request.body()['user_password'],user_phone_number:request.body()['user_phone_number'], user_is_supported:request.body()['user_is_supported'],user_support:request.body()['user_support']});
                await user.save();
                return response.status(200).json({user})
            }else{
                return response.status(403).json({message: "once true you can't change your support state"})
            }
        }catch(err){
            return response.status(500).json({err})
        }

    }

    public async delete({response, params}:HttpContextContract){
        try{
            const user = await User.findOrFail(params.id);
            await user.delete();
            return response.status(200).json({user})
        }catch(err){

        }

    }

}
