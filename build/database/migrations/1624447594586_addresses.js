"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Addresses extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'addresses';
    }
    async up() {
        this.schema.renameTable(this.tableName, 'address');
    }
    async down() {
        this.schema.renameTable('address', this.tableName);
    }
}
exports.default = Addresses;
//# sourceMappingURL=1624447594586_addresses.js.map