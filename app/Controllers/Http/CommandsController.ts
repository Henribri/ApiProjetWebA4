import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Command from "App/Models/Command";



export default class CommandsController {


    /* Command requests */

    /** 
     * @api {get} /get_command Request Command information.
     * @apiName get_command
     * @apigroup Command
     * 
     * @apiParam {Number} id Commands unique ID.
     * 
     * @apiSuccess {Command} Command found.
     * 
     * @apiError Command not found.  
     */
    public async get_command ({request, response}:HttpContextContract){
        try {            
            return await Command.findOne({_id:request.input('command_id')})
        }catch(err){
            return response.status(502)
        }
    }

    /**
     * @api {post} /create Create a new Command.
     * @apiName create
     * @apiGroup Command
     * 
     * @apiBody {Command} Command object.
     * 
     * @apiSuccess Command created.
     * @apiError Data given are wrong. 
     */
    public async create ({request, response}:HttpContextContract){
        try{
            const command = new Command(request.body())    
            command.save()
            return response.ok("Command created")
        }catch(err){
            return response.status(502)
        }

    }
    
    /**
     * @api {put} /edit Edit a Command.
     * @apiName edit
     * @apiGroup Command
     * 
     * @apiParam {Number} id Commands unique ID.
     * @apiBody {Command} new Command.
     * 
     * @apiSuccess Command edited.
     * @apiError Command not found.
     */
    public async edit ({request, response}:HttpContextContract){
        try{
            await Command.updateOne({_id:request.input('command_id')}, request.body())
            return response.ok("Command edited")   
        }catch(err){
            return response.status(502)
        }
    }

    /**
     * @api {delete} /delete Delete a Command.
     * @apiName delete
     * @apiGroup Command
     * 
     * @apiParam {Number} id Commands unique ID.
     * 
     * @apiSuccess Command deleted.
     * @apiError Command not found.
     */
    public async delete ({request, response}:HttpContextContract){
        try{
            await Command.deleteOne({_id:request.input('command_id')})
            return response.ok("Command deleted")  
        }catch(err){
            return response.status(502)
        }
        
    }

    /**
     * @api {patch} /pay Pay a Command.
     * @apiName pay
     * @apiGroup Command
     * 
     * @apiParam {Number} id Commands unique ID.
     * 
     * @apiSuccess Command paid.
     * @apiError Command not found.
     */
    public async pay ({request, response}:HttpContextContract){
        try{
            await Command.updateOne({_id:request.input('command_id')}, {paid:true}) 
            return response.ok("Command paid")      
        }catch(err){
            return response.status(502)
        }
               
    }


    /*    Historic requests    */

    /**
     * @api {get} /get_hitoric Get Commands of a user.
     * @apiName get_historic
     * @apiGroup Command
     * 
     * @apiParam {Number} id Client unique ID.
     * 
     * @apiSuccess Commands historic found.
     * @apiError Commands not found.
     */
    public async get_historic ({request, response}:HttpContextContract){
        try{
            return await Command.find({'client.id':request.input('client_id')})
        }catch(err){
            return response.status(502)
        }
          
    }

    /**
     * @api {delete} /delete_historic Delete Commands historic.
     * @apiName delete
     * @apiGroup Command
     * 
     * @apiBody {[Number]} historic Commands that must be deleted.
     * 
     * @apiSuccess Selected Commands historic deleted.
     * @apiError Commands not found.
     */
    public async delete_historic ({request, response}:HttpContextContract){
        try{
            await Command.deleteOne({_id: { $in: request.body().delete_historic}})
            return response.ok("Commands deleted")
        }catch(err){
            return response.status(502)
        }
            
    }
}
