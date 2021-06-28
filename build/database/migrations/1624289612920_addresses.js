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
        this.schema.alterTable(this.tableName, (table) => {
            table.string('address_city').notNullable().alter();
            table.string('address_street').notNullable().alter();
            table.integer('address_street_number').notNullable().alter();
            table.integer('address_postal_code').notNullable().alter();
        });
    }
    async down() {
        this.schema.alterTable(this.tableName, (table) => {
            table.string('address_city').nullable().alter();
            table.string('address_street').nullable().alter();
            table.integer('address_street_number').nullable().alter();
            table.integer('address_postal_code').nullable().alter();
        });
    }
}
exports.default = Addresses;
//# sourceMappingURL=1624289612920_addresses.js.map