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
        this.schema.dropTable('api_tokens');
    }
    async down() {
        this.schema.createTable('api_tokens', (table) => {
            table.increments('token_id').primary;
        });
    }
}
exports.default = Users;
//# sourceMappingURL=1624447709048_users.js.map