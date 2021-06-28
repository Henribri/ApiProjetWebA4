"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Users extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'user';
    }
    async up() {
        this.schema.renameTable('user', 'users');
        this.schema.renameTable('address', 'addresses');
        this.schema.renameTable('role', 'roles');
        this.schema.renameTable('restorer', 'restorers');
        this.schema.renameTable('credit_card', 'credit_cards');
        this.schema.dropTable('livreurs');
    }
    async down() {
        this.schema.renameTable('users', 'user');
        this.schema.renameTable('addresses', 'address');
        this.schema.renameTable('roles', 'role');
        this.schema.renameTable('restorers', 'restorer');
        this.schema.renameTable('credit_cards', 'credit_card');
    }
}
exports.default = Users;
//# sourceMappingURL=1624455276255_users.js.map