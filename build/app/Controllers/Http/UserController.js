"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const CreditCard_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/CreditCard"));
const Address_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Address"));
const Role_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Role"));
const Restorer_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Restorer"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UsersController {
    async index({ response, request }) {
        try {
            const user_id = this.getId(request);
            if (user_id) {
                const user = await User_1.default.findOrFail(user_id);
                if (user.role.role_id == 5 || user.role.role_id == 4) {
                    const users = await User_1.default.query()
                        .preload('role')
                        .preload('credit_card')
                        .preload('delivery_address_id')
                        .preload('payment_address_id')
                        .preload('restorer');
                    return response.status(200).json({ users });
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
    async getById({ response, request }) {
        try {
            const user_id = this.getId(request);
            console.log(user_id);
            if (user_id) {
                const user = await User_1.default.findBy('user_id', user_id);
                console.log(user);
                return response.status(200).json({ user });
            }
            else {
                return response.status(500).json({ err: "jwt token error" });
            }
        }
        catch (err) {
            return response.status(404).json('not found');
        }
    }
    async createClient({ request, response }) {
        try {
            const existing_user = await User_1.default.findBy('user_email', request.body()['user_email']);
            if (!existing_user) {
                const user = await User_1.default.create({ user_firstname: request.body()['user_firstname'], user_lastname: request.body()['user_lastname'], user_email: request.body()['user_email'], password: request.body()['user_password'], user_phone_number: request.body()['user_phone_number'], user_is_supported: false, user_support: false, user_is_delivery: false });
                if (request.body()['delivery_address_city'] != undefined && request.body()['delivery_address_street'] != undefined && request.body()['delivery_address_postal_code'] != undefined && request.body()['delivery_address_street_number'] != undefined) {
                    const delivery_address = await Address_1.default.create({ address_city: request.body()['delivery_address_city'], address_street: request.body()['delivery_address_street'], address_street_number: request.body()['delivery_address_street_number'], address_postal_code: request.body()['delivery_address_postal_code'] });
                    await user.related('delivery_address_id').associate(delivery_address);
                }
                if (request.body()['payment_address_city'] != undefined && request.body()['payment_address_street'] != undefined && request.body()['payment_address_postal_code'] != undefined && request.body()['payment_address_street_number'] != undefined) {
                    const payment_address = await Address_1.default.create({ address_city: request.body()['payment_address_city'], address_street: request.body()['payment_address_street'], address_street_number: request.body()['payment_address_street_number'], address_postal_code: request.body()['payment_address_postal_code'] });
                    await user.related('payment_address_id').associate(payment_address);
                }
                if (request.body()['credit_card_type'] != undefined && request.body()['credit_card_num'] != undefined) {
                    const creditcard = await CreditCard_1.default.create({ credit_card_type: request.body()['credit_card_type'], credit_card_num: request.body()['credit_card_num'] });
                    await user.related('credit_card').associate(creditcard);
                }
                const role = await Role_1.default.findOrFail(1);
                await user.related('role').associate(role);
                return response.status(201).json({ user });
            }
            else {
                return response.status(400).json({ message: "email already taken", code: "email" });
            }
        }
        catch (err) {
            return response.status(500).json({ err });
        }
    }
    async createDelivery({ request, response }) {
        try {
            const existing_user = await User_1.default.findBy('user_email', request.body()['user_email']);
            if (!existing_user) {
                const user = await User_1.default.create({ user_firstname: request.body()['user_firstname'], user_lastname: request.body()['user_lastname'], user_email: request.body()['user_email'], password: request.body()['user_password'], user_phone_number: request.body()['user_phone_number'], user_is_supported: false, user_support: false, user_is_delivery: true });
                const role = await Role_1.default.findOrFail(2);
                await user.related('role').associate(role);
                return response.status(201).json({ user });
            }
            else {
                return response.status(400).json({ message: "email already taken", code: "email" });
            }
        }
        catch (err) {
            return response.status(500).json({ err });
        }
    }
    async createRestorer({ request, response }) {
        try {
            const existing_user = await User_1.default.findBy('user_email', request.body()['user_email']);
            if (!existing_user) {
                const user = await User_1.default.create({ user_firstname: request.body()['user_firstname'], user_lastname: request.body()['user_lastname'], user_email: request.body()['user_email'], password: request.body()['user_password'], user_phone_number: request.body()['user_phone_number'], user_is_supported: false, user_support: false, user_is_delivery: false });
                const role = await Role_1.default.findOrFail(3);
                await user.related('role').associate(role);
                const restorer = await Restorer_1.default.create({ restorer_name: request.body()['restorer_name'] });
                const address = await Address_1.default.create({ address_city: request.body()['restorer_address_city'], address_street: request.body()['restorer_address_street'], address_street_number: request.body()['restorer_address_street_number'], address_postal_code: request.body()['restorer_address_postal_code'] });
                await restorer.related('address').associate(address);
                await user.related('restorer').associate(restorer);
                return response.status(201).json({ user });
            }
            else {
                return response.status(400).json({ message: "email already taken", code: "email" });
            }
        }
        catch (err) {
            return response.status(500).json({ err });
        }
    }
    async update({ request, response }) {
        try {
            const user_id = this.getId(request);
            if (user_id) {
                const user = await User_1.default.findOrFail(user_id);
                user.merge({ user_firstname: request.body()['user_firstname'], user_lastname: request.body()['user_lastname'], user_email: request.body()['user_email'], password: request.body()['user_password'], user_phone_number: request.body()['user_phone_number'] });
                await user.save();
                return response.status(200).json({ user });
            }
            else {
                return response.status(500).json({ err: "jwt token error" });
            }
        }
        catch (err) {
            return response.status(500).json({ err });
        }
    }
    async updateSponsor({ request, response }) {
        try {
            const user_id = this.getId(request);
            if (user_id) {
                const user = await User_1.default.findOrFail(user_id);
                const filleul = await User_1.default.findBy('user_email', request.body()['filleul_email']);
                if (user.user_support == false && filleul && user.fk_role_id == filleul.fk_role_id) {
                    if (filleul.user_is_supported == false) {
                        user.user_support = true;
                        await user.save();
                        filleul.user_is_supported = true;
                        await filleul.save();
                    }
                    else {
                        return response.status(400).json({ message: "error this user is already supported or you enter the wrong email" });
                    }
                    return response.status(200).json({ user });
                }
                else {
                    return response.status(400).json({ message: "error Unable to find the user or the user is already supporting someone" });
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
                await user.delete();
                return response.status(200).json({ user });
            }
            else {
                return response.status(500).json({ err: "jwt token error" });
            }
        }
        catch (err) {
            return response.status(500).json({ err: err, message: "wrong user" });
        }
    }
    getId(request) {
        const token = request.header('authorization')?.split(" ");
        try {
            let user_id = jsonwebtoken_1.default.verify(token[1], 'TOKEN_PRIVATE_KEY')['user_id'];
            console.log(user_id);
            return user_id;
        }
        catch {
            return false;
        }
    }
}
exports.default = UsersController;
//# sourceMappingURL=UserController.js.map