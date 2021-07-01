import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Command from "App/Models/Command";
import jwt from 'jsonwebtoken'


export default class CommandsController {


    /** 
     * @api {get} /command Request command information.
     * @apiName getCommand
     * @apigroup Command
     * @apiParam {String} command_id Id of command.
     * @apiSuccess {Object} command Command information found.
     * @apiError (502) Error Error to request database.
     */
    public async getCommand ({request, response}:HttpContextContract){
        try {            
            return await Command.findOne({_id:request.input('command_id')})
        }catch(err){
            return response.status(502)
        }
    }

    /**
     * @api {post} /command Create a new Command.
     * @apiName createCommand
     * @apiGroup Command
     * @apiParam (Authorization){String} Bearer Token value in authorisation Bearer.
     * @apiParam (Body) {Object} command Command object.
     * @apiSuccess response Command created.
     * @apiError (502) Error Error to request database.
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
     * @apiParam {String} command_id Id of command.
     * @apiParam (Authorization){String} Bearer Token value in authorisation Bearer.
     * @apiParam (Body) {Object} command Command object.
     * @apiSuccess response Command edited.
     * @apiError (502) Error Error to request database.
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
     * @apiParam {String} command_id Id of command.
     * @apiParam (Authorization){String} Bearer Token value in authorisation Bearer.
     * @apiSuccess response Command deleted.
     * @apiError (502) Error Error to request database.
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
     * @apiParam {String} command_id Id of command.
     * @apiParam (Authorization){String} Bearer Token value in authorisation Bearer.
     * @apiSuccess response Command paid.
     * @apiError (502) Error Error to request database.
     */
    public async payCommand ({request, response}:HttpContextContract){
        try{
            await Command.updateOne({_id:request.input('command_id')}, {paid:true}) 
            return response.ok("Command paid")      
        }catch(err){
            return response.status(502)
        }
               
    }

        /**
         * @api {patch} /validate_command Validate a Command.
         * @apiName validateCommand
         * @apiGroup Command
         * @apiParam {String} command_id Id of command.
         * @apiParam (Authorization){String} Bearer Token value in authorisation Bearer.
         * @apiSuccess response Command validated.
         * @apiError (502) Error Error to request database.
         */
         public async validateCommand ({request, response}:HttpContextContract){
            try{
                await Command.updateOne({_id:request.input('command_id')}, {validated:true}) 
                return response.ok("Command validated")      
            }catch(err){
                return response.status(502)
            }
                   
        }


    /*    Historic requests    */

    /**
     * @api {get} /get_historic_command Get Commands of a user.
     * @apiName getHistoricCommand
     * @apiGroup Command
     * @apiParam {Number} client_id Id of command.
     * @apiSuccess {Object[]} list_command Historic of commands.
     * @apiError (502) Error Error to request database.
     */
    public async getHistoricCommand ({request, response}){
        try{
            const token = request.header('authorization').split(" ")
            const user_id=jwt.verify(token[1], "TOKEN_PRIVATE_KEY").user_id
            return response.send(await Command.find({'info.client.user_id':user_id}))
        }catch(err){
            return response.status(502)
        }
          
    }

    /**
     * @api {delete} /delete_historic_command Delete Commands historic.
     * @apiName deleteHistoricCommand
     * @apiGroup Command
     * @apiParam (Authorization){String} Bearer Token value in authorisation Bearer.
     * @apiParam (Body) {String[]} list_command_id List of id of command.
     * @apiSuccess response Historic deleted.
     * @apiError (502) Error Error to request database.
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
