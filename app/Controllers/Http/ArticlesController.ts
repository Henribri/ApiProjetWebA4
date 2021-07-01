import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Article from 'App/Models/Article'
export default class ArticlesController {


    

     /**
     * @api {get} /article Request article information
     * @apiName getOneArticle
     * @apiGroup Article
     * @apiParam {String} article_id Id of article.
     * @apiSuccess {Object} article Article object.
     * @apiError (502) Error Error to request database.
     */
     public async getOneArticle ({request, response}:HttpContextContract){
        try {            
            return await Article.findOne({_id:request.input('article_id')})
        }catch(err){
            return response.status(502)
        }
    }

     /**
     * @api {get} /articles Request all articles
     * @apiName getAllArticles
     * @apiGroup Article
     * @apiSuccess {Object[]} list_article List of articles.
     * @apiError (502) Error Error to request database.
     */
    public async getAllArticles ({response}: HttpContextContract){
        try{
            return await Article.find()
        }catch(err){
            return response.status(502)
        }
    }


     /**
     * @api {get} /articles-type Request some articles by type
     * @apiName getArticlesByType
     * @apiGroup Article
     * @apiParam {String} article_type Type of articles.
     * @apiSuccess {Object[]} list_article List of articles.
     * @apiError (502) Error Error to request database.
     */
    public async getArticlesByType({request, response} : HttpContextContract){
        try{
            return await Article.find({type:request.input('article_type')})
        }catch(err){
            return response.status(502)
        }
    }


     /**
     * @api {get} /articles-restorer Request some articles by restorer
     * @apiName getArticlesByRestorer
     * @apiGroup Article
     * @apiParam {String} restorer_id Id of restorer.
     * @apiSuccess {Object[]} list_article List of articles.
     * @apiError (502) Error Error to request database.
     */
    public async getArticlesByRestorer ({request, response}:HttpContextContract){
        try{
            return await Article.find({restorer:request.input("restorer_id")})
        }catch(err){
            return response.status(502)
        }
    }


     /**
     * @api {post} /article Create a new article
     * @apiName createArticle
     * @apiGroup Article
     * @apiParam (Body) {Object} article Article object.
     * @apiParam (Authorization){String} Bearer Token value in authorisation Bearer.
     * @apiSuccess response Article created.
     * @apiError (502) Error Error to request database.
     */
    public async createArticle ({request, response}:HttpContextContract){
        try{
            await Article.create(request.body())
            return response.ok("Article created")
        }catch(err){
            return response.status(502)
        }

    }
    

     /**
     * @api {put} /article Edit an article
     * @apiName editArticle
     * @apiGroup Article
     * @apiParam {String} article_id  Id of article.
     * @apiParam (Body) {Object} article Article object.
     * @apiParam (Authorization){String} Bearer Token value in authorisation Bearer.
     * @apiSuccess response Articles edited.
     * @apiError (502) Error to request database.
     */
    public async editArticle ({request, response}:HttpContextContract){
        try{
            await Article.updateOne({_id:request.input('article_id')}, request.body())
            return response.ok("Article edited")   
        }catch(err){
            return response.status(502)
        }
    }

     /**
     * @api {delete} /article Delete an article
     * @apiName deleteArticle
     * @apiGroup Article
     * @apiParam {String} article_id Id of article.
     * @apiParam (Authorization){String} Bearer Token value in authorisation Bearer.
     * @apiSuccess response Articles deleted.
     * @apiError (502) Error to request database.
     */
    public async deleteArticle ({request, response}:HttpContextContract){
        try{
            await Article.deleteOne({_id:request.input('article_id')})
            return response.ok("Article deleted")  
        }catch(err){
            return response.status(502)
        }
        
    }






}
