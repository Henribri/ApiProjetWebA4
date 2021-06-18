"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthController {
    async login({ auth, request, response }) {
        const email = request.input('email');
        const password = request.input('password');
        try {
            const token = jsonwebtoken_1.default.sign({
                data: 'foobar'
            }, 'TOKEN_PRIVATE_KEY', { expiresIn: '30m' });
            const refresh_token = await auth.use('api').attempt(email, password, {
                expiresIn: '1days'
            });
            return { token, refresh_token };
        }
        catch {
            return response.badRequest('Invalid credentials');
        }
    }
    async refresh_token({ auth, response }) {
        try {
            const refreshToken = await auth.use('api').authenticate();
            if (refreshToken)
                return jsonwebtoken_1.default.sign({ data: 'foobar' }, 'TOKEN_PRIVATE_KEY', { expiresIn: '30m' });
        }
        catch {
            return response.badRequest('Invalid credentials');
        }
    }
    async check({ request }) {
        return jsonwebtoken_1.default.verify(request.input('jwt'), 'TOKEN_PRIVATE_KEY');
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map