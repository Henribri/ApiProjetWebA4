"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Menu_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Menu"));
class MenusController {
    async getOneMenu({ request, response }) {
        try {
            return await Menu_1.default.findOne({ _id: request.input('menu_id') });
        }
        catch (err) {
            return response.status(502);
        }
    }
    async getAllMenus({ response }) {
        try {
            return await Menu_1.default.find();
        }
        catch (err) {
            return response.status(502);
        }
    }
    async getMenusByRestorer({ request, response }) {
        try {
            return await Menu_1.default.find({ restorer: request.input("restorer_id") });
        }
        catch (err) {
            return response.status(502);
        }
    }
    async createMenu({ request, response }) {
        try {
            await Menu_1.default.create(request.body());
            return response.ok("Menu created");
        }
        catch (err) {
            return response.status(502);
        }
    }
    async editMenu({ request, response }) {
        try {
            await Menu_1.default.updateOne({ _id: request.input("menu_id") }, request.body());
            return response.ok("Menu edited");
        }
        catch (err) {
            return response.status(502);
        }
    }
    async deleteMenu({ request, response }) {
        try {
            await Menu_1.default.deleteOne({ _id: request.input("menu_id") });
            return response.ok("Menu deleted");
        }
        catch (err) {
            return response.status(502);
        }
    }
}
exports.default = MenusController;
//# sourceMappingURL=MenusController.js.map