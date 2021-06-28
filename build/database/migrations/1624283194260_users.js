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
        this.schema.alterTable(this.tableName, (table) => {
            table.dropColumn('remember_me_token');
        });
    }
    async down() {
        this.schema.table(this.tableName, (table => {
            table.string('remember_me_token').nullable;
        }));
    }
}
exports.default = Users;
//# sourceMappingURL=1624283194260_users.js.map