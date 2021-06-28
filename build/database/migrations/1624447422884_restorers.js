"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Restorers extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'restorer';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('restorer_id').primary;
            table.string('restorer_name').notNullable();
            table.integer('fk_address_id').references('address_id').inTable('addresses');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Restorers;
//# sourceMappingURL=1624447422884_restorers.js.map