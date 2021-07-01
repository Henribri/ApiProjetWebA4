"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ioc_Mongoose_1 = global[Symbol.for('ioc.use')]("Mongoose");
exports.default = _ioc_Mongoose_1.model('Command', new _ioc_Mongoose_1.Schema({
    articles: [],
    info: {
        total_price: Number,
        date: String,
        validated: Boolean,
        restorer_id: Number,
        client: {
            user_id: Number,
            firstname: String,
            lastname: String,
            email: String,
        },
        address: {
            street: String,
            postal_code: Number,
            street_number: Number,
            city: String
        }
    }
}));
//# sourceMappingURL=Command.js.map