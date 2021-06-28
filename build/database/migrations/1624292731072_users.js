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
        this.schema.table(this.tableName, (table) => {
            table.string('user_name').notNullable();
            table.string('user_lastname').notNullable();
            table.string('user_password').notNullable();
            table.string('user_email').notNullable();
        });
    }
    async down() {
        this.schema.alterTable(this.tableName, (table) => {
            table.dropColumn('user_name');
            table.dropColumn('user_lastname');
            table.dropColumn('user_password');
            table.dropColumn('user_email');
        });
    }
}
exports.default = Users;
//# sourceMappingURL=1624292731072_users.js.map