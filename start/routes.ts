import Route from '@ioc:Adonis/Core/Route'


Route.get('test', ()=>{
    return 'PAGE DE TEST'
})

Route.get('get_all_articles', 'ArticlesController.getAllArticles')

Route.get('get_one_article', 'ArticlesController.getOneArticle')

Route.get('get_articles_by_type', 'ArticlesController.getArticlesByType')

Route.post('create_article','ArticlesController.createArticle')

Route.put('edit_article', 'ArticlesController.editArticle')

Route.delete('delete_article', 'ArticlesController.deleteArticle')