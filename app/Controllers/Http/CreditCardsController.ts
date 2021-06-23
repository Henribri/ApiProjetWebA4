import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import CreditCard from 'App/Models/CreditCard';
export default class CreditCardsController {

    public async index ({response}:HttpContextContract){
        const CreditCards = await CreditCard.query()
        return response.json({CreditCards})
    }

    public async getById ({params,response}:HttpContextContract){
        const creditcard = await CreditCard.findOrFail(params.id);

        return response.json({creditcard})
    }

    public async create({ request , response }:HttpContextContract){
        const creditcard = await CreditCard.create({credit_card_type: request.body()['credit_card_type'], credit_card_num : request.body()['credit_card_num'] });
        return response.json({creditcard})
    }

    public async update ({request, response, params}:HttpContextContract){
        const creditcard = await CreditCard.findOrFail(params.id);
        creditcard.merge(request.body());
        await creditcard.save();
        return response.json({creditcard})
    }

    public async delete({response, params}:HttpContextContract){
        const creditcard = await CreditCard.findOrFail(params.id);
        await creditcard.delete();

        return response.json({creditcard})
    }
}
