// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Command from "App/Models/Command";
import { req } from "pino-std-serializers";


export default class CommandsController {


    public async get_command ({request}){

        return await Command.findOne({_id:request.input('command_id')})

    }

    public async create ({request}){

        const command = new Command(request.body())    
        command.save()
    }
    
    public async edit ({request}){

        await Command.updateOne({_id:request.input('command_id')}, request.body())

        
    }

    public async delete ({request}){

        await Command.deleteOne({_id:request.input('command_id')})

    }

    public async pay ({request}){

        await Command.updateOne({_id:request.input('command_id')}, request.body())
        
    }

    public async get_historic ({request}){

        const historic = await Command.find({'client.id':request.input('client_id')})

        return historic

    
    }

    public async delete_historic ({request}){

        await Command.deleteOne({_id: { $in: request.body().delete_historic}})
    
    }
}
