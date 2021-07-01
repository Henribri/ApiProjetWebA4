"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hash_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Hash"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthController {
    async loginAuth({ auth, request, response }) {
        const email = request.input('email');
        const password = request.input('password');
        try {
            const user = await User_1.default.findBy('user_email', email);
            if (user && await Hash_1.default.verify(user?.password, password)) {
                const token = jsonwebtoken_1.default.sign({
                    user_id: user.user_id
                }, 'TOKEN_PRIVATE_KEY', { expiresIn: '30m' });
                const refresh_token = await auth.use('api').attempt(email, password, {
                    expiresIn: '1days'
                });
                return { token, refresh_token };
            }
            return response.badRequest('Invalid email or password');
        }
        catch (err) {
            return response.badRequest('Invalid credentials');
        }
    }
    async refreshTokenAuth({ auth, response }) {
        try {
            const refreshToken = await auth.use('api').authenticate();
            const user_id = refreshToken.$attributes.user_id;
            if (refreshToken)
                return jsonwebtoken_1.default.sign({ user_id: user_id }, 'TOKEN_PRIVATE_KEY', { expiresIn: '30m' });
        }
        catch {
            return response.badRequest('Invalid credentials');
        }
    }
    async checkAuth({ request }) {
        const token = request.header('authorization').split(" ");
        return jsonwebtoken_1.default.verify(token[1], 'TOKEN_PRIVATE_KEY');
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map