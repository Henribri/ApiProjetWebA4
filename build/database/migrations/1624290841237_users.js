"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Users extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'users';
    }
    async up() {
        this.schema.alterTable(this.tableName, (table) => {
            table.integer('user_fk_payement_address_id').unsigned().references('address_id').inTable('addresses');
            table.integer('user_fk_parrain_id').unsigned().references('user_id').inTable('users');
            table.integer('user_fk_refresh_token_id').unsigned().references('refreshtoken_id').inTable('refreshtokens');
            table.integer('user_fk_pay_method_id').unsigned().references('paymethod_id').inTable('pay_methods');
            table.integer('user_fk_delivery_address_id').unsigned().references('address_id').inTable('addresses');
            table.integer('user_fk_filleul_id').unsigned().references('user_id').inTable('users');
        });
    }
    async down() {
        this.schema.alterTable(this.tableName, (table) => {
            table.dropColumn('user_fk_payement_address_id');
            table.dropColumn('user_fk_parrain_id');
            table.dropColumn('user_fk_refresh_token_id');
            table.dropColumn('user_fk_delivery_address_id');
            table.dropColumn('user_fk_filleul_id');
        });
    }
}
exports.default = Users;
//# sourceMappingURL=1624290841237_users.js.map