"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class PayMethods extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'pay_methods';
    }
    async up() {
        this.schema.alterTable(this.tableName, (table) => {
            table.string('paymethod_card_number').notNullable().alter();
        });
    }
    async down() {
        this.schema.alterTable(this.tableName, (table) => {
            table.integer('paymethod_card_number').notNullable().alter();
        });
    }
}
exports.default = PayMethods;
//# sourceMappingURL=1624375471154_pay_methods.js.map