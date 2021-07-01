"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('', () => {
    return '';
});
Route_1.default.get('articles', 'ArticlesController.getAllArticles');
Route_1.default.get('article', 'ArticlesController.getOneArticle');
Route_1.default.get('articles-type', 'ArticlesController.getArticlesByType');
Route_1.default.get('articles-restorer', 'ArticlesController.getArticlesByRestorer');
Route_1.default.get('menus', 'MenusController.getAllMenus');
Route_1.default.get('menu', 'MenusController.getOneMenu');
Route_1.default.get('menus-restorer', 'MenusController.getMenusByRestorer');
Route_1.default.group(() => {
    Route_1.default.post('menu', 'MenusController.createMenu');
    Route_1.default.put('menu', 'MenusController.editMenu');
    Route_1.default.delete('menu', 'MenusController.deleteMenu');
    Route_1.default.post('article', 'ArticlesController.createArticle');
    Route_1.default.put('article', 'ArticlesController.editArticle');
    Route_1.default.delete('article', 'ArticlesController.deleteArticle');
}).middleware('auth');
//# sourceMappingURL=routes.js.map