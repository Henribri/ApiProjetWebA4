"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class UsersController {
    async create() {
        return await User_1.default.create({ email: 'Henri', password: 'youpi' });
    }
}
exports.default = UsersController;
//# sourceMappingURL=UserController.js.map