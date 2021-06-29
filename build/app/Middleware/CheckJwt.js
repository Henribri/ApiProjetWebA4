"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class CheckJwt {
    async handle({ request, response }, next) {
        await jsonwebtoken_1.default.verify(request.input('jwt'), "TOKEN_PRIVATE_KEY", function (err) {
            if (err)
                return response.unauthorized({ message: "JWT Token error", error: err });
            next();
        });
    }
}
exports.default = CheckJwt;
//# sourceMappingURL=CheckJwt.js.map