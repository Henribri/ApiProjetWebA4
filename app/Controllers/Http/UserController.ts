import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import CreditCard from 'App/Models/CreditCard'
import Address from 'App/Models/Address'
import Role from 'App/Models/Role'
import Restorer from 'App/Models/Restorer'
import jwt from 'jsonwebtoken'


export default class UsersController {


    /**
     * @api {get} /users Request all users
     * @apiName index
     * @apiGroup User
     * @apiSuccess {Object} user object.
     * @apiError (500) Error Error to request database.
     * @apiError (403) Error you don't have permission.
     * @apiError (400) wrong user.
     */
    public async index ({response,request}:HttpContextContract){
        try{
            const user_id = this.getId(request)
            if (user_id){
                const user = await User.findOrFail(user_id)
                if (user.role.role_id == 5 || user.role.role_id == 4){
                    const users = await User.query()
                    .preload('role')
                    .preload('credit_card')
                    .preload('delivery_address_id')
                    .preload('payment_address_id')
                    .preload('restorer')
                    return response.status(200).json({users})
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

    /**
     * @api {get} /user Request a specific user thanks to his token
     * @apiName getById
     * @apiGroup User
     * @apiParam {Integer} user_id of the user
     * @apiSuccess {Object} user object.
     * @apiError (500) Error Error to request database.
     * @apiError (403) Error Error wrong user ID.
     */
    public async getById ({response,request,params}:HttpContextContract){
        try{
            const user_id = this.getId(request)
            console.log(user_id)
            if (user_id){
                const user = await User.findBy('user_id',user_id)
                console.log(user)
                return response.status(200).json({user})
            }else{
                return response.status(500).json({err:"jwt token error"})
            }
        }catch(err){
            return response.status(500).json({err})
        }

    }

    /**
     * @api {post} /user/client create a user with the client role
     * @apiName createClient
     * @apiGroup User
     * @apiSuccess {Object} user object.
     * @apiError (500) Error Error to request database.
     * @apiError (400) Error Email already taken.
     */
    public async createClient({ request , response }:HttpContextContract){

        try {
            const existing_user = await User.findBy('user_email', request.body()['user_email'])
            if(!existing_user){
                const user = await User.create({user_firstname:request.body()['user_firstname'],user_lastname:request.body()['user_lastname'],user_email:request.body()['user_email'],password:request.body()['user_password'],user_phone_number:request.body()['user_phone_number'], user_is_supported:false,user_support:false,user_is_delivery:false});

                if (request.body()['delivery_address_city']!= undefined && request.body()['delivery_address_street']!= undefined && request.body()['delivery_address_postal_code']!= undefined && request.body()['delivery_address_street_number']!= undefined){
                    const delivery_address = await Address.create({address_city: request.body()['delivery_address_city'], address_street: request.body()['delivery_address_street'], address_street_number: request.body()['delivery_address_street_number'], address_postal_code:request.body()['delivery_address_postal_code'] });
                    await user.related('delivery_address_id').associate(delivery_address)
                }
                if (request.body()['payment_address_city']!= undefined && request.body()['payment_address_street']!= undefined && request.body()['payment_address_postal_code']!= undefined && request.body()['payment_address_street_number']!= undefined){
                    const payment_address = await Address.create({address_city: request.body()['payment_address_city'], address_street: request.body()['payment_address_street'], address_street_number: request.body()['payment_address_street_number'], address_postal_code:request.body()['payment_address_postal_code'] });
                    await user.related('payment_address_id').associate(payment_address)
                }
                if (request.body()['credit_card_type']!=undefined && request.body()['credit_card_num']!=undefined ){
                    const creditcard = await CreditCard.create({credit_card_type: request.body()['credit_card_type'], credit_card_num : request.body()['credit_card_num'] });
                    await user.related('credit_card').associate(creditcard)
                }
                const role = await Role.findOrFail(1)
                await user.related('role').associate(role)
                return response.status(201).json({user})
            }else{
                return response.status(400).json({message: "email already taken", code:"email"})
            }

        }catch(err){
            return response.status(500).json({err})
        }


    }

    /**
     * @api {post} /user/delivery create a user with the delivery man role
     * @apiName createDelivery
     * @apiGroup User
     * @apiSuccess {Object} user object.
     * @apiError (500) Error Error to request database.
     * @apiError (400) Error Email already taken.
     */
    public async createDelivery({ request , response }:HttpContextContract){
        try {
            const existing_user = await User.findBy('user_email', request.body()['user_email'])
            if(!existing_user){
                const user = await User.create({user_firstname:request.body()['user_firstname'],user_lastname:request.body()['user_lastname'],user_email:request.body()['user_email'],password:request.body()['user_password'],user_phone_number:request.body()['user_phone_number'], user_is_supported:false,user_support:false,user_is_delivery:true});
            const role = await Role.findOrFail(2)
            await user.related('role').associate(role)
            return response.status(201).json({user})
            }else{
                return response.status(400).json({message: "email already taken", code:"email"})
            }
        }catch(err){
            return response.status(500).json({err})
        }

    }

    /**
     * @api {post} /user/delivery create a user with the restorer role
     * @apiName createRestorer
     * @apiGroup User
     * @apiSuccess {Object} user object.
     * @apiError (500) Error Error to request database.
     * @apiError (400) Error Email already taken.
     */
    public async createRestorer({ request , response }:HttpContextContract){
        try {
            const existing_user = await User.findBy('user_email', request.body()['user_email'])
            if(!existing_user){
                const user = await User.create({user_firstname:request.body()['user_firstname'],user_lastname:request.body()['user_lastname'],user_email:request.body()['user_email'],password:request.body()['user_password'],user_phone_number:request.body()['user_phone_number'], user_is_supported:false,user_support:false,user_is_delivery:false});
                const role = await Role.findOrFail(3)
                await user.related('role').associate(role)
                const restorer = await Restorer.create({restorer_name : request.body()['restorer_name']})
                const address = await Address.create({address_city: request.body()['restorer_address_city'], address_street: request.body()['restorer_address_street'], address_street_number: request.body()['restorer_address_street_number'], address_postal_code:request.body()['restorer_address_postal_code'] })
                await restorer.related('address').associate(address)
                await user.related('restorer').associate(restorer)
                return response.status(201).json({user})

            }else{
                return response.status(400).json({message: "email already taken", code:"email"})
            }
        }catch(err){
            return response.status(500).json({err})
        }

    }

    /**
     * @api {put} /user/:id update the specified user
     * @apiName update
     * @apiGroup User
     * @apiParam {Integer} user_id Id of the user.
     * @apiSuccess {Object} user object.
     * @apiError (500) Error Error to request database.
     */
    public async update ({request, response}:HttpContextContract){
        try {
            const user_id = this.getId(request)
            if (user_id){
                const user = await User.findOrFail(user_id)
                user.merge({user_firstname:request.body()['user_firstname'],user_lastname:request.body()['user_lastname'],user_email:request.body()['user_email'],password:request.body()['user_password'],user_phone_number:request.body()['user_phone_number']});
                await user.save();
                return response.status(200).json({user})
            }else{
                return response.status(500).json({err:"jwt token error"})
            }


        }catch(err){
            return response.status(500).json({err})
        }

    }

    /**
     * @api {put} /user/:id update the specified user for sponsoring
     * @apiName updateSponsor
     * @apiGroup User
     * @apiParam {Integer} user_id Id of the user.
     * @apiSuccess {Object} user object.
     * @apiError (500) Error Error to request database.
     * @apiError (400) error this user is already supported or you enter the wrong email
     * @apiError (400) error Unable to find the user or the user is already supporting someone
     */
     public async updateSponsor ({request, response}:HttpContextContract){
        try {
            const user_id = this.getId(request)
            if (user_id){
                const user = await User.findOrFail(user_id)
                const filleul = await User.findBy('user_email', request.body()['filleul_email'])
                if (user.user_support==false && filleul && user.fk_role_id == filleul.fk_role_id){
                    if (filleul.user_is_supported == false){
                        user.user_support = true;
                        await user.save();
                        filleul.user_is_supported = true;
                        await filleul.save();
                    }else{
                        return response.status(400).json({message: "error this user is already supported or you enter the wrong email"})
                    }
                    return response.status(200).json({user})
                }else{
                    return response.status(400).json({message: "error Unable to find the user or the user is already supporting someone"})
                }
            }else{
                return response.status(500).json({err:"jwt token error"})
            }
        }catch(err){
            return response.status(500).json({err})
        }
    }

    /**
     * @api {delete} /user/:id delete the specified user
     * @apiName delete
     * @apiGroup User
     * @apiParam {Integer} user_id  of the user.
     * @apiSuccess {Object} user object.
     * @apiError (500) Error Error to request database.
     * @apiError (403) Wrong user ID.
     */
    public async delete({response,request}:HttpContextContract){
        try{
            const user_id = this.getId(request)
            if (user_id){
                const user = await User.findOrFail(user_id)
                await user.delete();
                return response.status(200).json({user})
            }else{
                return response.status(500).json({err:"jwt token error"})
            }
        }catch(err){
            return response.status(500).json({err: err, message:"wrong user"})
        }

    }

    public  getId(request){
        const token =  request.header('authorization')?.split(" ")
        try{
            let user_id =  jwt.verify(token[1], 'TOKEN_PRIVATE_KEY')['user_id']
            console.log(user_id)
            return user_id
        }catch{
            return false
        }

    }

}
