"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Address_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Address"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class AddressesController {
    async index({ response, request }) {
        try {
            const user_id = this.getId(request);
            if (user_id) {
                const user = await User_1.default.findOrFail(user_id);
                if (user.role.role_id == 5 || user.role.role_id == 4) {
                    const addresses = await Address_1.default.query();
                    return response.status(200).json(addresses);
                }
                else {
                    return response.status(403).json({ message: "Error you don't have the correct permissions" });
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
    async getById({ params, response, request }) {
        try {
            const user_id = this.getId(request);
            if (user_id) {
                const user = await User_1.default.findOrFail(user_id);
                if (params.type == 'payment' && user.fk_payment_address_id != null) {
                    const address = await Address_1.default.findOrFail(user.fk_payment_address_id);
                    console.log('test');
                    return response.status(200).json(address);
                }
                else if (user.fk_payment_address_id == null) {
                    return response.status(400).json({ message: 'This user does not have a payment address yet create it instead' });
                }
                if (params.type == 'delivery' && user.fk_delivery_address_id != null) {
                    const address = await Address_1.default.findOrFail(user.fk_payment_address_id);
                    return response.status(200).json(address);
                }
                else if (user.fk_delivery_address_id == null) {
                    return response.status(400).json({ message: 'This user does not have a payment address yet create it instead' });
                }
                if (params.type == 'restorer' && user.fk_restorer_id != null) {
                    const address = await Address_1.default.findOrFail(user.restorer.fk_address_id);
                    return response.status(200).json(address);
                }
                else if (user.fk_restorer_id == null) {
                    return response.status(400).json({ message: 'This user does not have a restorer yet create it instead' });
                }
                if (!user) {
                    return response.status(403).json({ message: 'error wrong user id' });
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
            return response.status(404).json('not found');
        }
    }
    async create({ request, response, params }) {
        try {
            const user_id = this.getId(request);
            if (user_id) {
                const user = await User_1.default.findOrFail(user_id);
                if (params.type == 'payment' && user.fk_payment_address_id == null) {
                    const address = await Address_1.default.create({ address_city: request.body()['address_city'], address_street: request.body()['address_street'], address_street_number: request.body()['address_street_number'], address_postal_code: request.body()['address_postal_code'] });
                    await user.related('payment_address_id').associate(address);
                    return response.status(201).json({ address });
                }
                else if (user.fk_payment_address_id != null) {
                    return response.status(400).json({ message: 'This user has already a payment address update it instead' });
                }
                if (params.type == 'delivery' && user.fk_delivery_address_id == null) {
                    const address = await Address_1.default.create({ address_city: request.body()['address_city'], address_street: request.body()['address_street'], address_street_number: request.body()['address_street_number'], address_postal_code: request.body()['address_postal_code'] });
                    await user.related('delivery_address_id').associate(address);
                    return response.status(201).json({ address });
                }
                else if (user.fk_delivery_address_id != null) {
                    return response.status(400).json({ message: 'This user has already a delivery address update it instead' });
                }
                else {
                    return response.status(500).json({ message: 'error wrong user id or params' });
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
    async update({ request, response, params }) {
        try {
            const user_id = this.getId(request);
            if (user_id) {
                const user = await User_1.default.findOrFail(user_id);
                if (params.type == 'payment' && user.fk_payment_address_id != null) {
                    const address = await Address_1.default.findOrFail(user.fk_payment_address_id);
                    address.merge(request.body());
                    await address.save();
                    return response.status(200).json({ address });
                }
                else if (user.fk_payment_address_id == null) {
                    return response.status(400).json({ message: 'This user does not have a payment address yet create it instead' });
                }
                if (params.type == 'delivery' && user.fk_delivery_address_id != null) {
                    const address = await Address_1.default.findOrFail(user.fk_payment_address_id);
                    address.merge(request.body());
                    await address.save();
                    return response.status(200).json({ address });
                }
                else if (user.fk_delivery_address_id == null) {
                    return response.status(400).json({ message: 'This user does not have a payment address yet create it instead' });
                }
                if (params.type == 'restorer' && user.fk_restorer_id != null) {
                    const address = await Address_1.default.findOrFail(user.restorer.fk_address_id);
                    address.merge(request.body());
                    await address.save();
                    return response.status(200).json({ address });
                }
                else if (user.fk_restorer_id == null) {
                    return response.status(400).json({ message: 'This user does not have a restorer yet create it instead' });
                }
                else {
                    return response.status(403).json({ message: 'Error wrong user id' });
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
    async delete({ response, request, params }) {
        try {
            const user_id = this.getId(request);
            if (user_id) {
                const user = await User_1.default.findOrFail(user_id);
                if (params.type == 'payment' && user.fk_payment_address_id != null) {
                    const address = await Address_1.default.findOrFail(user.fk_payment_address_id);
                    await address.delete();
                    return response.status(200).json({ address });
                }
                else if (user.fk_payment_address_id == null) {
                    return response.status(400).json({ message: 'This user does not have a payment address yet' });
                }
                if (params.type == 'delivery' && user.fk_delivery_address_id != null) {
                    const address = await Address_1.default.findOrFail(user.fk_payment_address_id);
                    await address.delete();
                    return response.status(200).json({ address });
                }
                else if (user.fk_delivery_address_id == null) {
                    return response.status(400).json({ message: 'This user does not have a payment address yet' });
                }
                if (params.type == 'restorer' && user.fk_restorer_id != null) {
                    const address = await Address_1.default.findOrFail(user.restorer.fk_address_id);
                    await address.delete();
                    return response.status(200).json({ address });
                }
                else if (user.fk_restorer_id == null) {
                    return response.status(400).json({ message: 'This user does not have a restorer yet' });
                }
                else {
                    return response.status(403).json({ message: 'Error wrong user id' });
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
exports.default = AddressesController;
//# sourceMappingURL=AddressesController.js.map