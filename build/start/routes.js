"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('test', () => {
    return 'PAGE DE TEST';
});
Route_1.default.get('get_all_articles', 'ArticlesController.getAllArticles');
Route_1.default.get('get_one_article', 'ArticlesController.getOneArticle');
Route_1.default.get('get_articles_by_type', 'ArticlesController.getArticlesByType');
Route_1.default.post('create_article', 'ArticlesController.createArticle');
Route_1.default.put('edit_article', 'ArticlesController.editArticle');
Route_1.default.delete('delete_article', 'ArticlesController.deleteArticle');
Route_1.default.get('get_all_menus', 'MenusController.getAllMenus');
Route_1.default.get('get_one_menu', 'MenusController.getOneMenu');
Route_1.default.get('get_menus_by_restorer', 'MenusController.getMenusByRestorer');
Route_1.default.post('create_menu', 'MenusController.createMenu');
Route_1.default.put('edit_menu', 'MenusController.editMenu');
Route_1.default.delete('delete_menu', 'MenusController.deleteMenu');
//# sourceMappingURL=routes.js.map