import Route from '@ioc:Adonis/Core/Route'


Route.get('', ()=>{
    return ''
})


/* Routes for ArticlesController */
Route.get('articles', 'ArticlesController.getAllArticles')

Route.get('article', 'ArticlesController.getOneArticle')

Route.get('articles-type', 'ArticlesController.getArticlesByType')

Route.get('articles-restorer', 'ArticlesController.getArticlesByRestorer')


/* Routes for MenusController */
Route.get('menus', 'MenusController.getAllMenus')

Route.get('menu', 'MenusController.getOneMenu')

Route.get('menus-restorer', 'MenusController.getMenusByRestorer')




Route.group(()=>{
    Route.post('menu','MenusController.createMenu')
    Route.put('menu', 'MenusController.editMenu')
    Route.delete('menu', 'MenusController.deleteMenu')
    Route.post('article','ArticlesController.createArticle')
    Route.put('article', 'ArticlesController.editArticle')
    Route.delete('article', 'ArticlesController.deleteArticle')
}).middleware('auth')