import Route from '@ioc:Adonis/Core/Route'


Route.get('test', ()=>{
    return 'PAGE DE TEST'
})


/* Routes for ArticlesController */
Route.get('get_all_articles', 'ArticlesController.getAllArticles')

Route.get('get_one_article', 'ArticlesController.getOneArticle')

Route.get('get_articles_by_type', 'ArticlesController.getArticlesByType')

Route.post('create_article','ArticlesController.createArticle')

Route.put('edit_article', 'ArticlesController.editArticle')

Route.delete('delete_article', 'ArticlesController.deleteArticle')


/* Routes for MenusController */
Route.get('get_all_menus', 'MenusController.getAllMenus')

Route.get('get_one_menu', 'MenusController.getOneMenu')

Route.get('get_menus_by_restorer', 'MenusController.getMenusByRestorer')

Route.post('create_menu','MenusController.createMenu')

Route.put('edit_menu', 'MenusController.editMenu')

Route.delete('delete_menu', 'MenusController.deleteMenu')