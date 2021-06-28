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
            table.renameColumn('paymethod_id', 'credit_card_id');
            table.renameColumn('paymethod_card_type', 'credit_card_type');
            table.renameColumn('paymethod_card_number', 'credit_card_num');
        });
        this.schema.renameTable(this.tableName, 'credit_card');
    }
    async down() {
        this.schema.renameTable('credit_card', this.tableName);
        this.schema.alterTable(this.tableName, (table) => {
            table.renameColumn('credit_card_id', 'paymethod_id');
            table.renameColumn('credit_card_type', 'paymethod_card_type');
            table.renameColumn('credit_card_num', 'paymethod_card_number');
        });
    }
}
exports.default = PayMethods;
//# sourceMappingURL=1624445057198_pay_methods.js.map