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
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary;
            table.string("city");
            table.string('street');
            table.integer('street_number');
            table.integer('postal_code');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Addresses;
//# sourceMappingURL=1624276458639_addresses.js.map