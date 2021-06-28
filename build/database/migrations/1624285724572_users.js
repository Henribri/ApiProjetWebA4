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
            table.dropColumn('email');
            table.dropColumn('password');
            table.dropColumn('User_LastName');
            table.dropColumn('User_Name');
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.string('email');
            table.string('password');
            table.string('User_LastName');
            table.string('User_Name');
        });
    }
}
exports.default = Users;
//# sourceMappingURL=1624285724572_users.js.map