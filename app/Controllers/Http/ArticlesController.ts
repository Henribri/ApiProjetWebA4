import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Article from 'App/Models/Article'
export default class ArticlesController {

    /* Article requests */

    // Cherche un article
     public async getOneArticle ({request, response}:HttpContextContract){
        try {            
            return await Article.findOne({_id:request.input('article_id')})
        }catch(err){
            return response.status(502)
        }
    }

    public async getAllArticles ({response}: HttpContextContract){
        try{
            return await Article.find()
        }catch(err){
            return response.status(502)
        }
    }

    public async getArticlesByType({request, response} : HttpContextContract){
        try{
            return await Article.find({type:request.input('article_type')})
        }catch(err){
            return response.status(502)
        }
    }

    public async getArticlesByRestorer ({request, response}:HttpContextContract){
        try{
            return await Article.find({restorer:request.input("restorer_id")})
        }catch(err){
            return response.status(502)
        }
    }


    // Creer un article
    public async createArticle ({request, response}:HttpContextContract){
        try{
            const article = new Article(request.body())    
            article.save()
            return response.ok("Article created")
        }catch(err){
            return response.status(502)
        }

    }
    

    // Edit un article
    public async editArticle ({request, response}:HttpContextContract){
        try{
            await Article.updateOne({_id:request.input('article_id')}, request.body())
            return response.ok("Article edited")   
        }catch(err){
            return response.status(502)
        }
    }


    public async deleteArticle ({request, response}:HttpContextContract){
        try{
            await Article.deleteOne({_id:request.input('article_id')})
            return response.ok("Article deleted")  
        }catch(err){
            return response.status(502)
        }
        
    }






}
