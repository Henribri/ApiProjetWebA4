// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
export default class UsersController {

    public async create(){       
        return await User.create({ user_email: 'Henri', password:'youpi' })
    }
    
}
