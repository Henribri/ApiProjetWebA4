import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Menu from "App/Models/Menu";

export default class MenusController {



     /**
     * @api {get} /get_one_menu Request information about a menu
     * @apiName getOneMenu
     * @apiGroup Menu
     * @apiParam {String} menu_id Id of a menu.
     * @apiSuccess {Object} menu Menu object.
     * @apiError (502) Error Error to request database.
     */
    public async getOneMenu ({request, response}:HttpContextContract){
        try {            
            return await Menu.findOne({_id:request.input('menu_id')})
        }catch(err){
            return response.status(502)
        }
    }

     /**
     * @api {get} /get_all_menus Request information about all menus
     * @apiName getAllMenu
     * @apiGroup Menu
     * @apiSuccess {Object[]} list_menu List of menus found.
     * @apiError (502) Error Error to request database.
     */
    public async getAllMenus ({response}: HttpContextContract){
        try{
            return await Menu.find()
        }catch(err){
            return response.status(502)
        }
    }

     /**
     * @api {get} /get_menu_by_restorer Request information about a menu by restorer
     * @apiName getMenusByRestorer
     * @apiGroup Menu
     * @apiParam {String} restorer_id Id of a restorer.
     * @apiSuccess {Object[]} list_menu list of menus found.
     * @apiError (502) Error Error to request database.
     */
    public async getMenusByRestorer ({request, response}:HttpContextContract){
        try{
            return await Menu.find({restorer:request.input("restorer_id")})
        }catch(err){
            return response.status(502)
        }
    }


     /**
     * @api {post} /create_menu Create a new menu
     * @apiName createMenu
     * @apiGroup Menu
     * @apiParam (Body) {Object} menu menu object.
     * @apiSuccess response Menu created.
     * @apiError (502) Error Error to request database.
     */
    public async createMenu ({request, response}){
        try{
            await Menu.create(request.body())            
            return response.ok("Menu created")
        }catch(err){
            return response.status(502)
        }
    }

     /**
     * @api {put} /edit_menu Edit a menu
     * @apiName editMenu
     * @apiGroup Menu
     * @apiParam {String} menu_id Id of menu.
     * @apiParam (Body) {Object} menu menu object.
     * @apiSuccess response Menu edited.
     * @apiError (502) Error Error to request database.
     */
    public async editMenu ({request, response}:HttpContextContract){
        try{
            await Menu.updateOne({_id:request.input("menu_id")}, request.body())
            return response.ok("Menu edited")
        }catch(err){
            return response.status(502)
        }
    }

     /**
     * @api {delete} /delete_menu Delete a menu
     * @apiName deleteMenu
     * @apiGroup Menu
     * @apiParam {String} menu_id Id of menu.
     * @apiSuccess response Menu deleted.
     * @apiError (502) Error Error to request database.
     */
    public async deleteMenu ({request, response}:HttpContextContract){
        try{
            await Menu.deleteOne({_id:request.input("menu_id")})
            return response.ok("Menu deleted")
        }catch(err){
            return response.status(502)
        }
    }

}
