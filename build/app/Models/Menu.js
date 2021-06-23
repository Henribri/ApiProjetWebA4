"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ioc_Mongoose_1 = global[Symbol.for('ioc.use')]("Mongoose");
exports.default = _ioc_Mongoose_1.model('Menu', new _ioc_Mongoose_1.Schema({
    name: String,
    articles: [new _ioc_Mongoose_1.Schema({
            name: String,
            description: String,
            type: String,
        })],
    price: Number,
    restorer: Number,
}));
//# sourceMappingURL=Menu.js.map