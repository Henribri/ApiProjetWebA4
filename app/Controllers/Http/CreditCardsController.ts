import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import jwt from 'jsonwebtoken'
import CreditCard from 'App/Models/CreditCard';
import User from 'App/Models/User';
export default class CreditCardsController {

    public async index ({response}:HttpContextContract){
        try{
            const CreditCards = await CreditCard.query()
            return response.status(200).json({CreditCards})
        }catch(err){
            return response.status(500).json({err})
        }

    }

    public async getById ({params,response}:HttpContextContract){
        try{
            const creditcard = await CreditCard.findOrFail(params.id);

            return response.status(200).json({creditcard})
        }catch(err){
            return response.status(500).json({err})
        }

    }

    public async create({ request , response }:HttpContextContract){
        try {
            const user = await User.findOrFail(request.body()['user_id'])
            if (user){
                const creditcard = await CreditCard.create({credit_card_type: request.body()['credit_card_type'], credit_card_num : request.body()['credit_card_num'] });
                await user.related('credit_card').associate(creditcard)
                return response.status(200).json({creditcard})
            }else{
                return response.status(500).json({message : 'error wrong user id'})
            }

        }catch(err){
            return response.status(500).json({err})
        }

    }

    public async update ({request, response, params}:HttpContextContract){
        try{
            const creditcard = await CreditCard.findOrFail(params.id);
            creditcard.merge(request.body());
            await creditcard.save();
            return response.status(200).json({creditcard})
        }catch(err){
            return response.status(500).json({err})
        }

    }

    public async delete({response, params}:HttpContextContract){
        try{
            const creditcard = await CreditCard.findOrFail(params.id);
            await creditcard.delete();
            return response.status(200).json({creditcard})
        }catch(err){
            return response.status(500).json({err})
        }

    }
}
