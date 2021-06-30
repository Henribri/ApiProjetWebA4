import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import jwt from 'jsonwebtoken'
import CreditCard from 'App/Models/CreditCard';
import User from 'App/Models/User';
export default class CreditCardsController {

    public async index ({response,request}:HttpContextContract){
        try{
            const user_id = this.getId(request)
            if (user_id){
                const user = await User.findOrFail(user_id)
                if (user.role.role_id == 5 || user.role.role_id == 4){
                    const CreditCards = await CreditCard.query()
                    return response.status(200).json({CreditCards})
                }else{
                    return response.status(403).json({message: "Error you don't have the correct permissions"})
                }
            }else{
                return response.status(500).json({err:"jwt token error"})
            }
        }catch(err){
            return response.status(500).json({err})
        }

    }

    public async getById ({response,request}:HttpContextContract){
        try{
            const user_id = this.getId(request)
            if (user_id){
                const user = await User.findOrFail(user_id)
                if (user){
                    const creditcard = await CreditCard.findOrFail(user.fk_credit_card_id);
                    return response.status(200).json({creditcard})
                }else{
                    return response.status(403).json({message:'error wrong user id'})
                }
            }else{
                return response.status(500).json({err:"jwt token error"})
            }


        }catch(err){
            return response.status(500).json({err})
        }

    }

    public async create({ request , response }:HttpContextContract){
        try {
            const user_id = this.getId(request)
            if (user_id){
                const user = await User.findOrFail(user_id)
                if (user.fk_credit_card_id==null){
                    const creditcard = await CreditCard.create({credit_card_type: request.body()['credit_card_type'], credit_card_num : request.body()['credit_card_num'] });
                    await user.related('credit_card').associate(creditcard)
                    return response.status(200).json({creditcard})
                }else if(user.fk_credit_card_id!=null){
                    return response.status(400).json({message : 'Error this user has already a credit card update it instead'})
                }else{
                    return response.status(403).json({message : 'error wrong user id'})
                }
            }else{
                return response.status(500).json({err:"jwt token error"})
            }


        }catch(err){
            return response.status(500).json({err})
        }

    }

    public async update ({request, response}:HttpContextContract){
        try{
            const user_id = this.getId(request)
            if (user_id){
                const user = await User.findOrFail(user_id)
                if (user.fk_credit_card_id!=null){
                    const creditcard = await CreditCard.findOrFail(user.fk_credit_card_id);
                    creditcard.merge(request.body());
                    await creditcard.save();
                    return response.status(200).json({creditcard})
                }else if(user){
                    return response.status(400).json({message : 'Error this user does not have any credit cards'})
                }else{
                    return response.status(403).json({message : 'error wrong user id'})
                }
            }else{
                return response.status(500).json({err:"jwt token error"})
            }

        }catch(err){
            return response.status(500).json({err})
        }

    }

    public async delete({response, request}:HttpContextContract){
        try{
            const user_id = this.getId(request)
            if (user_id){
                const user = await User.findOrFail(user_id)
                if (user.fk_credit_card_id!=null){
                    const creditcard = await CreditCard.findOrFail(user.fk_credit_card_id);
                    await creditcard.delete();
                    return response.status(200).json({creditcard})
                }else if(user){
                    return response.status(400).json({message : 'Error this user does not have any credit cards'})
                }else{
                    return response.status(403).json({message : 'error wrong user id'})
                }
            }else{
                return response.status(500).json({err:"jwt token error"})
            }

        }catch(err){
            return response.status(500).json({err})
        }

    }
    public  getId(request){
        const token =  request.header('authorization')?.split(" ")
        try{
            const user_id = jwt.verify(token[1], 'TOKEN_PRIVATE_KEY')['user_id']
            return user_id
        }catch{
            return false
        }

    }
}
