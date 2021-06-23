"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Article_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Article"));
class ArticlesController {
    async getOneArticle({ request, response }) {
        try {
            return await Article_1.default.findOne({ _id: request.input('article_id') });
        }
        catch (err) {
            return response.status(502);
        }
    }
    async getAllArticles({ response }) {
        try {
            return await Article_1.default.find();
        }
        catch (err) {
            return response.status(502);
        }
    }
    async getArticlesByType({ request, response }) {
        try {
            return await Article_1.default.find({ type: request.input('article_type') });
        }
        catch (err) {
            return response.status(502);
        }
    }
    async getArticlesByRestorer({ request, response }) {
        try {
            return await Article_1.default.find({ restorer: request.input("restorer_id") });
        }
        catch (err) {
            return response.status(502);
        }
    }
    async createArticle({ request, response }) {
        try {
            await Article_1.default.create(request.body());
            return response.ok("Article created");
        }
        catch (err) {
            return response.status(502);
        }
    }
    async editArticle({ request, response }) {
        try {
            await Article_1.default.updateOne({ _id: request.input('article_id') }, request.body());
            return response.ok("Article edited");
        }
        catch (err) {
            return response.status(502);
        }
    }
    async deleteArticle({ request, response }) {
        try {
            await Article_1.default.deleteOne({ _id: request.input('article_id') });
            return response.ok("Article deleted");
        }
        catch (err) {
            return response.status(502);
        }
    }
}
exports.default = ArticlesController;
//# sourceMappingURL=ArticlesController.js.map