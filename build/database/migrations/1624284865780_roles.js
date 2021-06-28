"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Roles extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'roles';
    }
    async up() {
        this.schema.dropTable(this.tableName);
    }
    async down() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary;
            table.string('role', 50);
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
}
exports.default = Roles;
//# sourceMappingURL=1624284865780_roles.js.map