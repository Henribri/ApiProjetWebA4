import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Menu from "App/Models/Menu";

export default class MenusController {

    public async getOneMenu ({request, response}:HttpContextContract){
        try {            
            return await Menu.findOne({_id:request.input('menu_id')})
        }catch(err){
            return response.status(502)
        }
    }

    public async getAllMenus ({response}: HttpContextContract){
        try{
            return await Menu.find()
        }catch(err){
            return response.status(502)
        }
    }

    public async getMenusByRestorer ({request, response}:HttpContextContract){
        try{
            return await Menu.find({restorer:request.input("restorer_id")})
        }catch(err){
            return response.status(502)
        }
    }

    public async createMenu ({request, response}){
        try{
            const menu = await new Menu(request.body())
            menu.save()
            return response.ok("Menu created")
        }catch(err){
            return response.status(502)
        }
    }

    public async editMenu ({request, response}:HttpContextContract){
        try{
            await Menu.updateOne({_id:request.input("menu_id")}, request.body())
            return response.ok("Menu edited")
        }catch(err){
            return response.status(502)
        }
    }

    public async deleteMenu ({request, response}:HttpContextContract){
        try{
            await Menu.deleteOne({_id:request.input("menu_id")})
            return response.ok("Menu deleted")
        }catch(err){
            return response.status(502)
        }
    }

}
