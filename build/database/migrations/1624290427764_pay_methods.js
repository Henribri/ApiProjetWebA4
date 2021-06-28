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
            table.renameColumn('id', 'paymethod_id');
            table.renameColumn('card_type', 'paymethod_card_type');
            table.renameColumn('card_number', 'paymethod_card_number');
        });
        this.schema.alterTable(this.tableName, (table) => {
            table.string('paymethod_card_type').notNullable().alter();
            table.integer('paymethod_card_number').notNullable().alter();
        });
    }
    async down() {
        this.schema.alterTable(this.tableName, (table) => {
            table.string('paymethod_card_type').nullable().alter();
            table.integer('paymethod_card_number').nullable().alter();
        });
        this.schema.alterTable(this.tableName, (table) => {
            table.renameColumn('paymethod_id', 'id');
            table.renameColumn('paymethod_card_type', 'card_type');
            table.renameColumn('paymethod_card_number', 'card_number');
        });
    }
}
exports.default = PayMethods;
//# sourceMappingURL=1624290427764_pay_methods.js.map