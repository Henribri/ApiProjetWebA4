import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Command from "App/Models/Command";



export default class CommandsController {


    /* Command requests */

    public async get_command ({request, response}:HttpContextContract){
        try {            
            return await Command.findOne({_id:request.input('command_id')})
        }catch(err){
            return response.status(502)
        }
    }

    public async create ({request, response}:HttpContextContract){
        try{
            const command = new Command(request.body())    
            command.save()
            return response.ok("Command created")
        }catch(err){
            return response.status(502)
        }

    }
    
    public async edit ({request, response}:HttpContextContract){
        try{
            await Command.updateOne({_id:request.input('command_id')}, request.body())
            return response.ok("Command edited")   
        }catch(err){
            return response.status(502)
        }
    }

    public async delete ({request, response}:HttpContextContract){
        try{
            await Command.deleteOne({_id:request.input('command_id')})
            return response.ok("Command deleted")  
        }catch(err){
            return response.status(502)
        }
        
    }

    public async pay ({request, response}:HttpContextContract){
        try{
            await Command.updateOne({_id:request.input('command_id')}, {paid:true}) 
            return response.ok("Command paid")      
        }catch(err){
            return response.status(502)
        }
               
    }


    /*    Historic requests    */

    public async get_historic ({request, response}:HttpContextContract){
        try{
            return await Command.find({'client.id':request.input('client_id')})
        }catch(err){
            return response.status(502)
        }
          
    }

    public async delete_historic ({request, response}:HttpContextContract){
        try{
            await Command.deleteOne({_id: { $in: request.body().delete_historic}})
            return response.ok("Commands deleted")
        }catch(err){
            return response.status(502)
        }
            
    }
}
