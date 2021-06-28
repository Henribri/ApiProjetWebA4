"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Restaurateurs extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'restaurateurs';
    }
    async up() {
        this.schema.dropTable(this.tableName);
    }
    async down() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('restaurateur_id').primary;
            table.string('restaurateur_name').notNullable();
            table.string('restaurateur_lastname').notNullable();
            table.string('restaurateur_password').notNullable();
            table.string('restaurateur_email').notNullable();
            table.string('restaurateur_restaurant_name').notNullable();
            table.string('restaurateur_phone_number').notNullable();
            table.integer('restaurateur_fk_parrain_id').unsigned().references('restaurateur_id').inTable('restaurateurs');
            table.integer('restaurateur_fk_refresh_token_id').unsigned().references('refreshtoken_id').inTable('refreshtokens');
            table.integer('restaurateur_fk_address_id').unsigned().references('address_id').inTable('addresses');
            table.integer('restaurateur_fk_filleul_id').unsigned().references('restaurateur_id').inTable('restaurateurs');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
}
exports.default = Restaurateurs;
//# sourceMappingURL=1624446445055_restaurateurs.js.map