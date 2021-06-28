"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const CreditCard_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/CreditCard"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class CreditCardsController {
    async index({ response, request }) {
        try {
            const user = await User_1.default.findOrFail(jsonwebtoken_1.default.verify(request.input('jwt'), 'TOKEN_PRIVATE_KEY')['user_id']);
            if (user.role.role_id == 5 || user.role.role_id == 4) {
                const CreditCards = await CreditCard_1.default.query();
                return response.status(200).json({ CreditCards });
            }
            else {
                return response.status(403).json({ message: "Error you don't have the correct permissions" });
            }
        }
        catch (err) {
            return response.status(500).json({ err });
        }
    }
    async getById({ response, request }) {
        try {
            const user = await User_1.default.findOrFail(jsonwebtoken_1.default.verify(request.input('jwt'), 'TOKEN_PRIVATE_KEY')['user_id']);
            if (user) {
                const creditcard = await CreditCard_1.default.findOrFail(user.fk_credit_card_id);
                return response.status(200).json({ creditcard });
            }
            else {
                return response.status(403).json({ message: 'error wrong user id' });
            }
        }
        catch (err) {
            return response.status(500).json({ err });
        }
    }
    async create({ request, response }) {
        try {
            const user = await User_1.default.findOrFail(jsonwebtoken_1.default.verify(request.input('jwt'), 'TOKEN_PRIVATE_KEY')['user_id']);
            if (user.fk_credit_card_id == null) {
                const creditcard = await CreditCard_1.default.create({ credit_card_type: request.body()['credit_card_type'], credit_card_num: request.body()['credit_card_num'] });
                await user.related('credit_card').associate(creditcard);
                return response.status(200).json({ creditcard });
            }
            else if (user.fk_credit_card_id != null) {
                return response.status(400).json({ message: 'Error this user has already a credit card update it instead' });
            }
            else {
                return response.status(403).json({ message: 'error wrong user id' });
            }
        }
        catch (err) {
            return response.status(500).json({ err });
        }
    }
    async update({ request, response }) {
        try {
            const user = await User_1.default.findOrFail(jsonwebtoken_1.default.verify(request.input('jwt'), 'TOKEN_PRIVATE_KEY')['user_id']);
            if (user.fk_credit_card_id != null) {
                const creditcard = await CreditCard_1.default.findOrFail(user.fk_credit_card_id);
                creditcard.merge(request.body());
                await creditcard.save();
                return response.status(200).json({ creditcard });
            }
            else if (user) {
                return response.status(400).json({ message: 'Error this user does not have any credit cards' });
            }
            else {
                return response.status(403).json({ message: 'error wrong user id' });
            }
        }
        catch (err) {
            return response.status(500).json({ err });
        }
    }
    async delete({ response, request }) {
        try {
            const user = await User_1.default.findOrFail(jsonwebtoken_1.default.verify(request.input('jwt'), 'TOKEN_PRIVATE_KEY')['user_id']);
            if (user.fk_credit_card_id != null) {
                const creditcard = await CreditCard_1.default.findOrFail(user.fk_credit_card_id);
                await creditcard.delete();
                return response.status(200).json({ creditcard });
            }
            else if (user) {
                return response.status(400).json({ message: 'Error this user does not have any credit cards' });
            }
            else {
                return response.status(403).json({ message: 'error wrong user id' });
            }
        }
        catch (err) {
            return response.status(500).json({ err });
        }
    }
}
exports.default = CreditCardsController;
//# sourceMappingURL=CreditCardsController.js.map