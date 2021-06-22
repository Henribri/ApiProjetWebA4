import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Command from "App/Models/Command";



export default class CommandsController {


    /* Command requests */

    /** 
     * @api {get} /get_command Request Command information.
     * @apiName getCommand
     * @apigroup Command
     * 
     * @apiParam {Number} id Commands unique ID.
     * 
     * @apiSuccess {Command} Command found.
     * 
     * @apiError Command not found.  
     */
    public async getCommand ({request, response}:HttpContextContract){
        try {            
            return await Command.findOne({_id:request.input('command_id')})
        }catch(err){
            return response.status(502)
        }
    }

    /**
     * @api {post} /create_command Create a new Command.
     * @apiName createCommand
     * @apiGroup Command
     * 
     * @apiBody {Command} Command object.
     * 
     * @apiSuccess Command created.
     * @apiError Data given are wrong. 
     */
    public async createCommand ({request, response}:HttpContextContract){
        try{
            await Command.create(request.body())
            return response.ok("Command created")
        }catch(err){
            return response.status(502)
        }

    }
    
    /**
     * @api {put} /edit_command Edit a Command.
     * @apiName editCommand
     * @apiGroup Command
     * 
     * @apiParam {Number} id Commands unique ID.
     * @apiBody {Command} new Command.
     * 
     * @apiSuccess Command edited.
     * @apiError Command not found.
     */
    public async editCommand ({request, response}:HttpContextContract){
        try{
            await Command.updateOne({_id:request.input('command_id')}, request.body())
            return response.ok("Command edited")   
        }catch(err){
            return response.status(502)
        }
    }

    /**
     * @api {delete} /delete_command Delete a Command.
     * @apiName deleteCommand
     * @apiGroup Command
     * 
     * @apiParam {Number} id Commands unique ID.
     * 
     * @apiSuccess Command deleted.
     * @apiError Command not found.
     */
    public async deleteCommand ({request, response}:HttpContextContract){
        try{
            await Command.deleteOne({_id:request.input('command_id')})
            return response.ok("Command deleted")  
        }catch(err){
            return response.status(502)
        }
        
    }

    /**
     * @api {patch} /pay_command Pay a Command.
     * @apiName payCommand
     * @apiGroup Command
     * 
     * @apiParam {Number} id Commands unique ID.
     * 
     * @apiSuccess Command paid.
     * @apiError Command not found.
     */
    public async payCommand ({request, response}:HttpContextContract){
        try{
            await Command.updateOne({_id:request.input('command_id')}, {paid:true}) 
            return response.ok("Command paid")      
        }catch(err){
            return response.status(502)
        }
               
    }


    /*    Historic requests    */

    /**
     * @api {get} /get_historic_command Get Commands of a user.
     * @apiName getHistoricCommand
     * @apiGroup Command
     * 
     * @apiParam {Number} id Client unique ID.
     * 
     * @apiSuccess Commands historic found.
     * @apiError Commands not found.
     */
    public async getHistoricCommand ({request, response}:HttpContextContract){
        try{
            return await Command.find({'client.id':request.input('client_id')})
        }catch(err){
            return response.status(502)
        }
          
    }

    /**
     * @api {delete} /delete_historic_command Delete Commands historic.
     * @apiName deleteHistoricCommand
     * @apiGroup Command
     * 
     * @apiBody {[Number]} historic Commands that must be deleted.
     * 
     * @apiSuccess Selected Commands historic deleted.
     * @apiError Commands not found.
     */
    public async deleteHistoricCommand ({request, response}:HttpContextContract){
        try{
            await Command.deleteMany({_id: { $in: request.body().delete_historic}})
            return response.ok("Commands deleted")
        }catch(err){
            return response.status(502)
        }
            
    }
}
