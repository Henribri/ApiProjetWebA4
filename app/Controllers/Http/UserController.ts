import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'


export default class UsersController {

    public async index ({response}:HttpContextContract){
        const users = await User.query()
        return response.json({users})
    }

    public async getById ({params,response}:HttpContextContract){
        const user = await User.findOrFail(params.id);

        return response.json({user})
    }

    public async create({ request , response }:HttpContextContract){
        const user = await User.create({user_name:request.body()['user_name'],user_lastname:request.body()['user_lastname'],user_email:request.body()['user_email'],user_password:request.body()['user_password'],user_phone_number:request.body()['user_phone_number']});

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
