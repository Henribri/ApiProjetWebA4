"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('test', () => {
    return 'PAGE DE TEST';
});
Route_1.default.post('signup', 'UserController.create');
Route_1.default.post('login', 'AuthController.login');
Route_1.default.get('refresh_token', 'AuthController.refresh_token');
Route_1.default.get('check', 'AuthController.check');
//# sourceMappingURL=routes.js.map