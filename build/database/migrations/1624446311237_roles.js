"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Roles extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'role';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('role_id').primary;
            table.string('role_name').notNullable();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Roles;
//# sourceMappingURL=1624446311237_roles.js.map