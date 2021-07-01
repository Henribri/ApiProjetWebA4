"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const Restorer_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Restorer"));
const Address_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Address"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class RestorersController {
    async index({ response }) {
        try {
            const restorers = await Restorer_1.default.query();
            return response.status(200).json({ restorers });
        }
        catch (err) {
            return response.status(500).json({ err });
        }
    }
    async getById({ response, params }) {
        try {
            const restorer = await Restorer_1.default.findOrFail(params.id);
            return response.status(200).json(restorer);
        }
        catch (error) {
            return response.status(404).json({ message: 'restorer not found' });
        }
    }
    async create({ request, response }) {
        try {
            const user_id = this.getId(request);
            if (user_id) {
                const user = await User_1.default.findOrFail(user_id);
                if (user.fk_restorer_id == null) {
                    const restorer = await Restorer_1.default.create({ restorer_name: request.body()['restorer_name'] });
                    const address = await Address_1.default.create({ address_city: request.body()['address_city'], address_street: request.body()['address_street'], address_street_number: request.body()['address_street_number'], address_postal_code: request.body()['address_postal_code'] });
                    await restorer.related('address').associate(address);
                    await user.related('restorer').associate(restorer);
                    return response.status(201).json({ restorer });
                }
                else if (user.fk_restorer_id != null) {
                    return response.status(400).json({ message: 'Error this user has already a restorer update it instead' });
                }
                else {
                    return response.status(403).json({ message: 'error wrong user id' });
                }
            }
            else {
                return response.status(500).json({ err: "jwt token error" });
            }
        }
        catch (err) {
            return response.status(500).json(err);
        }
    }
    async update({ request, response }) {
        try {
            const user_id = this.getId(request);
            if (user_id) {
                const user = await User_1.default.findOrFail(user_id);
                if (user.fk_restorer_id != null) {
                    const restorer = await Restorer_1.default.findOrFail(user.fk_restorer_id);
                    restorer.merge(request.body());
                    await restorer.save();
                    return response.status(200).json({ restorer });
                }
                else if (user.fk_restorer_id == null) {
                    return response.status(400).json({ message: 'Error this user does not have  a restorer create it instead' });
                }
                else {
                    return response.status(403).json({ message: 'error wrong user id' });
                }
            }
            else {
                return response.status(500).json({ err: "jwt token error" });
            }
        }
        catch (err) {
            return response.status(500).json({ err });
        }
    }
    async delete({ response, request }) {
        try {
            const user_id = this.getId(request);
            if (user_id) {
                const user = await User_1.default.findOrFail(user_id);
                if (user.fk_restorer_id != null) {
                    const restorer = await Restorer_1.default.findOrFail(user.fk_restorer_id);
                    await restorer.delete();
                    return response.status(200).json({ restorer });
                }
                else if (user.fk_restorer_id == null) {
                    return response.status(400).json({ message: 'Error this user does not have a restorer yet ' });
                }
                else {
                    return response.status(500).json({ message: 'error wrong user id' });
                }
            }
            else {
                return response.status(500).json({ err: "jwt token error" });
            }
        }
        catch (err) {
            return response.status(500).json({ err });
        }
    }
    getId(request) {
        const token = request.header('authorization')?.split(" ");
        try {
            const user_id = jsonwebtoken_1.default.verify(token[1], 'TOKEN_PRIVATE_KEY')['user_id'];
            return user_id;
        }
        catch {
            return false;
        }
    }
}
exports.default = RestorersController;
//# sourceMappingURL=RestorersController.js.map