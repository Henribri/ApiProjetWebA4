import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';
import Restorer from 'App/Models/Restorer';
import Address from 'App/Models/Address';
import jwt from 'jsonwebtoken'


export default class RestorersController {
    public async index ({response,request}:HttpContextContract){
        try{
            const restorers = await Restorer.query()
            return response.status(200).json({restorers})

        }catch(err){
            return response.status(500).json({err})
        }

    }

    public async getById ({params,request,response}:HttpContextContract){
        try{
            const user = await User.findOrFail(jwt.verify(request.input('jwt'), 'TOKEN_PRIVATE_KEY')['user_id'])
            if (user.fk_role_id!=null){
                const restorer = await Restorer.findOrFail(user.fk_restorer_id);
                return response.status(200).json({restorer})
            }else if(user.fk_restorer_id==null){
                return response.status(200).json({message : 'This user does not have  a restorer create it instead'})
            }else{
                return response.status(403).json({message:'error wrong user id'})
            }

        }catch(err){
            return response.status(500).json({err})
        }

    }

    public async create({ request , response }:HttpContextContract){
        try {
            const user = await User.findOrFail(jwt.verify(request.input('jwt'), 'TOKEN_PRIVATE_KEY')['user_id'])
            if (user.fk_restorer_id==null){
                const restorer = await Restorer.create({restorer_name: request.body()['restorer_name']});
                const address = await Address.create({address_city: request.body()['address_city'], address_street: request.body()['address_street'], address_street_number: request.body()['address_street_number'], address_postal_code:request.body()['address_postal_code'] })
                await restorer.related('address').associate(address)
                await user.related('restorer').associate(restorer)
                return response.status(200).json({restorer})
            }else if(user.fk_restorer_id!=null){
                return response.status(400).json({message : 'Error this user has already a restorer update it instead'})
            }else{
                return response.status(403).json({message : 'error wrong user id'})
            }

        }catch(err){
            return response.status(500).json({err})
        }

    }

    public async update ({request, response, params}:HttpContextContract){
        try{
            const user = await User.findOrFail(jwt.verify(request.input('jwt'), 'TOKEN_PRIVATE_KEY')['user_id'])
            if (user.fk_restorer_id!=null){
                const restorer = await Restorer.findOrFail(user.fk_restorer_id);
                restorer.merge(request.body());
                await restorer.save();
                return response.status(200).json({restorer})
            }else if(user.fk_restorer_id==null){
                return response.status(400).json({message : 'Error this user does not have  a restorer create it instead'})
            }else{
                return response.status(403).json({message:'error wrong user id'})
            }

        }catch(err){
            return response.status(500).json({err})
        }

    }

    public async delete({response,request, params}:HttpContextContract){
        try{
            const user = await User.findOrFail(jwt.verify(request.input('jwt'), 'TOKEN_PRIVATE_KEY')['user_id'])
            if (user.fk_restorer_id!=null){
                const restorer = await Restorer.findOrFail(user.fk_restorer_id);
                await restorer.delete();
                return response.status(200).json({restorer})
            }else if(user.fk_restorer_id==null){
                return response.status(400).json({message : 'Error this user does not have a restorer yet '})
            }else{
                return response.status(500).json({message:'error wrong user id'})
            }

        }catch(err){
            return response.status(500).json({err})
        }

    }
}
