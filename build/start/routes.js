"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('test', () => {
    return 'PAGE DE TEST';
});
Route_1.default.post('login_auth', 'AuthController.loginAuth');
Route_1.default.get('refresh_token_auth', 'AuthController.refreshTokenAuth');
Route_1.default.get('check_auth', 'AuthController.checkAuth');
//# sourceMappingURL=routes.js.map