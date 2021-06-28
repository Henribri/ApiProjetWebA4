"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Tokens extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'tokens';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary;
            table.string('token');
            table.dateTime('expiration_date');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Tokens;
//# sourceMappingURL=1624280782797_tokens.js.map