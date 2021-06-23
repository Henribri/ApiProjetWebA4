"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ioc_Mongoose_1 = global[Symbol.for('ioc.use')]("Mongoose");
exports.default = _ioc_Mongoose_1.model('Article', new _ioc_Mongoose_1.Schema({
    name: String,
    description: String,
    price: Number,
    type: String,
    restorer: Number,
}));
//# sourceMappingURL=Article.js.map