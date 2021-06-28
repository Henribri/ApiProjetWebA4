"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Users extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'user';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('user_id').primary();
            table.string('user_firstname').notNullable();
            table.string('user_lastname').notNullable();
            table.string('user_email').notNullable();
            table.string('user_password').notNullable();
            table.string('user_phone_number').notNullable();
            table.boolean('user_is_supported').notNullable();
            table.boolean('user_support').notNullable();
            table.boolean('user_is_delivery').notNullable();
            table.integer('fk_delivery_address_id').references('address_id').inTable('address');
            table.integer('fk_payment_address_id').references('address_id').inTable('address');
            table.integer('fk_credit_card_id').references('credit_card_id').inTable('credit_card');
            table.integer('fk_restorer_id').references('restorer_id').inTable('restorer');
            table.integer('fk_role_id').references('role_id').inTable('role');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Users;
//# sourceMappingURL=1624448342269_users.js.map