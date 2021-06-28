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
        this.schema.table(this.tableName, (table) => {
            table.renameColumn('id', 'address_id');
            table.renameColumn('city', 'address_city');
            table.renameColumn('street', 'address_street');
            table.renameColumn('street_number', 'address_street_number');
            table.renameColumn('postal_code', 'address_postal_code');
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.renameColumn('address_id', 'id');
            table.renameColumn('address_city', 'city');
            table.renameColumn('address_street', 'street');
            table.renameColumn('address_street_number', 'street_number');
            table.renameColumn('address_postal_code', 'postal_code');
        });
    }
}
exports.default = Addresses;
//# sourceMappingURL=1624289142374_addresses.js.map