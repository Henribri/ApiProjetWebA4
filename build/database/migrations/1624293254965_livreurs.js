"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Livreurs extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'livreurs';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('livreur_id').primary;
            table.string('livreur_name').notNullable();
            table.string('livreur_lastname').notNullable();
            table.string('livreur_password').notNullable();
            table.string('livreur_email').notNullable();
            table.string('livreur_vehicule').notNullable();
            table.string('livreur_phone_number').notNullable();
            table.integer('livreur_fk_parrain_id').unsigned().references('livreur_id').inTable('livreurs');
            table.integer('livreur_fk_refresh_token_id').unsigned().references('refreshtoken_id').inTable('refreshtokens');
            table.integer('livreur_fk_address_id').unsigned().references('address_id').inTable('addresses');
            table.integer('livreur_fk_filleul_id').unsigned().references('livreur_id').inTable('livreurs');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Livreurs;
//# sourceMappingURL=1624293254965_livreurs.js.map